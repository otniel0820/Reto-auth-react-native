import {create} from 'zustand';
import {User} from '../../../domain/entity/user.entity';
import {AuthStatus} from '../../../infrastructure/interfaces/auth.status';
import {authCheckStatus, authLogin, authRegister} from '../../../actions/auth';
import {StorageAdapter} from '../../../config/adapters/asyncStorage';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, fullName: string) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  status: 'checking',
  token: undefined,
  user: undefined,

  login: async (email, password) => {
    const resp = await authLogin(email, password);
    if (!resp) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      return false;
    }

    await StorageAdapter.setItem('token', resp.token);
    
    set({status: 'authenticated', token: resp.token, user: resp.user});
    
    return true;
  },

  register: async (email, password, fullName) => {
    const resp = await authRegister(email, password, fullName);
    if (!resp) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      return false;
    }

    await StorageAdapter.setItem('token', resp.token);
    
    console.log({resp});
    
    return true;
  },

  checkStatus: async () => {
    const resp = await authCheckStatus();
    if (!resp) {
      set({status: 'unauthenticated', token: undefined, user: undefined});
      return;
    }
    await StorageAdapter.setItem('token', resp.token);
    set({status: 'authenticated', token: resp.token, user: resp.user});
  },

  logout: async ()=>{
    await StorageAdapter.removeItem('token');
    set({status: 'unauthenticated', token: undefined, user: undefined});
  
  }
}));

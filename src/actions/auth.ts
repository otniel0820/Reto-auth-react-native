import {authUser} from '../config/api/authUser';
import {User} from '../domain/entity/user.entity';
import type {AuthResponse} from '../infrastructure/interfaces/auth.response';

const returnUserToken = (data: AuthResponse) => {
  const user: User = {
    id: data.id,
    email: data.email,
    fullName: data.fullName,
    isActive: data.isActive,
    roles: data.roles,
  };

  return {
    user: user,
    token: data.token,
  };
};

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();
  try {
    const {data} = await authUser.post<AuthResponse>('/auth/login', {
      email,
      password,
    });

    return returnUserToken(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const authRegister = async (email: string, password: string, fullName:string) => {
  email = email.toLowerCase();
  try {
    const {data} = await authUser.post<AuthResponse>('/auth/register', {
      email,
      password,
      fullName
    });

    return returnUserToken(data);
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const authCheckStatus = async () => {
  try {
    const {data} = await authUser.get<AuthResponse>('/auth/private');
    return returnUserToken(data);
  } catch (error) {
    return null
  }
};

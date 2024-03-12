import { ReactNode } from 'react'; 

declare namespace IAuthContext {
  export interface AuthUserContextType {
    authUser: User | null;
    setAuthUser: (user: User | null) => void;
  }

  export interface AuthUserProviderProps {
    children: ReactNode;
  }
}

export { IAuthContext }
'use client'
import { createContext, useState, useContext } from 'react';
import { User } from "firebase/auth";
import type { IAuthContext } from './IAuthContext';

const AuthUserContext = createContext<IAuthContext.AuthUserContextType>({
  authUser: null,
  setAuthUser: () => {}
});

export const useAuthUser = () => useContext(AuthUserContext);

export const AuthUserProvider: React.FC<IAuthContext.AuthUserProviderProps> = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  return (
    <AuthUserContext.Provider 
      value={{ 
        authUser,
        //methods 
        setAuthUser 
      }}>
      {children}
    </AuthUserContext.Provider>
  );
};

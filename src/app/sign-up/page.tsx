'use client'

import { useState } from 'react';
import Cookies from 'js-cookie';
import { Alert, message } from 'antd';
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from '@/firebase';
import type { ISignUp } from './ISignUp';
import SignUpForm from './SignUpForm/index';
import { useAuthUser } from '@/application/authContext/authContext';
import { URL_HOME } from '@/consts/routes';

const SignUp = () => {
  const router = useRouter();
  const { setAuthUser } = useAuthUser();

  const [messageApi, contextHolder] = message.useMessage();
  const [error, setError] = useState<ISignUp.FormError | null>(null);

  const handleSignUp = (values: ISignUp.FormValues) => {
    const { email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
    .then(authUser => {
      setAuthUser(authUser.user);

      authUser.user.getIdToken().then(accessToken => {
        Cookies.set('token', accessToken);
        router.push(URL_HOME);
      }).catch(error => {
        console.error('Error retrieving token:', error);
        handleFirebaseError(error);
      });
    }).catch(error => {
      handleFirebaseError(error);
    })
  };

  const handleFirebaseError = (error: any) => {
    setError({ message: error.message });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {contextHolder}
      {error && 
        <Alert
          showIcon
          closable
          type="error"
          message="Error"
          description={error.message}
        />
      }

      <SignUpForm onFinish={handleSignUp} />
    </div>
  )
}

export default SignUp;

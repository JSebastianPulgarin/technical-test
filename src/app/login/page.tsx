'use client';

import { useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Alert, Form, Input, Button } from 'antd';
import { signInWithEmailAndPassword } from "firebase/auth";
import type { ILogin } from './ILogin';

import { auth } from '@/firebase';
import { URL_HOME } from '@/consts/routes';

const Login = (): JSX.Element => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [error, setError] = useState<{ message: string } | null>(null);

  const onFinish = (values: ILogin.LoginFormValues) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      user.getIdToken().then((accessToken) => {
        Cookies.set('token', accessToken);
        router.push(URL_HOME);
      });
    })
    .catch((error) => {
      handleFirebaseError(error);
    });
  }

  const handleFirebaseError = (error: any) => {
    setError({ message: error.message });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h1>Login</h1>
      {error &&
        <Alert
          showIcon
          closable
          type="error"
          message="Error"
          description={error.message}
        />
      }
      <Form
        form={form}
        name="sign-up"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <span>Don't have an account? <Link href="/sign-up">sign up</Link></span>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;

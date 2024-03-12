'use client'

import { auth } from '@/firebase';
import { Form, Input } from 'antd';
import Link from 'next/link';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AuthTemplate from '@/app/ui/templates/authTemplate';

const Login = () => {
  const firebaseAction = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
  
  return (
    <AuthTemplate title="Login" submitText="Login" firebaseAction={firebaseAction}>
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
    </AuthTemplate>
  );
};

export default Login;

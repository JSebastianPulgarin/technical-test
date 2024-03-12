'use client'

import { auth } from '@/firebase';
import { Form, Input } from 'antd';
import AuthTemplate from '@/app/ui/templates/authTemplate';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  const firebaseAction = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

  return (
    <AuthTemplate title="Sign Up" submitText="Sign Up" firebaseAction={firebaseAction}>
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
    </AuthTemplate>
  );
};

export default SignUp;

import styles from './authTemplate.module.scss';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { Alert, Form, Button } from 'antd';
import { URL_HOME } from '@/consts/routes';

interface AuthTemplateProps {
  title: string;
  submitText: string;
  firebaseAction: (email: string, password: string) => Promise<any>;
  children: React.ReactNode;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ title, submitText, firebaseAction, children }) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const onFinish = (values: any) => {
    const { email, password } = values;
    setLoading(true);
    firebaseAction(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.getIdToken().then((accessToken: any) => {
          Cookies.set('token', accessToken);
          router.push(URL_HOME);
        });
      })
      .catch((error) => {
        setLoading(false);
        handleFirebaseError(error);
      });
  };

  const handleFirebaseError = (error: any) => {
    setError({ message: error.message });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      {error && (
        <Alert
          showIcon
          closable
          type="error"
          message="Error"
          description={error.message}
        />
      )}
      <Form
        form={form}
        name="auth-form"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {children}
        
        <Form.Item>
          <Button className={styles.button_submit} type="primary" htmlType="submit" loading={loading}>
            {submitText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthTemplate;

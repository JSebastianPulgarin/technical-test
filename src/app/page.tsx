import { redirect } from 'next/navigation'
import { cookies } from "next/headers";

import { URL_SIGN_UP, URL_LOGIN } from '@/consts/routes';

export default function Page() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect(URL_LOGIN)  
  } else {
    redirect(URL_SIGN_UP)
  } 
}

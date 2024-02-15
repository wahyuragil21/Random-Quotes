import FormComponent from '@/components/FormComponent';
import { FieldNamesType } from 'antd/es/cascader';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';


const handleLogin = async (data: FieldNamesType) => {
  'use server';

    const response = await fetch('https://reqres.in/api/login', {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const {token} = await response.json();

    if (response.status == 200) {
      cookies().set('Authorization', token);
      return redirect('/list-quote');
    }

    if (response.statusText == "Bad Request") {
      //Toast
    }
};


const Login = () => (
  <>
    <FormComponent onSubmit={handleLogin} />
  </>
);

export default Login;
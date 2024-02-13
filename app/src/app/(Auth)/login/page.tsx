import FormComponent from '@/components/FormComponent';
import { FieldNamesType } from 'antd/es/cascader';
import { redirect } from 'next/navigation';
import React from 'react';


const handleLogin = async (data: FieldNamesType) => {
  "use server";
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  // const x = await response.json();

  if (response.status == 200) {
    return redirect('/home');
  }

};
const Login = () => (
  <>
    <FormComponent onSubmit={handleLogin} />
  </>
);

export default Login;
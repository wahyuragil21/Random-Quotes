import FormComponent from '@/components/FormComponent';
import { FieldNamesType } from 'antd/es/cascader';
import { redirect } from 'next/navigation';
import React from 'react';


const handleRegister = async (data: FieldNamesType) => {
  "use server";
  const response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  
  if (response.status == 200) {
    return redirect('/login');
  }  

};
const Register = () => (
  <>
    <FormComponent onSubmit={handleRegister} />
  </>
);

export default Register;
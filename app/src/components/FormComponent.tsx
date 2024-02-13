"use client";
import React from 'react';
import { Button, Form, Input } from 'antd';
import { FieldNamesType } from 'antd/es/cascader';
import { usePathname } from 'next/navigation';

type FieldType = {
  email?: string;
  password?: string;
};

type Props = {
  onSubmit: (data: FieldNamesType) => Promise<void>;
}


const FormComponent = ({ onSubmit }: Props) => {
  const pathname = usePathname()
  console.log(pathname);

  return (
    <div className='flex flex-col justify-center p-10 border-2 rounded-xl w-96 m-auto mt-20'>
      <h1 className='text-xl font-bold mb-5'>{pathname == '/login' ? 'Login' : 'Register'}</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 450 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Button htmlType="submit" style={{ width: 300 }}>
          {pathname == '/login' ? 'Login' : 'Register'}
        </Button>

      </Form>
    </div>
  )
};

export default FormComponent;
"use client";
import React from 'react';
import { Button, Card, Form, Input } from 'antd';
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
  return (
    <div className='flex flex-col justify-center p-10 border-2 rounded-xl w-96 m-auto mt-10 mb-10'>
      <img alt="example" src="https://i.pinimg.com/564x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg" />
      <h1 className='text-md font-semibold mb-5'>{pathname == '/login' ? 'Login With :' : 'Register'}</h1>
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

        <Button htmlType="submit" className='bg-blue-500 w-[300px] text-white hover:bg-blue-700'>
          {pathname == '/login' ? 'Login' : 'Register'}
        </Button>
      </Form>
    </div>
  )
};

export default FormComponent;
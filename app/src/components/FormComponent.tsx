"use client";
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { FieldNamesType } from 'antd/es/cascader';

type FieldType = {
  email?: string;
  password?: string;
};

type Props = {
  onSubmit: (data: FieldNamesType) => Promise<void>;
}

const FormComponent = ({ onSubmit }: Props) => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onSubmit}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default FormComponent;
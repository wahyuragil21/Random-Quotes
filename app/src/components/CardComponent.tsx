"use client";
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const CardComponent: React.FC = () => (
  <div className='flex justify-center pt-3'>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://i.pinimg.com/564x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </div>
);

export default CardComponent;
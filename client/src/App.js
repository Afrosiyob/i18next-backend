import React from "react";

import axios from "axios";

import { Form, Input, Button } from "antd";

function App() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios
      .post("https://polar-bastion-29254.herokuapp.com/api/tag", values)
      .then(() => {
        form.resetFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
    >
      <Form.Item
        label="Tag"
        name="tag"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="En"
        name="en"
        rules={[
          {
            required: true,
            message: "Please input your En!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Uz"
        name="uz"
        rules={[
          {
            required: true,
            message: "Please input your Uz!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default App;

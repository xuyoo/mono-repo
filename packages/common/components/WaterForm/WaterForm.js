import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './WaterForm.css';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

const WaterForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="form-wrapper"
    >
      <h2>common component</h2>
      <Form.Item
        label="name"
        name="username"
        rules={[
          {
            required: true,
            message: 'please input your name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          search
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WaterForm;
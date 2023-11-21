import { KeyOutlined, PhoneOutlined } from "@ant-design/icons"
import { Button, Checkbox, Col, Form, Input, Row } from "antd"

const LoginForm = (props) => {
    return (
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={() => console.log("submit")}
            onFinishFailed={() => console.log("submit failed")}
        >
            <Row gutter={[16, 0]}>
                <Col span={24}>
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                type: "tel",
                                message: "Vui lòng nhập đúng số điện thoại!",
                            },
                            {
                                required: true,
                                message: "Vui lòng nhập số điện thoại!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<PhoneOutlined />}
                            placeholder="Số điện thoại"
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập mật khẩu!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<KeyOutlined />}
                            type="password"
                            placeholder="Mật khẩu"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <a href="" style={{ textAlign: "end" }}>
                        Forgot password
                    </a>
                </Col>
                <Col span={24}>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: "100%", marginTop: "25px" }}
                        >
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default LoginForm

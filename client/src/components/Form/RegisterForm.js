import {
    FlagOutlined,
    HomeOutlined,
    IdcardOutlined,
    KeyOutlined,
    PhoneOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons"
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd"

const RegisterForm = (props) => {
    return (
        <Form
            name="basic"
            onFinish={() => console.log("submit")}
            onFinishFailed={() => console.log("submit failed")}
        >
            <Row gutter={[16, 0]}>
                <Col span={24}>
                    <Form.Item
                        name="cccd"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập CCCD!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<IdcardOutlined />}
                            type="text"
                            placeholder="CCCD"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập họ và tên!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            type="text"
                            placeholder="Họ và tên"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
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
                <Col span={12}>
                    <Form.Item
                        name="gender"
                        rules={[
                            { required: true, message: "Vui lòng chọn giới tính!" },
                        ]}
                    >
                        <Select placeholder="Giới tính">
                            <Select.Option value="male">Nam</Select.Option>
                            <Select.Option value="female">Nữ</Select.Option>
                            <Select.Option value="other">Khác</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="date-picker"
                        rules={[
                            { required: true, message: "Vui lòng chọn ngày sinh!" },
                        ]}
                    >
                        <DatePicker
                            style={{ width: "100%" }}
                            placeholder="Ngày sinh"
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        name="nationality"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập quốc tịch!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<FlagOutlined />}
                            type="text"
                            placeholder="Quốc tịch"
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        name="nation"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập dân tộc!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<TeamOutlined />}
                            type="text"
                            placeholder="Dân tộc"
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        name="hometown"
                        rules={[
                            {
                                required: true,
                                message: "Vui lòng nhập quê quán!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<HomeOutlined />}
                            type="text"
                            placeholder="Quê quán"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
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
                            placeholder="Nhập lại mật khẩu"
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item>
                        <Button
                            style={{ width: "100%" }}
                            type="primary"
                            htmlType="submit"
                        >
                            Đăng kí
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

export default RegisterForm

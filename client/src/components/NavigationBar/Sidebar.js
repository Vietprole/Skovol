import { HomeOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import React from "react"
import { Link } from "react-router-dom"

const Sidebar = (props) => {
    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={[
                {
                    key: "1",
                    label: (
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <HomeOutlined />
                            <span>Trang chủ</span>
                        </Link>
                    ),
                },
            ]}
        />
    )
}

export default Sidebar

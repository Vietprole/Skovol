import { SearchOutlined } from "@ant-design/icons"
import { Input, Menu } from "antd"
import React from "react"
import { Link } from "react-router-dom"

const Topbar = (props) => {
    return (
        <Menu
            theme="dark"
            mode="horizontal"
            items={[
                {
                    key: "logo",
                    disabled: true,
                    label: (
                        <Link to="/" style={{ textDecoration: "none" }}>
                            NFT Ticket
                        </Link>
                    ),
                },
                {
                    key: "search",
                    disabled: true,
                    label: (
                        <Input placeholder="Search..." prefix={<SearchOutlined />} />
                    ),
                },
            ]}
        />
    )
}

export default Topbar

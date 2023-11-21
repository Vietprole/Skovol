import { Layout } from "antd"
import React, { useState } from "react"
import { useOutlet } from "react-router-dom"
import Sidebar from "../components/NavigationBar/Sidebar"
import Topbar from "../components/NavigationBar/Topbar"

export const BaseLayout = () => {
    const outlet = useOutlet()
    const [collapsed, setCollapsed] = useState(true)

    return (
        <Layout>
            <Layout.Header>
                <Topbar />
            </Layout.Header>
            <Layout>
                <Layout.Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={() => setCollapsed(!collapsed)}
                    style={{
                        overflow: "auto",
                        height: "100vh",
                        position: "sticky",
                        top: 0,
                        left: 0,
                    }}
                >
                    <Sidebar />
                </Layout.Sider>
                <Layout>
                    <Layout.Content style={{ margin: "50px" }}>
                        {outlet}
                    </Layout.Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default BaseLayout

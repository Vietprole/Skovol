import { CalendarFilled, HeartFilled } from "@ant-design/icons"
import { Space, Tabs, Typography } from "antd"
import React from "react"
import OriginalTicketTab from "../Ticket/OriginalTicketTab"
import SecondaryTicketTab from "../Ticket/SecondaryTicketTab"

const EventInfo = () => {
    return (
        <>
            <Space direction="vertical">
                <Typography.Title
                    level={1}
                    style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        fontWeight: "bold",
                        margin: "0",
                    }}
                >
                    Show 1
                </Typography.Title>
                <Space align="center">
                    <HeartFilled />
                    <Typography.Text> Live Music</Typography.Text>
                </Space>
                <Space align="center">
                    <CalendarFilled />
                    <Typography.Text>19/11/2021</Typography.Text>
                </Space>
                <Space align="center">
                    <CalendarFilled />
                    <Typography.Text>Thành phố Hồ Chí Minh</Typography.Text>
                </Space>
            </Space>
            <Tabs
                defaultActiveKey="1"
                items={[
                    {
                        key: "1",
                        label: "Introduction",
                        children:
                            "CLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    },
                    {
                        key: "2",
                        label: "Organization",
                        children: "Content of Tab Pane 3",
                    },
                    {
                        key: "3",
                        label: "Original Ticket",
                        children: <OriginalTicketTab />,
                    },
                    {
                        key: "4",
                        label: "Secondary Ticket",
                        children: <SecondaryTicketTab />,
                    }
                ]}
            />
        </>
    )
}
export default EventInfo

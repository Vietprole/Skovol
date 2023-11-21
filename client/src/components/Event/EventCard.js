import { CalendarFilled, HeartFilled } from "@ant-design/icons"
import { Card, Flex, Space, Typography } from "antd"

const EventCard = ({ title, genre, address, date, img }) => {
    return (
        <Card
            cover={<img alt="example" src={img} />}
            //bodyStyle={{ padding: "10px 0 10px 0" }}
            style={{ boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" }}
        >
            <Flex vertical gap={1}>
                <Typography.Title
                    level={5}
                    style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        fontWeight: "bold",
                        margin: "0",
                    }}
                >
                    {title}
                </Typography.Title>
                <Space align="center">
                    <HeartFilled />
                    <Typography.Text> {genre}</Typography.Text>
                </Space>
                <Space align="center">
                    <CalendarFilled />
                    <Typography.Text>
                        {" "}
                        {date.toISOString().slice(0, 10)}
                    </Typography.Text>
                </Space>
                <Space align="center">
                    <CalendarFilled />
                    <Typography.Text>Thành phố Hồ Chí Minh</Typography.Text>
                </Space>
            </Flex>
        </Card>
    )
}
export default EventCard

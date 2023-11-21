import { Card, Col, InputNumber, List, Row, Table, Typography } from "antd"
import { useState } from "react"

const OriginalTicketTab = ({}) => {
    const availableTickets = [
        {
            type: "Early Bird",
            available: 100,
            price: 100000,
        },
        {
            type: "General",
            available: 100,
            price: 300000,
        },
        {
            type: "VIP",
            available: 10,
            price: 500000,
        },
    ]
    const [tickets, setTickets] = useState([])

    const handleOnChange = (index, record, value) => {
        console.log(index)
        const newTickets = [...tickets]
        const _index = newTickets.findIndex((item) => record.type === item.type)
        let item = newTickets[_index]
        if (item === undefined) {
            item = {
                type: record.type,
                price: record.price,
                quantity: value,
            }
        }

        newTickets.splice(_index, 1, { ...item, quantity: value })
        setTickets(newTickets)
    }

    return (
        <Row gutter={16}>
            <Col span={16}>
                <Table
                    pagination={false}
                    columns={[
                        {
                            title: "Type",
                            dataIndex: "type",
                            key: "type",
                        },
                        {
                            title: "Price",
                            dataIndex: "price",
                            key: "price",
                            render: (value) => value.toLocaleString(),
                        },
                        {
                            title: "Amount",
                            key: "action",
                            render: (index, record) => (
                                <InputNumber
                                    min={0}
                                    max={record.available}
                                    defaultValue={0}
                                    onChange={(value) =>
                                        handleOnChange(index, record, parseInt(value, 10))
                                    }
                                />
                            ),
                        },
                    ]}
                    dataSource={availableTickets}
                />
            </Col>
            <Col span={8}>
                <Card title="Book information" actions={[<span>Buy now</span>]}>
                    <List
                        itemLayout="horizontal"
                        dataSource={tickets}
                        footer={
                            <Typography.Title
                                level={5}
                                style={{ margin: 0, textAlign: "right" }}
                            >
                                Total:{" "}
                                {tickets
                                    .reduce(
                                        (total, item) =>
                                            total + item.price * item.quantity,
                                        0,
                                    )
                                    .toLocaleString()}
                            </Typography.Title>
                        }
                        renderItem={(item, index) => (
                            <List.Item key={index}>
                                <List.Item.Meta
                                    title={item.type}
                                    description={item.price.toLocaleString()}
                                ></List.Item.Meta>
                                <Row>
                                    <Col span="24" align="end">
                                        <Typography.Text>
                                            x{item.quantity}
                                        </Typography.Text>
                                    </Col>
                                    <Col span="24" align="end">
                                        <Typography.Text>
                                            {(
                                                item.price * item.quantity
                                            ).toLocaleString()}
                                        </Typography.Text>
                                    </Col>
                                </Row>
                            </List.Item>
                        )}
                    />
                </Card>
            </Col>
        </Row>
    )
}

export default OriginalTicketTab

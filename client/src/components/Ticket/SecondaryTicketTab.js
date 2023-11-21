import { Button, InputNumber, Table } from "antd"
import { useState } from "react"
import secondaryTickets from "../../mockdata/secondary_tickets"

const SecondaryTicketTab = () => {
    const [tickets, setTickets] = useState(secondaryTickets)

    const handleOnChange = (record, value) => {
        const newTickets = [...tickets]
        const index = newTickets.findIndex((item) => record.type === item.type)
        let item = newTickets[index]
        if (item === undefined) {
            item = {
                type: record.type,
                price: record.price,
                quantity: value,
            }
        }

        newTickets.splice(index, 1, { ...item, quantity: value })
        console.log(item, newTickets, value)
        setTickets(newTickets)
    }

    return (
                <Table
                    pagination={false}
                    columns={[
                        {
                            title: "Owner",
                            dataIndex: "owner",
                            key: "owner",
                        },
                        {
                            title: "Type",
                            dataIndex: "type",
                            key: "type",
                        },
                        {
                            title: "Available",
                            dataIndex: "available",
                            key: "available",
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
                            render: (_, record) => (
                                <InputNumber
                                    min={0}
                                    max={record.available}
                                    defaultValue={0}
                                    onChange={(value) =>
                                        handleOnChange(record, parseInt(value, 10))
                                    }
                                />
                            ),
                        },
                        {
                            title: "Amount",
                            key: "action",
                            render: (_, record) => (
                                <Button>Buy</Button>
                            ),
                        },

                    ]}
                    dataSource={tickets}
                />
    )
}

export default SecondaryTicketTab

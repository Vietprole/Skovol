import { List } from "antd"
import { Link } from "react-router-dom"
import BaseContent from "../../layouts/BaseContent"
import events from "../../mockdata/events.js"
import EventCard from "./EventCard"

const EventList = () => {
    return (
        <BaseContent>
            <List
                grid={{
                    gutter: [32, 32],
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                    xxl: 5,
                }}
                dataSource={events}
                renderItem={(item) => (
                    <List.Item>
                        <Link to={`event/${item.id}`}>
                            <EventCard {...item} />
                        </Link>
                    </List.Item>
                )}
            />
        </BaseContent>
    )
}
export default EventList

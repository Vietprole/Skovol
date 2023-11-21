import { faker } from "@faker-js/faker/locale/vi"
import { Carousel } from "antd"
import React from "react"
import EventInfo from "../components/Event/EventInfo"
import BaseContent from "../layouts/BaseContent"

const EventPage = () => {
    return (
        <div>
            <Carousel style={{ marginBottom: "50px" }}>
                <img src={faker.image.urlPicsumPhotos({height: 250})} alt="banner" />
                <img src={faker.image.urlPicsumPhotos({height: 250})} alt="banner" />
                <img src={faker.image.urlPicsumPhotos({height: 250})} alt="banner" />
            </Carousel>
            <BaseContent>
                <EventInfo />
            </BaseContent>
        </div>
    )
}

export default EventPage

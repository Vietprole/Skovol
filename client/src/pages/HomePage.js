import { faker } from "@faker-js/faker/locale/vi"
import { Carousel } from "antd"
import React from "react"
import EventList from "../components/Event/EventList"

const contentStyle = {
    margin: 0,
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
}

const HomePage = () => {
    return (
        <div>
            <Carousel style={{ marginBottom: "50px" }}>
                <img src={faker.image.urlPicsumPhotos({height: 250})} alt="banner" />
                <img src={faker.image.urlPicsumPhotos({height: 250})} alt="banner" />
                <img src={faker.image.urlPicsumPhotos({height: 250})} alt="banner" />
            </Carousel>
            <EventList />
        </div>
    )
}

export default HomePage

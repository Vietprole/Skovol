import { faker } from "@faker-js/faker/locale/vi"

const data = []

for (let i = 1; i <= 30; i++) {
    const event = {
        id: faker.string.uuid(),
        title: faker.music.songName(),
        genre: faker.music.genre(),
        address: faker.location.streetAddress(true),
        date: faker.date.future(),
        img: faker.image.fashion(640, 480, true),
    }
    data.push(event)
}

export default data

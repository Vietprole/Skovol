import { faker } from "@faker-js/faker/locale/vi"

const data = []

for (let i = 1; i <= 30; i++) {
    data.push({
        owner: faker.finance.ethereumAddress(),
        type: faker.helpers.arrayElement(['Early Bird', 'General', 'VIP']),
        available: faker.number.int(1000),
        price: faker.number.int({ min: 100000, max: 200000 }),
    })
}

export default data

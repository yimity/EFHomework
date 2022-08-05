import { factory, nullable, primaryKey } from '@mswjs/data';
import { Chance } from 'chance';

const chance = new Chance();

const db = factory({
  userRole: {
    name: primaryKey(String),
  },
  user: {
    id: primaryKey(String),
    name: String,
    email: String,
    phone: nullable(String),
    position: Array,
    country: String,
    status: Number,
    portFolio: Number,
    role: Number,
  },
});

const userList: any[] = [];

function generatorRandomUsers(count: number) {
  for (let i = 0; i < count; i++) {
    userList.push(
      db.user.create({
        id: chance.guid(),
        name: chance.name(),
        email: chance.email(),
        phone: chance.phone(),
        position: [chance.profession({ rank: true }), chance.company()],
        country: chance.country({ full: true }),
        status: chance.integer({ min: 0, max: 2 }),
        portFolio: chance.integer({ min: 30, max: 90 }),
        role: chance.integer({ min: 0, max: 2 }),
      })
    );
  }
}

generatorRandomUsers(21);
export default userList;

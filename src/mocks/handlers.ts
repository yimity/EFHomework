import { factory, nullable, primaryKey } from '@mswjs/data';
import { Chance } from 'chance';
import { rest } from 'msw';

const chance = new Chance();

const db = factory({
  userRole: {
    name: primaryKey(String),
  },
  user: {
    id: primaryKey(String),
    name: String,
    gender: Number,
    birthday: String,
    age: Number,
    email: String,
    phone: nullable(String),
    _index: Number,
  },
});

const users: any[] = [];

function generatorRandomUsers(count: number) {
  for (let i = 0; i < count; i++) {
    users.push(
      db.user.create({
        id: chance.guid(),
        name: chance.name(),
        gender: chance.gender() === 'Female' ? 1 : 0,
        birthday: chance.birthday().toUTCString(),
        age: chance.age(),
        email: chance.email(),
        phone: chance.phone(),
        _index: i,
      })
    );
  }
}

generatorRandomUsers(599);

export const handlers = [
  rest.get(`/users`, (req, res, ctx) => {
    const pageIndex: number = Number(req.url.searchParams.get('pageIndex')) || 1;
    const pageSize: number = Number(req.url.searchParams.get('pageSize')) || 50;
    const searchText: string = req.url.searchParams.get('searchText') || '';

    let data;

    let total = 0;

    if (searchText) {
      data = db.user.findMany({
        take: pageSize,
        skip: (pageIndex - 1) * pageSize,
        where: {
          name: {
            contains: searchText,
          },
        },
      });
      total = db.user.count({
        where: {
          name: {
            contains: searchText,
          },
        },
      })
    } else {
      data = db.user.findMany({
        take: pageSize,
        skip: (pageIndex - 1) * pageSize,
      });
      total = db.user.count()
    }

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          data,
          total
        },
        success: true,
        errorCode: null,
        errorInfo: null,
      })
    );
  }),
  rest.get(`/users/:id`, (req, res, ctx) => {
    const id = req.params.id as string;
    try {
      const user = db.user.findFirst({
        where: {
          id: {
            equals: id,
          },
        },
      });

      if (user) {
        return res(
          ctx.status(200),
          ctx.json({
            data: user,
            success: true,
            errorCode: null,
            errorInfo: null,
          })
        );
      } else {
        return res(
          ctx.status(404),
          ctx.json({
            data: null,
            success: true,
            errorCode: null,
            errorInfo: null,
          })
        );
      }
    } catch (e) {
      return res(
        ctx.status(500),
        ctx.json({
          success: false,
          errorCode: null,
          errorInfo: e,
        })
      );
    }
  }),
  rest.post(`/users`, (req, res, ctx) => {
    const payload = JSON.parse(req.body as string);
    try {
      users.push(
        db.user.create({
          ...payload,
          id: chance.guid(),
        })
      );
      return res(
        ctx.status(201),
        ctx.json({
          success: true,
          errorCode: null,
          errorInfo: null,
        })
      );
    } catch (e) {
      return res(
        ctx.status(500),
        ctx.json({
          success: false,
          errorCode: null,
          errorInfo: e,
        })
      );
    }
  }),
  rest.delete(`/users/:id`, (req, res, ctx) => {
    const id = req.params.id as string;
    try {
      const deleteUser = db.user.delete({
        where: {
          id: {
            equals: id,
          },
        },
      });
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          data: deleteUser,
          errorCode: null,
          errorInfo: null,
        })
      );
    } catch (e) {
      return res(
        ctx.status(500),
        ctx.json({
          success: false,
          errorCode: null,
          errorInfo: e,
        })
      );
    }
  }),
  rest.put(`/users/:id`, (req, res, ctx) => {
    try {
      const id = req.params.id as string;
      const data = JSON.parse(req.body as string);
      delete data['id'];
      const updateUser = db.user.update({
        where: {
          id: {
            equals: id,
          },
        },
        data: {
          ...data,
        },
      });
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          errorCode: null,
          errorInfo: null,
          data: updateUser,
        })
      );
    } catch (e) {
      return res(
        ctx.status(500),
        ctx.json({
          success: false,
          errorCode: null,
          errorInfo: e,
        })
      );
    }
  }),
];

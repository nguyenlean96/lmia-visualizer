import bcrypt from 'bcryptjs';
import { Op } from 'sequelize';
import { GraphQLError } from 'graphql';

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    numberSix: () => 6,
    numberSeven: () => 7,
    async postalCodes(_, __, { models }) {
      return await models.PostalCode.findAll();
    },
    async postalCode(_, { postalCode }, { models }) {
      if (String(postalCode).includes(' ')) {
        postalCode = String(postalCode).replace(/\s/g, '%');
      } else {
        if (String(postalCode).length < 4) {
          postalCode = `%${String(postalCode)}%`;
        } else if (
          String(postalCode).length > 3 &&
          String(postalCode).length < 7
        ) {
          const firstPart = String(postalCode).slice(0, 3);
          const secondPart = String(postalCode).slice(3);
          postalCode = `%${firstPart}%${secondPart}%`;
        } else {
          // Split the postal code into two parts
          const firstPart = String(postalCode).slice(0, 3);
          const secondPart = String(postalCode).slice(3);
          postalCode = `${firstPart} ${secondPart}`;
        }
      }
      return await models.PostalCode.findAll({
        where: {
          postal_code: {
            [Op.like]: `%${postalCode}%`,
          },
        },
      });
    }
  },

  Mutation: {
    async register(_, { username, password }, { models }) {
      const user = await models.User.create({
        username,
        password: bcrypt.hashSync(password, 10),
      });
      return user;
    },
    async login(_, { username, password }, { models }) {
      const user = await models.User.findOne({
        where: {
          username,
        },
      });
      if (!user) {
        throw new Error('User not found');
      }
      if (!bcrypt.compareSync(password, user.password)) {
        throw new Error('Incorrect password');
      }
      return user;
    }
  }
};

export default resolvers;
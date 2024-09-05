import { Model, DataTypes } from 'sequelize';
import { sqliteConnection } from '../src/db/config';
import bcrypt from 'bcryptjs';

class User extends Model {
  public name!: string;
  public email!: string;
  public password!: string;
}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
}, {
  sequelize: sqliteConnection,
  modelName: 'User',
  tableName: 'users'
});

export default User;
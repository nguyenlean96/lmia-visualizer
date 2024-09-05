import { Model, DataTypes } from 'sequelize';
import { sqliteConnection } from '../src/db/config';

class PostalCode extends Model {
	public postal_code!: string;
	public city!: string;
	public province_abbr!: string;
	public time_zone!: number;
	public latitude!: number;
	public longitude!: number;
}

PostalCode.init(
	{
		postal_code: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		province_abbr: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		time_zone: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		sequelize: sqliteConnection,
		modelName: 'PostalCode',
		tableName: 'PostalCodes',
		timestamps: false,
	}
);

export default PostalCode;
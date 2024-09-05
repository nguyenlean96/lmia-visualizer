import { sqliteConnection } from '../src/db/config';
import { Model, DataTypes } from 'sequelize';

class LmiaRequest extends Model {
	public province_territory!: string;
	public program_stream!: string;
	public employer_name!: string;
	public employer_address!: string;
	public occupation!: string;
	public incorporate_status!: string;
	public number_of_requested_lmia!: number;
	public number_of_requested_positions!: number;
	public year!: number;
	public quarter!: number;
}

LmiaRequest.init(
	{
		province_territory: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		program_stream: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		employer_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		employer_address: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		occupation: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		incorporate_status: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		number_of_requested_lmia: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		number_of_requested_positions: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		year: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		quarter: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	},
	{
		sequelize: sqliteConnection,
		modelName: 'LmiaRequest',
		tableName: 'LmiaRequests',
		timestamps: false,
	}
);

export default LmiaRequest;
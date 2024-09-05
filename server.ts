import multer from 'multer';
import { ApolloServer } from 'apollo-server';
import typeDefs from './src/schema';
import resolvers from './src/resolvers';
import * as models from './models';

import XLSX from 'xlsx';
import LmiaRequest from './models/LmiaRequest';

const diskStorage = multer.memoryStorage();
const upload = multer({ storage: diskStorage });

// app.post('/api/v1/import-data', upload.single('file'), async (req, res) => {
// 	await LmiaRequest.sync();
// 	// Check if file is uploaded
// 	// if (!req.file) {
// 	// 	return res.status(400).json({ message: 'No file uploaded' });
// 	// }
// 	// // Get the uploaded file data
// 	// const data = req.file;
// 	const data: any = null;
// 	if (data) {
// 		// Read the file using xlsx
// 		const wb = XLSX.read(data.buffer, { type: 'buffer' });
// 		const sheetName = wb.SheetNames[0];
// 		const sheet = wb.Sheets[sheetName];
// 		const jsonData: Array<{
// 			'Province/Territory': string;
// 			'Program Stream': string;
// 			Employer: string;
// 			Address: string;
// 			Occupation: string;
// 			'Incorporate Status': string;
// 			'Requested LMIAs'?: string;
// 			'Requested Positions': string;
// 		}> = XLSX.utils.sheet_to_json(sheet);

// 		for (const record of jsonData) {
// 			const province_territory = String(record['Province/Territory']).trim(),
// 				program_stream = String(record['Program Stream']).trim(),
// 				employer_name = String(record['Employer']).trim(),
// 				employer_address = String(record['Address']).trim(),
// 				occupation = String(record['Occupation']).trim(),
// 				incorporate_status = String(record['Incorporate Status']).trim(),
// 				number_of_requested_lmia = String(
// 					record['Requested LMIAs'] ?? record['Requested Positions']
// 				).trim(),
// 				number_of_requested_positions = String(record['Requested Positions']).trim();

// 			if (!employer_address || !employer_name) {
// 				console.log('Missing employer name or address', record);
// 				throw new Error('Missing employer name or address');
// 			}
// 			await LmiaRequest.create({
// 				province_territory,
// 				program_stream,
// 				employer_name,
// 				employer_address,
// 				occupation,
// 				incorporate_status,
// 				number_of_requested_lmia,
// 				number_of_requested_positions,
// 				year: req.body.year,
// 				quarter: req.body.quarter,
// 			});
// 		}
// 	}
// 	res.json({ message: 'Data imported successfully' });
// });

interface AuthScope {
	authScope?: String;
}

const server = new ApolloServer({ 
	typeDefs, 
	resolvers,
	context: { models },
});

server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
require('dotenv').config();
const fs = require('fs');
const csv = require('csv-parser');
const { DataTypes } = require('sequelize');
const { sqliteConnection } = require('./db/config');
const PostalCode = require('./models/PostalCode')(sqliteConnection, DataTypes);

// Define the batch size
const batchSize = 200; // Adjust this based on your system's capacity
let batch = [];

// Synchronize the model with the database
sqliteConnection.sync().then(() => {
    const stream = fs.createReadStream('ZipCodeFiles/CanadianPostalCodes202403.csv')
        .pipe(csv())
        .on('data', async (row) => {
            // Add row data to batch
            batch.push({
                postal_code: row.POSTAL_CODE,
                city: row.CITY,
                province_abbr: row.PROVINCE_ABBR,
                time_zone: parseInt(row.TIME_ZONE, 10),
                latitude: parseFloat(row.LATITUDE),
                longitude: parseFloat(row.LONGITUDE),
            });

            // If the batch size reaches the defined limit, insert the batch into the database
            if (batch.length >= batchSize) {
                // Pause the stream to prevent more data from being read into memory
                stream.pause();

                try {
                    await PostalCode.bulkCreate(batch);
                    console.log(`Inserted batch of ${batch.length} records`);
                    batch = []; // Clear the batch
                } catch (error) {
                    console.error('Error inserting batch data:', error);
                    throw error;
                } finally {
                    // Resume the stream after processing the current batch
                    stream.resume();
                }
            }
        })
        .on('end', async () => {
            // Insert any remaining records in the last batch
            if (batch.length > 0) {
                try {
                    await PostalCode.bulkCreate(batch);
                    console.log(`Inserted final batch of ${batch.length} records`);
                } catch (error) {
                    console.error('Error inserting final batch data:', error);
                    throw error;
                }
            }

            console.log('CSV file successfully processed');
            sqliteConnection.close();
        })
        .on('error', (error) => {
            console.error('Error reading the CSV file:', error);
            throw error;
        });
});

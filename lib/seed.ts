import { Pool } from 'pg';
import fs from 'fs';
import csv from 'csv-parser';
import path from 'path';
import "dotenv/config";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

function parseDate(dateString: string): string {
  const parts = dateString.split('/');
  if (parts.length === 3) {
    const month = parts[0].padStart(2, '0');
    const day = parts[1].padStart(2, '0');
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  console.warn(`Could not parse date: ${dateString}`);
  throw Error();
}

export async function seed() {
  const createTable = await pool.query(`
    CREATE TABLE IF NOT EXISTS unicorns (
      id SERIAL PRIMARY KEY,
      company VARCHAR(255) NOT NULL UNIQUE,
      valuation DECIMAL(10, 2) NOT NULL,
      date_joined DATE,
      country VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      industry VARCHAR(255) NOT NULL,
      select_investors TEXT NOT NULL
    );
  `);

  console.log(`Created "unicorns" table`);

  const results: any[] = [];
  const csvFilePath = path.join(process.cwd(), 'unicorns.csv');

  await new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', resolve)
      .on('error', reject);
  });

  for (const row of results) {
    try {
      const formattedDate = parseDate(row['Date Joined']);
      const valuation = parseFloat((row['Last Valuation (Billion $)'] || row['Valuation ($B)'] || '0').replace('$', '').replace(',', ''));

      await pool.query(
        `INSERT INTO unicorns (company, valuation, date_joined, country, city, industry, select_investors)
         VALUES ($1, $2, $3, $4, $5, $6, $7)
         ON CONFLICT (company) DO NOTHING;`,
        [
          row.Company,
          valuation,
          formattedDate,
          row.Country,
          row.City,
          row.Industry,
          row['Investors'] || row['Select Investors'] || ''
        ]
      );
    } catch (error) {
      console.error(`Error processing row for ${row.Company}:`, error);
    }
  }

  console.log(`Seeded ${results.length} unicorns`);

  return {
    createTable,
    unicorns: results,
  };
}


seed().catch(console.error);
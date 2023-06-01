#!/usr/bin/env node

const { google } = require('googleapis');

const authorize = require('./lib/auth');

async function main() {
  try {
    const auth = await authorize();
    const sheets = google.sheets({ version: 'v4', auth });

    const range = 'Sheet1!A1:B2'; // Specify the range to update
    const values = [['New Value A1', 'New Value B1'], ['New Value A2', 'New Value B2']]; // Specify the new values

    const resource = {
      values,
    };

    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range,
      valueInputOption: 'RAW',
      resource,
    });

    console.log(`${response.data.updatedCells} cells updated.`);
  } catch (error) {
    console.error('The API returned an error:', error.message);
  }
}

main();

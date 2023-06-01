#!/usr/bin/env node

const { google } = require('googleapis');

const authorize = require('./lib/auth');
const { append } = require('./lib/sheets');

async function main() {
  try {
    const auth = await authorize();
    const sheets = google.sheets({ version: 'v4', auth });
    const unixTimestamp = Math.floor(Date.now() / 1000);
    const response = await append(sheets, unixTimestamp, 1, 1);

    console.log(`${response.data.updates.updatedCells} cells updated.`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main();

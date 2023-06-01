#!/usr/bin/env node

const { google } = require('googleapis');

const authorize = require('./lib/auth');
const { append } = require('./lib/sheets');

async function appendValues(sheets, ...values) {
  const unixTimestamp = Math.floor(Date.now() / 1000);
  const response = await append(sheets, unixTimestamp, ...values);
  console.log(`${response.data.updates.updatedCells} cells updated.`);
}

async function main() {
  try {
    const auth = await authorize();
    const sheets = google.sheets({ version: 'v4', auth });
    let counters = [5000, 5000];
    const interval = setInterval(async () => {
      await appendValues(sheets, ...counters);
      counters = counters.map((value, index) => {
        return index % 2 === 0 ? value - 200 : value - 10;
      });
    }, 2000);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main();

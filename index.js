#!/usr/bin/env node

const { google } = require('googleapis');

const authorize = require('./lib/auth');
const { append } = require('./lib/sheets');
const { gitHubRateLimitRemainingProducer } = require('./lib/producers');

async function appendValues(sheets, range, ...values) {
  const unixTimestamp = Math.floor(Date.now() / 1000);
  const response = await append(sheets, range, unixTimestamp, ...values);
  console.log(`${response.data.updates.updatedCells} cells updated.`);
}

async function main(...args) {
  console.log(`Starting with ${args.join(', ')}.`)
  try {
    const auth = await authorize();
    const sheets = google.sheets({ version: 'v4', auth });
    const producers = args.map(envVar => {
      return gitHubRateLimitRemainingProducer(process.env[envVar]);
    });
    const interval = setInterval(async () => {
      let counters = await Promise.all((producers.map((producer) => {
        return producer();
      })));
      return appendValues(sheets, 'Bench', ...counters);
    }, 2000);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

main(...process.argv.slice(2));

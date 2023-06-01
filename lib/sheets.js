async function append(sheets, ...row) {
    // Append a new row
    const range = 'Scratchpad';
    const values = [
      row
    ];

    const resource = {
      values,
    };

    return sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range,
      valueInputOption: 'RAW',
      resource,
    });
}

module.exports = { append };

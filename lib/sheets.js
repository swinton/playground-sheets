async function append(sheets, range, ...row) {
    // Append a new row
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

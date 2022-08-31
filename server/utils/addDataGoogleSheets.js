
const { google } = require("googleapis");

async function addDataGoogleSheets(data){

  const spreadsheetId = process.env.spreadsheetId;
  const auth = new google.auth.GoogleAuth({
    keyFile: "./credgoogle.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:AT",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [data],
    },
  });
}

module.exports= addDataGoogleSheets;

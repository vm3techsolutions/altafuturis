require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Google Sheets setup
const sheets = google.sheets('v4');
const credentials = require('./gsheet-for-alta.json');
const SPREADSHEET_ID = process.env.SPREADSHEET_ID; // Replace with actual Google Sheets ID

// CORS Configuration
// const corsOptions = {
//   origin: [`${process.env.FRONTEND_URL}`],
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// };


// CORS Configuration for www.
const allowedOrigins = process.env.FRONTEND_URL.split(',');

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


// Middleware
// app.use(cors(corsOptions));
app.use(bodyParser.json());

// Authenticate Google API
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const getAuthClient = async () => {
  const client = await auth.getClient();
  return client;
};

// Function to format the date in DD/MM/YYYY hh:mm:ss AM/PM
function formatDateToAMPM(date) {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date).replace(',', '');
}

// Handle contact form submission
app.post('/submit', async (req, res) => {
  const { fullname, phone, email, companyName, companyRevenue, role, relationship, services, message, about } = req.body;
  const formattedDate = formatDateToAMPM(new Date());

  if (!fullname || !email || !phone || !companyName) {
    return res.status(400).send('Required fields are missing');
  }

  try {
    const authClient = await getAuthClient();

    await sheets.spreadsheets.values.append({
      auth: authClient,
      spreadsheetId: SPREADSHEET_ID,
      range: 'ContactEnquiry!A:J', // Sheet name and column range
      valueInputOption: 'RAW',
      resource: {
        values: [
          [fullname, phone, email, companyName, companyRevenue, role, relationship, services, message, about, formattedDate],
        ],
      },
    });

    res.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error('Error adding data to Google Sheets:', error);
    res.status(500).send('Error adding data to Google Sheets');
  }
});

// Handle Quote Section form submission


app.post('/submit-quote', async (req, res) => {
  const { fullname, phone, email, requirement } = req.body;
  const formattedDate = formatDateToAMPM(new Date());

  if (!fullname || !phone || !email || !requirement) {
    return res.status(400).send('Required fields are missing');
  }

  try {
    const authClient = await getAuthClient();

    await sheets.spreadsheets.values.append({
      auth: authClient,
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `${process.env.SHEET_NAME}!A:E`, // 👉 Sheet1 from env
      valueInputOption: 'RAW',
      resource: {
        values: [
          [fullname, phone, email, requirement, formattedDate],
        ],
      },
    });

    res.json({ message: "Quote request submitted successfully" });
  } catch (error) {
    console.error('Error adding data to Google Sheets:', error);
    res.status(500).send('Error adding data to Google Sheets');
  }
});



// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});

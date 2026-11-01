const express = require('express');
const { GoogleGenAI } = require('@google/genai');
const { createPatientRouter } = require('../private-patient/runtime.cjs');
const app = express();
app.use(express.json({ limit: '64kb' }));
let client;
app.use('/api/patient', createPatientRouter({ getClient: () => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY || process.env.GEMINI_KEY;
  if (!apiKey) throw new Error('Missing provider key');
  return client ||= new GoogleGenAI({ apiKey });
} }));
app.use((_req, res) => res.sendStatus(404));
module.exports = app;

#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const schemaPath = path.join(__dirname, 'schema.json');
if (!fs.existsSync(schemaPath)) {
  console.error('schema.json not found');
  process.exit(1);
}

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validate = ajv.compile(schema);

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: ecom-feed-validate <file.json>');
  process.exit(1);
}

const fullPath = path.resolve(filePath);
if (!fs.existsSync(fullPath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

let data;
try {
  data = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
} catch (e) {
  console.error(`Invalid JSON: ${e.message}`);
  process.exit(1);
}

const valid = validate(data);
if (valid) {
  console.log(`Valid: ${filePath}`);
} else {
  console.error(`Invalid: ${filePath}`);
  console.error(JSON.stringify(validate.errors, null, 2));
  process.exit(1);
}

const axios = require("axios");
const fs = require("fs");

const separator = " || ";
const authError = "Only Ansoni can call the DEEPL API.";
const pathError = "Path for this language not configured yet.";
const deeplURL = "https://api-free.deepl.com/v2/translate";
const headers = {
  "Cache-Control": "no-cache",
  "Access-Control-Allow-Origin": "*",
};

async function translateJSON(lang) {
  const route = `i18n/${lang}/code.json`;
  if (!fs.existsSync(route)) throw new Error(pathError);
  const texts = JSON.parse(fs.readFileSync("./deepl/base_code.json"));
  const translated = await translateText(texts, lang.toUpperCase());
  const keys = Object.keys(texts);
  for (let i = 0; i < keys.length; i++) {
    texts[keys[i]].message = translated[i];
  }
  writeResultFile(texts, route);
}

function getSingleText(texts) {
  const defaultTexts = Object.values(texts).map((entry) => entry.message);
  return defaultTexts.join(separator);
}

function writeResultFile(content, route) {
  const jsonContent = JSON.stringify(content);
  fs.writeFile(route, jsonContent, "utf8", (err) => {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    console.log("Translations has been saved.");
  });
}

async function translateText(texts, target) {
  if (!fs.existsSync("deepl.json")) throw new Error(authError);
  const key = JSON.parse(fs.readFileSync("deepl.json")).key;

  const values = Object.values(texts);
  const allTexts = values.map((text) => `&text=${text.message}`);
  let chunks = [];
  while (allTexts.length > 0) chunks.push(allTexts.splice(0, 50));
  chunks = chunks.map(chunk => chunk.join(""));

  const results = [];

  for(let i = 0; i < chunks.length; i++){
    const url = `${deeplURL}?auth_key=${key}${chunks[i]}&target_lang=${target}`;
    const result = await callDeepl(url);
    const data = result.data;
    results.push(...data.translations.map((trans) => trans.text));
  }

  return results;
}

async function callDeepl(url) {
  try {
    return await axios.get(url, { headers });
  } catch (error) {
    console.log(error);
  }
}

translateJSON("es");

// getTranslation("Hello world!", "DE");

const axios = require("axios");
const fs = require("fs");

const AUTH_ERROR = "Only Ansoni can call the DEEPL API.";
const PATH_ERROR = "The path of the file to translate could not be found.";
const WRITE_ERROR = "An error occured while writing JSON Object to File.";
const WRITE_OK = "All translations have been successfully saved!";
const actions = {
  docs: "DOCS",
  blog: "BLOG"
}

// const languages = ['ja', 'zh'];
// languages.forEach(lang => translateMDX(lang, actions.blog, "../blog/2021-07-17.mdx", "2021-07-17.mdx"));

// translateMDX("zh", actions.blog, "../blog/2021-07-17.mdx", "2021-07-17.mdx");
// translateJSON("da");

async function translateMDX(lang, action, route, destination) {
  if (!fs.existsSync(route)) throw new Error(PATH_ERROR);
  const lines = readMDX(route);
  const filtered = filterTexts(lines);
  const array =  encodeText(filtered);
  const translated = await translateText(array, lang.toUpperCase());
  // const texts = JSON.parse(fs.readFileSync("./deepl/example-response.json"));
  formatTranslatedTexts(lines, filtered, translated);
  writeMDXFile(lang, destination, lines, action);
}

function getLocation(lang, action){
  if(action === actions.docs) return `../i18n/${lang}/docusaurus-plugin-content-docs/current/`;
  if(action === actions.blog) return `../i18n/${lang}/docusaurus-plugin-content-blog/`;
  return null;
}

function writeMDXFile(lang, destination, lines, action){
  const path = getLocation(lang, action)  + destination;
  const file = fs.createWriteStream(path);
  file.on('error', (err) => console.log(WRITE_ERROR, err));
  lines.forEach((v) =>  file.write(v + '\n'));
  file.end();
}

function formatTranslatedTexts(lines, filtered, translated){
  const decoded = decodeText(translated);
  const used = {}
  let j = 0;
  for(let i = 0; i < lines.length; i++){
    if(filtered.has(lines[i])){
      if(!used[lines[i]]) used[lines[i]] = decoded[j++]; 
      lines[i] = used[lines[i]];
    }  
  }
}

function decodeText(translated){
  let result = translated.map(text => text.replace(/^__H1__/, "# "))
  result = result.map(text => text.replace(/^__H2__/, "## "))
  result = result.map(text => text.replace(/^__H3__/, "### "))
  return result;
}

function encodeText(filtered){
  let array = Array.from(filtered);
  array = array.map(text => text.replace(/^# /, "__H1__"))
  array = array.map(text => text.replace(/^## /, "__H2__"))
  array = array.map(text => text.replace(/^### /, "__H3__"))
  return array;
}

function readMDX(route) {
  const rawFile = fs.readFileSync(route).toString();
  return rawFile.split("\n").map((line) => line.replace(/\r/, ""));
}

function filterTexts(texts) {
  const filtered = new Set();
  const filter = /^$|^\s{2,}(?!\/\/)|^---|^</;
  texts.forEach((text) => {
    if (!filter.test(text)) filtered.add(text);
  });
  return filtered;
}

async function translateJSON(lang) {
  const route = `../i18n/${lang}/code.json`;
  if (!fs.existsSync(route)) throw new Error(PATH_ERROR);
  const texts = JSON.parse(fs.readFileSync("../i18n/en/code.json"));
  const textlist = Object.values(texts).map((text) => text.message);
  const translated = await translateText(textlist, lang.toUpperCase());
  createTranslatedJson(texts, translated);
  writeResultFile(texts, route);
}

function createTranslatedJson(texts, translated) {
  const keys = Object.keys(texts);
  for (let i = 0; i < keys.length; i++) {
    texts[keys[i]].message = translated[i];
  }
}

function writeResultFile(content, route) {
  const jsonContent = JSON.stringify(content);
  fs.writeFile(route, jsonContent, "utf8", (err) => {
    if (!err) return console.log(WRITE_OK);
    console.log(WRITE_ERROR);
    return console.log(err);
  });
}

async function translateText(texts, target) {
  const token = getToken();
  const chunks = getChunksToTranslate(texts);
  return await translateChunks(target, token, chunks);
}

async function translateChunks(target, token, chunks) {
  const translated = [];
  const deeplURL = "https://api-free.deepl.com/v2/translate";
  for (let i = 0; i < chunks.length; i++) {
    const url = `${deeplURL}?auth_key=${token}${chunks[i]}&target_lang=${target}`;
    const result = await callDeepl(url);
    translated.push(...result.data.translations.map((trans) => trans.text));
  }
  return translated;
}

function getChunksToTranslate(texts) {
  const allTexts = texts.map((text) => `&text=${text}`);
  let chunks = [];
  while (allTexts.length > 0) chunks.push(allTexts.splice(0, 30));
  return chunks.map((chunk) => chunk.join(""));
}

function getToken() {
  const tokenPath = "deepl.json";
  if (!fs.existsSync(tokenPath)) throw new Error(AUTH_ERROR);
  return JSON.parse(fs.readFileSync(tokenPath)).key;
}

async function callDeepl(url) {
  try {
    return await axios.get(url, { headers: getHeaders() });
  } catch (error) {
    console.log(error);
  }
}

function getHeaders() {
  return {
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": "*",
  };
}
'use strict';

const fs = require('fs');

const languages = ['fr', 'en', 'es'];
const localesPath = './config/locales';

// Self invoked function that store in memory the locales for each language
const languageProperties = (function() {
  const map = {};
  for (const language of languages) {
    const filePath = `${localesPath}/resources-${language}.json`;
    const fileContent = fs.readFileSync(filePath);
    const resources = JSON.parse(fileContent);
    map[language] = resources;
  }
  return map;
}());

// Set cookie language
function setLanguageCookie (res, language) {
  res.cookie('language', language);
}

// Retrieve current request language
function getLanguage (req, res) {
  if (req.cookies && 'language' in req.cookies && req.cookies.language) {
    const l = req.cookies.language.toLowerCase();
    if (languages.indexOf(l) >= 0) {
      return l;
    }
    return null
  }
};

// Template helper generator
function handlerGenerator(language) {
  return function(key) {
    const keyPath = key.split('.');
    let currentPath = languageProperties[language];
    const values = arguments;
    keyPath.forEach((path) => {
      if (!(path in currentPath)) {
        return key;
      }
      currentPath = currentPath[path];
      return null;
    }, this);
    for (let i = 1; i < values.length; i++) {
      if (typeof values[i] === 'string') {
        currentPath = currentPath.replace('%s', values[i]);
      } else if (typeof values[i] === 'number') {
        values[i] = JSON.stringify(values[i]);
        currentPath = currentPath.replace('%d', values[i]);
      }
    }
    return currentPath;
  };
};

// Middleware that handles an express request
function locales(req, res, next) {
  let l = getLanguage(req);
  if (!l) {
    // If no cookie was found, set language to french as default
    l = languages[0];
    setLanguageCookie(res, l);
  }
  res.locals.resources = handlerGenerator(l);
  next();
};

module.exports = locales;

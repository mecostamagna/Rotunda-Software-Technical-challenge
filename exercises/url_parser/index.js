import { getUrlObject } from './parser.js';

const urlFormat = ':version/api/:collection/:id/';
const urlInstance = '6/api/listings/3/bye?sort=desc&limit=10'


const urlObject = getUrlObject(urlFormat, urlInstance);
console.log(urlObject);
const express = require("express");
const markoMiddleware = require("@marko/express").default;
const ssr = require('./ssr').default;

const app = express().use(markoMiddleware()).use(ssr);

module.exports = app;

#!/usr/bin/env node

const commander = require('commander');
const Genrator = require('../lib/Generator');

commander
    .option('-s, --src <dir>', 'src directory', String, 'src')
    .option('-d, --dist <dir>', 'dist directory', String, 'dist')
    .option('-v, --version <version>', 'minecraft version (e.g. 1.13.2)', String, '1.13.2')
    .option('-z, --zip', 'use zip option')
    .parse(process.argv);

const generator = new Genrator(
    commander.src,
    commander.dist,
    commander.version,
);

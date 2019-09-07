#!/usr/bin/env node

// const i = 'hello'
// console.log(i)

const url = 'https://google.com'

const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
require('child_process').exec(start + ' ' + url);



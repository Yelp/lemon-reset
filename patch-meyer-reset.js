#!/usr/bin/env node
const fs = require('fs');

let contents = fs.readFileSync(require.resolve('reset-css'), { encoding: 'utf8' });

// replace with our classname
contents = contents.replace(/([a-z0-9:]+(,| {))/g, '.lemon--$1');

fs.writeFileSync('src/components/LemonReset/LemonReset.css', contents);

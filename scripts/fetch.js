// MIT © 2018 azu
"use strict";
const fs = require("fs");
const path = require("path");
const { fetchMountains } = require("../lib/japanese-yama-list.js");
(async function main() {
    const mountains = await fetchMountains();
    const dataDir = path.join(__dirname, "../data/");
    const outputPath = path.join(dataDir, "yama-list.json");
    fs.writeFileSync(outputPath, JSON.stringify(mountains, null, 4), "utf-8");
})();

// MIT © 2018 azu
const vm = require("vm");
const fetch = require("node-fetch");
const TextDecoder = require("text-encoding").TextDecoder;
// http://www.gsi.go.jp/KOKUJYOHO/MOUNTAIN/mountain.html
module.exports.fetchMountains = async function fetchMountains() {
    const code = await fetch("http://www.gsi.go.jp/KOKUJYOHO/MOUNTAIN/data.js")
        .then(res => {
            return res.buffer().then(buffer =>
                new TextDecoder("shift_jis").decode(buffer)
            );
        });
    const mountain = [];
    const context = vm.createContext({
        mountain: mountain
    });
    vm.runInContext(code, context);
    // mountain[No]="ID,B,L,H,山名,やまめい,山頂名,さんちょうめい,点名等,備考,所在,県名１,県名２,県名３"
    const removeJunk = (text) => {
        return text.replace(/<img.*?>/, "").trim();
    }
    return mountain.map(rowText => {
        const item = rowText.split(",");
        return {
            no: item[0],
            latitude: item[1], // = B = Breite
            longitude: item[2], // = L = Lange
            height: item[3],
            name: removeJunk(item[4]),
            nameFurigana: removeJunk(item[5]),
            crestName: removeJunk(item[6]),
            crestNameFurigana: removeJunk(item[7]),
            otherName: removeJunk(item[8]),
            details: removeJunk(item[9]),
            address: removeJunk(item[10]),
            prefectures: [removeJunk(item[11]), removeJunk(item[12]), removeJunk(item[13])].filter(prefecture => prefecture !== "")
        };
    });
};

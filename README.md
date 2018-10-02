# japanese-yama-list

日本の主な山岳標高一覧を返すライブラリ。

[国土地理院](http://www.gsi.go.jp/)の[日本の主な山岳標高](http://www.gsi.go.jp/KOKUJYOHO/MOUNTAIN/mountain.html)を元にしています。

## Install

Install with [npm](https://www.npmjs.com/):

    npm install japanese-yama-list

## Usage

```js
const yamaList = require("japanese-yama-list");
console.log(yamaList);
/*
[ { no: '0000',
    latitude: '441409',
    longitude: '1451626',
    height: '1254',
    name: '知床岳',
    nameFurigana: 'しれとこだけ',
    crestName: '',
    crestNameFurigana: '',
    otherName: '知床岬',
    details: '',
    address: '知床・阿寒',
    prefectures: [ '北海道' ] },
  { no: '0001',
    latitude: '440800',
    longitude: '1450941',
    height: '1562',
    name: '硫黄山',
    nameFurigana: 'いおうざん',
    crestName: '',
    crestNameFurigana: '',
    otherName: '硫黄山',
    details: '',
    address: '知床・阿寒',
    prefectures: [ '北海道' ] }
]
*/
```

## Changelog

See [Releases page](https://github.com/azu/japanese-yama-list/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/japanese-yama-list/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu

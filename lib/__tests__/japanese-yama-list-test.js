"use strict";
const { fetchMountains } = require("../japanese-yama-list.js");
describe("fetchMountains", () => {
    it("should be match snapshot", async () => {
        const mountains = await fetchMountains();
        expect(mountains).toMatchSnapshot();
    });
});

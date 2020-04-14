const Pack = require('./Pack');

module.exports = class DataPack {
    constructor() {
        this.packs = [];
    }

    /**
     * @param {Pack} pack instance of Pack
     */
    append(pack) {
        if (this.packs.find(p => p.name === pack.name)) throw new Error('Duplicate name');
        this.packs.push(pack);
    }
};

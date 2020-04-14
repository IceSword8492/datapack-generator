const Data = require('./Data');

module.exports = class Data4 extends Data {
    /**
     * @param {string} name 名前空間名
     */
    constructor(name) {
        super();
        if (
            !name
            || typeof name !== 'string'
            || name.trim().length === 0
        ) {
            throw new Error('Invalid param');
        }
        this.name = name;
        this.advancements = [];
        this.functions = [];
        this.loot_tables = [];
        this.recipes = [];
        this.structures = [];
        this.tags = {
            blocks: [],
            entityTypes: [],
            items: [],
            fluids: [],
            functions: [],
        };
    }
};

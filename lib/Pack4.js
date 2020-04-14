const Data = require('./Data');
const Pack = require('./Pack');

module.exports = class Pack4 extends Pack {
    /**
     * @param {string} name パック名
     * @param {string} description パックの説明(生JSONテキスト)
     */
    constructor(name = '', description = '') {
        this.name = name;
        this.description = description;
        this.namespaces = {};
    }

    /**
     * @param {string} namespace 名前空間名
     */
    append(namespace) {
        if (
            !namespace
            || typeof namespace !== 'string'
            || namespace.trim().length === 0
        ) {
            throw new Error('Invalid param');
        }
        if (this.namespaces[namespace]) {
            throw new Error(`namespace ${namespace} is currently exists.`);
        }
        this.namespaces[namespace] = new Data();
    }
};

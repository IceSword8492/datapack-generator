const Pack = require('./Pack');

module.exports = class Generator {
    /**
     * パックのバージョン(1: 1.6-1.8, 2: 1.9-1.10, 3:1.11-1.12, 4: 1.13-1.14, 5: 1.15)
     */
    FORMATS = {
        '1.6': 1,
        '1.6.1': 1,
        '1.6.2': 1,
        '1.6.4': 1,
        '1.7': 1,
        '1.7.2': 1,
        '1.7.4': 1,
        '1.7.5': 1,
        '1.7.6': 1,
        '1.7.7': 1,
        '1.7.8': 1,
        '1.7.9': 1,
        '1.7.10': 1,
        '1.8': 1,
        '1.8.1': 1,
        '1.8.2': 1,
        '1.8.3': 1,
        '1.8.4': 1,
        '1.8.5': 1,
        '1.8.6': 1,
        '1.8.7': 1,
        '1.8.8': 1,
        '1.8.9': 1,
        '1.9': 2,
        '1.9.1': 2,
        '1.9.2': 2,
        '1.9.3': 2,
        '1.9.4': 2,
        '1.10': 2,
        '1.10.1': 2,
        '1.10.2': 2,
        '1.11': 3,
        '1.11.1': 3,
        '1.11.2': 3,
        '1.12': 3,
        '1.12.1': 3,
        '1.12.2': 3,
        '1.13': 4,
        '1.13.1': 4,
        '1.13.2': 4,
        '1.14': 4,
        '1.14.1': 4,
        '1.14.2': 4,
        '1.14.3': 4,
        '1.14.4': 4,
        '1.15': 5,
        '1.15.1': 5,
        '1.15.2': 5,
    };
    /**
     * @param {string} src srcディレクトリのパス
     * @param {string} dist distディレクトリのパス
     * @param {string} version Minecraftのバージョン
     */
    constructor(src, dist, version) {
        this.src = src;
        this.dist = dist;
        this.version = version;
        this.packFormat = this.FORMATS[version];
        if (typeof this.packFormat !== 'number') {
            throw new Error('Invalid version');
        }
    }

    /**
     * srcディレクトリ内のPack系を継承したクラスを自動でロードしデータパックを生成
     * @returns {boolean} 生成に成功したか
     */
    generate() {
        switch (this.packFormat) {
        case 1:
            return false;
        case 2:
            return false;
        case 3:
            return false;
        case 4:
            return this._generate4();
        case 5:
            return false;
        default:
            return false;
        }
    }

    /**
     * @returns {boolean} 生成に成功したか
     */
    _generate4() {
        const fs = require('fs');
        const list = fs.readdirSync(`${process.cwd()}/${this.src}`, {withFileTypes: true}).filter(f => !f.isDirectory()).map(f => `${process.cwd()}/src/${f.name}`);
        let packs = [];
        list.forEach(f => {
            try {
                const c = require(f);
                const cc = new c;
                if (cc instanceof DataPack) {
                    packs.push(cc);
                }
            } catch {}
            console.log(pucks);
        });
        console.log(packs);
    }
};

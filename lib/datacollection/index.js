"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataCollection = void 0;
const utils_1 = require("../utils");
class DataCollection {
    constructor() {
        this.elements = [];
    }
    parse(object) {
        this.elements = [];
        return this.add(object);
    }
    clear() {
        this.elements = [];
    }
    add(object) {
        if (Array.isArray(object)) {
            return object.map((el) => this.add(el));
        }
        else {
            const id = object.id || (0, utils_1.getUnique)();
            this.elements.push(Object.assign({ id }, object));
            return id;
        }
    }
    get(id) {
        return this.elements.find((el) => el.id === id);
    }
    getAll() {
        return this.elements;
    }
}
exports.dataCollection = new DataCollection();
//# sourceMappingURL=index.js.map
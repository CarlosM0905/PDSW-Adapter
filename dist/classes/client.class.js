export class Client {
    constructor(name, debt, founds) {
        this._name = name;
        this._debt = debt;
        this._founds = founds;
    }
    getName() {
        return this._name;
    }
    getDebt() {
        return this._debt;
    }
    getFounds() {
        return this._founds;
    }
}

export class Client{
    private _name: string;
    private _debt: number;
    private _founds: number;

    constructor(name: string, debt: number, founds: number){
        this._name = name;
        this._debt = debt;
        this._founds = founds;
    }

    getName(): string{
        return this._name;
    }

    getDebt(): number{
        return this._debt;
    }

    getFounds(): number{
        return this._founds;
    }
}
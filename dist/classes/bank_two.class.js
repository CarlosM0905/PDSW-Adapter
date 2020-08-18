import { clientsDB2 } from "../database/clients2_database.js";
export class BankTwo {
    constructor(name, address) {
        this._name = name;
        this._address = address;
    }
    getAllClients() {
        console.log('Getting all clients');
        console.log('Done');
        return clientsDB2;
    }
    giveLoanByInfo(name, debt) {
        if (name.length > 5 && debt < 100) {
            console.log('Congratulations');
            return true;
        }
        else {
            console.log('Denied');
            return false;
        }
    }
    verifyInfoClient(name, debt, founds) {
        if (name.length > 3 && debt >= 0 && founds > 0) {
            console.log('Information approved');
        }
        else {
            console.log('Information denied, retry');
        }
    }
    giveNewCard(name) {
        if (name.length > 5) {
            return '123-345-678';
        }
        else {
            return '978-564-321';
        }
    }
    getActuaDataBank() {
        return {
            name: this._name,
            address: this._address,
            totalClients: 5,
            totalFounds: 19000,
            yearFoundation: 2001
        };
    }
}

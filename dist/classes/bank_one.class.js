import { clientsDB } from '../database/clients_database.js';
export class BankOne {
    constructor(name) {
        this._name = name;
    }
    getClients() {
        let clients;
        console.log('Getting a clients');
        clients = clientsDB;
        console.log('Send clients');
        return clients;
    }
    giveLoan(client) {
        if (client.getDebt() < 200) {
            console.log('Yes, give a loan');
            return true;
        }
        else {
            console.log('Sorry, loan denied');
            return false;
        }
    }
    verifyInfo(client) {
        if (client.getName().length > 5 && client.getFounds() > 0) {
            console.log('Information accepted');
        }
        else {
            console.log('Wrong information');
        }
    }
    giveCard(client) {
        console.log('Hurray, take your card');
        return `${client.getDebt}-${client.getFounds}-1234`;
    }
    getDataBank() {
        return {
            name: this._name,
            totalClients: 5,
            totalFounds: 130000,
            yearFoundation: 2001
        };
    }
}

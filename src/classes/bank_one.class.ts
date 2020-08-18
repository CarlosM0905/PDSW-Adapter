import { IBankOne } from "../interfaces/bank_one.interface";
import { Client } from "./client.class";
import { clientsDB } from '../database/clients_database';
export class BankOne implements IBankOne {
    private _name: string;

    constructor(name: string){
        this._name = name;
    }
    getClients(): Client[] {
        let clients: Client[];
        console.log('Getting a clients');
        clients = clientsDB;
        console.log('Send clients');
        return clients;
    }
    giveLoan(client: Client): boolean {
        if(client.getDebt() < 200){
            console.log('Yes, give a loan');
            return true;
        }
        else{
            console.log('Sorry, loan denied');
            return false;
        }
    }
    verifyInfo(client: Client) {
        if(client.getName().length > 5 && client.getFounds() > 0){
            console.log('Information accepted');
        }
        else{
            console.log('Wrong information')
        }
    }
    giveCard(client: Client): string {
        console.log('Hurray, take your card');
        return `${client.getDebt}-${client.getFounds}-1234`;
    }
    getDataBank() {
        return {
            name: this._name,
            totalClients: 5,
            totalFounds: 130000,
            yearFoundation: 2001
        }
    }

}
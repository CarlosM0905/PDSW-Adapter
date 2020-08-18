import { IBankTwo } from "../interfaces/bank_two.interface";
import { Client } from "./client.class";
import { clientsDB2 } from "../database/clients2_database";

export class BankTwo implements IBankTwo{

    private _name: string;
    private _address: string;

    constructor(name: string, address: string){
        this._name = name;
        this._address = address;
    }
    getAllClients(): Client[] {
        console.log('Getting all clients');
        console.log('Done');
        return clientsDB2;
    }
    giveLoanByInfo(name: string, debt: number): boolean {
        if(name.length > 5 && debt < 100){
            console.log('Congratulations')
            return true;
        }
        else{
            console.log('Denied');
            return false;
        }
    }
    verifyInfoClient(name: string, debt: number, founds: number) {
        if(name.length > 3 && debt >= 0 && founds > 0){
            console.log('Information approved');
        }
        else{
            console.log('Information denied, retry');
        }
    }
    giveNewCard(name: string): string {
        if(name.length > 5){
            return '123-345-678';
        }
        else{
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
        }
    }

    

}
import { BankTwo } from './bank_two.class';
import { IBankOne } from "../interfaces/bank_one.interface";
import { Client } from "./client.class";
import { BankOne } from './bank_one.class';

export class AdapterAPI implements IBankOne{

    private _bankTwo: BankTwo;
    private _bankOne: BankOne;
    private _type: string;

    constructor(name: string, type: string, address: string = 'Not defined'){
        this._bankTwo = new BankTwo(name, address);
        this._bankOne = new BankOne(name);
        this._type = type;
    }

    getClients(): Client[]{
        if(this._type == 'One'){
            return this._bankOne.getClients();
        }
        else if(this._type == 'Two'){
            return this._bankTwo.getAllClients();
        }
        else{
            console.log('Bank invalid')
            return [];
        }
    }
    giveLoan(client: Client): boolean {
        if(this._type == 'One'){
            return this._bankOne.giveLoan(client);
        }
        else if(this._type == 'Two'){
            return this._bankTwo.giveLoanByInfo(client.getName(), client.getDebt());
        }
        else{
            console.log('Bank invalid')
            return false;
        }
    }
    verifyInfo(client: Client) {
        if(this._type == 'One'){
            this._bankOne.verifyInfo(client);
        }
        else if(this._type == 'Two'){
            this._bankTwo.verifyInfoClient(client.getName(), client.getDebt(), client.getFounds());
        }
        else{
            console.log('Bank invalid')
        }
    }
    giveCard(client: Client): string {
        if(this._type == 'One'){
            return this._bankOne.giveCard(client);
        }
        else if(this._type == 'Two'){
            return this._bankTwo.giveNewCard(client.getName());
        }
        else{
            console.log('Bank invalid');
            return '';
        }
    }
    getDataBank() {
        if(this._type == 'One'){
            return this._bankOne.getDataBank();
        }
        else if(this._type == 'Two'){
            return this._bankTwo.getActuaDataBank();
        }
        else{
            console.log('Bank invalid');
            return '';
        }
    }
    
}
import { Client } from "../classes/client.class";

export interface IBankTwo{
    getAllClients(): Client[];
    giveLoanByInfo(name: string, debt: number): boolean;
    verifyInfoClient(name: string, debt: number, founds: number): any;
    giveNewCard(name: string): string;
    getActuaDataBank():any;
}
import { Client } from "../classes/client.class";

export interface IBankOne{
    getClients(): Client[];
    giveLoan(client: Client): boolean;
    verifyInfo(client: Client): any;
    giveCard(client: Client): string;
    getDataBank():any;
}
import { AdapterAPI } from "./classes/adapter.class.js";
import { Client } from "./classes/client.class.js";




window.onload = () => {
    let bank1 = new AdapterAPI('Banco Falabella', 'One');
    let bank2 = new AdapterAPI('Banco Central del Perú', 'Two', 'Av. Jose de la Riva Aguero');
    
    let nameInput = document.getElementById('nameInput') as HTMLInputElement;
    let debtInput = document.getElementById('debtInput') as HTMLInputElement;
    let foundsInput = document.getElementById('foundsInput') as HTMLInputElement;
    let verifyButton = document.getElementById('btnVerify') as HTMLButtonElement;
    verifyButton.addEventListener('click', verifyBankOne);

    let nameInput2 = document.getElementById('nameInput2') as HTMLInputElement;
    let debtInput2= document.getElementById('debtInput2') as HTMLInputElement;
    let foundsInput2 = document.getElementById('foundsInput2') as HTMLInputElement;
    let verifyButton2 = document.getElementById('btnVerify2') as HTMLButtonElement;
    verifyButton2.addEventListener('click', verifyBankTwo);

    let dataName = document.getElementById('data-name') as HTMLAnchorElement;
    let dataTotalClients = document.getElementById('data-totalClients') as HTMLAnchorElement;
    let dataTotalFounds = document.getElementById('data-totalFounds') as HTMLAnchorElement;
    let dataYear = document.getElementById('data-year') as HTMLAnchorElement;

    let dataName2 = document.getElementById('data-name2') as HTMLAnchorElement;
    let dataTotalClients2 = document.getElementById('data-totalClients2') as HTMLAnchorElement;
    let dataTotalFounds2 = document.getElementById('data-totalFounds2') as HTMLAnchorElement;
    let dataYear2 = document.getElementById('data-year2') as HTMLAnchorElement;


    let listClients = document.getElementById('list-clients') as HTMLDivElement;
    let listClients2 = document.getElementById('list-clients2') as HTMLDivElement;

    let dataBank1 = document.getElementById('bank-one') as HTMLDivElement;
    let dataBank2 = document.getElementById('bank-two') as HTMLDivElement;
    let information = document.getElementById('information') as HTMLDivElement;

    let btnBankOne = document.getElementById('bank-one-btn') as HTMLAnchorElement;
    let btnBankTwo = document.getElementById('bank-two-btn') as HTMLAnchorElement;
    let btnInfo = document.getElementById('info-btn') as HTMLAnchorElement;

    btnBankOne.addEventListener('click', showBankOne);
    btnBankTwo.addEventListener('click', showBankTwo);
    btnInfo.addEventListener('click', showInfo);

    function showBankOne(){
        dataBank1.classList.remove('d-none');
        dataBank1.classList.add('d-block');
        dataBank2.classList.remove('d-block');
        dataBank2.classList.add('d-none');
        information.classList.remove('d-block');
        information.classList.add('d-none');
    }
    
    function showBankTwo(){
        dataBank2.classList.remove('d-none');
        dataBank2.classList.add('d-block');
        dataBank1.classList.remove('d-block');
        dataBank1.classList.add('d-none');
        information.classList.remove('d-block');
        information.classList.add('d-none');
    }

    function showInfo(){
        information.classList.remove('d-none');
        information.classList.add('d-block');
        dataBank1.classList.remove('d-block');
        dataBank1.classList.add('d-none');
        dataBank2.classList.remove('d-block');
        dataBank2.classList.add('d-none');
    }


    function createCardClient(client: Client): HTMLDivElement{

        let cardContainer = document.createElement('div');
        cardContainer.classList.add('col-md-6');

        let card = document.createElement('div');
        card.classList.add('card','bg-secondary','mb-3');
        let cardHeader = document.createElement('div');
        cardHeader.classList.add('card-header');
        cardHeader.innerText = client.getName();

        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        let flexInfo = document.createElement('div');
        flexInfo.classList.add('d-flex');

        let infoDebt = document.createElement('p');
        infoDebt.classList.add('card-text','px-1');
        infoDebt.innerText = `Debt: ${client.getDebt()}`;
        let infoFounds = document.createElement('p');
        infoFounds.classList.add('card-text','px-1');
        infoFounds.innerText = `Founds: ${client.getFounds()}`;

        let btnCard = document.createElement('a');
        btnCard.classList.add('card-link');
        btnCard.innerText = 'Give a Card';
        let btnLoan = document.createElement('a');
        btnLoan.classList.add('card-link');
        btnLoan.innerText = 'Give a Loan';


        flexInfo.appendChild(infoDebt);
        flexInfo.appendChild(infoFounds);

        cardBody.appendChild(flexInfo);
        cardBody.appendChild(btnCard);
        cardBody.appendChild(btnLoan);

        card.appendChild(cardHeader);
        card.appendChild(cardBody);


        cardContainer.appendChild(card);

        return cardContainer;
    }

    function listClientsBankOne(){
        let clients:Client[] = bank1.getClients();

        clients.forEach(client => {
            let clientCard: HTMLDivElement = createCardClient(client);
            listClients.appendChild(clientCard);
        })
     }

     function listClientsBankTwo(){
        let clients:Client[] = bank2.getClients();

        clients.forEach(client => {
            let clientCard: HTMLDivElement = createCardClient(client);
            listClients2.appendChild(clientCard);
        })
     }

    function verifyBankOne(){
        let nameClient = nameInput.value;
        let debtClient = parseFloat(debtInput.value);
        let foundsClient = parseFloat(foundsInput.value);
    
        let client: Client = new Client(nameClient, debtClient, foundsClient);
        bank1.verifyInfo(client);
    }

    function verifyBankTwo(){
        let nameClient = nameInput2.value;
        let debtClient = parseFloat(debtInput2.value);
        let foundsClient = parseFloat(foundsInput2.value);
    
        let client: Client = new Client(nameClient, debtClient, foundsClient);
        bank2.verifyInfo(client);
    }
    
    function infoBankOne(){
        let infoBankOne: any = bank1.getDataBank();
        
        dataName.innerText = `Bank Name: ${infoBankOne.name}`;
        dataTotalClients.innerText = `# Clients: ${infoBankOne.totalClients}`;
        dataTotalFounds.innerText = `Total founds: ${infoBankOne.totalFounds}`;
        dataYear.innerText = `Foundation Year: ${infoBankOne.yearFoundation}`; 
    }

    function infoBankTwo(){
        let infoBankTwo: any = bank2.getDataBank();
        
        dataName2.innerText = `Bank Name: ${infoBankTwo.name}`;
        dataTotalClients2.innerText = `# Clients: ${infoBankTwo.totalClients}`;
        dataTotalFounds2.innerText = `Total founds: ${infoBankTwo.totalFounds}`;
        dataYear2.innerText = `Foundation Year: ${infoBankTwo.yearFoundation}`; 
    }


    infoBankOne();
    infoBankTwo();
    listClientsBankOne();
    listClientsBankTwo();
    showBankOne();
}

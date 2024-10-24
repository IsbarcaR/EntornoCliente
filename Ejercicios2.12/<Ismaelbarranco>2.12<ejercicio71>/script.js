class Banco{
    #balance;
    constructor(balance){
        this.#balance=balance;
    }
    depositar(dinero){
        return console.log("Balance = "+ (this.#balance +=dinero));
    }
    retirar(dinero){
        return console.log("Balance = "+ (this.#balance -=dinero));    }
}
banco1= new Banco(10000);
banco1.depositar(200);
banco1.retirar(250);
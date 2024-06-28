

class BankAccount{
    constructor(amount){
        this.amount = amount
    }

    static saldo = 100000;

    static handlingError(){

        // NaN handler
        if(this.amount == isNaN){
            throw new Error ('harus angka')
        }

        // minus handler
        if(this.amount < 0){
            throw new Error ('tidak boleh angka negative')
        }
    }

    static inputDeposit(){

        this.amount = Number(window.prompt("masukkan nominal"));
        BankAccount.saldo += this.amount;

        // try catch

        try {
           // handling minus + NaN
           BankAccount.handlingError(this.amount); 
        } catch (error) {
            alert(error);
        }

        setTimeout(() => {
            console.log(BankAccount.saldo)
        },1000);

    }

    static inputWithdraw(){

       this.amount = window.prompt("masukkan nominal")
           // saldo -= amount
           if(BankAccount.saldo < this.amount){
            throw new Error ("saldo kurang")
        }
        BankAccount.saldo -= this.amount;

       // try catch
       
       try {
            // handling minus + NaN
            BankAccount.handlingError(this.amount);
       } catch (error) {
            alert(error);
       }

       setTimeout(() => {
        console.log(BankAccount.saldo);
       },1000);
   
    }

    getBalance(){
        return this.amount;
    }
}


console.log(BankAccount.inputDeposit());
console.log(BankAccount.inputWithdraw())
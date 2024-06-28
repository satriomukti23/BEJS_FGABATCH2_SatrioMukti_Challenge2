var saldo = 0 ;

function tambahSaldo ()  {
    let number = parseFloat(prompt("masukkan nominal uang yang ingin ditambahkan"));

    let result = saldo += number;
    alert (`RP ${number} berhasil ditambahkan, saldo saat ini RP : ${result} `);
    return saldo;
}

function kurangiSaldo ()  {
    let number = parseFloat(prompt("masukkan nominal uang yang ingin diambil"))

    if(numbers <= saldo){
        let result = saldo -= number;
        alert (`RP ${numbers} berhasil diambil, saldo saat ini RP : ${result} `);
    }else{
        alert ("jumlah saldo anda tidak mencukupi")
    }
    return saldo;
}
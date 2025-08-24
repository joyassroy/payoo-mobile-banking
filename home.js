// For Add Money
document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault();
    const bank=document.getElementById('bank').value;
    const accountNumber=(document.getElementById('account-number').value);
    const amount=parseInt(document.getElementById('add-amount').value);
    const pin=parseInt(document.getElementById('add-pin').value);
    
    if(accountNumber.length<11){
        alert("Please provide 11 Digit Bank Nunber");
        return;
    }
    if(pin!=1234){
        alert('Your Pin is wrong');
        return;
    }

    const availeableBalance=parseInt(document.getElementById('available-balance').innerText);
    const totalAvaleableBalance=availeableBalance+amount;
    
    document.getElementById('available-balance').innerText=totalAvaleableBalance;

    console.log(bank,accountNumber,amount,pin,availeableBalance);

}); 

document.getElementById('add-money-first-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='block';
    document.getElementById('cash-out-parent').style.display='none';
});
document.getElementById('cash-out-first-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('cash-out-parent').style.display='block';
});

// For CashOut

document.getElementById('cash-out-btn').addEventListener('click',function(e){
    e.preventDefault();
    
    const accountNumber=(document.getElementById('cash-out-agent-number').value);
    const amount=parseInt(document.getElementById('cash-out-amount').value);
    const pin=parseInt(document.getElementById('cash-out-pin').value);
    
    if(accountNumber.length<11){
        alert("Please provide 11 Digit Bank Nunber");
        return;
    }
    if(pin!=1234){
        alert('Your Pin is wrong');
        return;
    }

    const availeableBalance=parseInt(document.getElementById('available-balance').innerText);
    if(amount>availeableBalance){
        alert("Exceeded Account Balance");
        return;
    }
    const totalAvaleableBalance=availeableBalance-amount;
    
    document.getElementById('available-balance').innerText=totalAvaleableBalance;

    // console.log(bank,accountNumber,amount,pin,availeableBalance);

}); 
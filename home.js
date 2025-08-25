
const transectionData=[];

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

    const data={
        name:'Add Money',
        date: new Date().toLocaleTimeString()
    };
    transectionData.push(data);

}); 

document.getElementById('add-money-first-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='block';
    document.getElementById('cash-out-parent').style.display='none';
    document.getElementById('transection-parent').style.display='none';
});
document.getElementById('cash-out-first-btn').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='none';
    document.getElementById('cash-out-parent').style.display='block';
    document.getElementById('transection-parent').style.display='none';
});
document.getElementById('transection-first-btn').addEventListener('click',function(){
    document.getElementById('transection-parent').style.display='block';
    document.getElementById('cash-out-parent').style.display='none';
    document.getElementById('add-money-parent').style.display='none';
    
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
    const data={
        name:'Cash Out',
        date: new Date().toLocaleTimeString()
    };
    transectionData.push(data);

    // console.log(bank,accountNumber,amount,pin,availeableBalance);

}); 
// for Transection
document.getElementById('transection-first-btn').addEventListener('click',function(e){
    e.preventDefault();
    const transectionContainer=document.getElementById('transection-parent');
    for(const data of transectionData){
        const div=document.createElement("div");
        div.innerHTML=`
         <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-4 mb-4">
            <div class="flex items-center">
              <div class=" p-3 rounded-full bg-[#f4f5f7] mr-2">
                <img src="./assets/wallet1.png" alt="">
              </div>
              <div>
                <h1>${data.name}</h1>
                <p>${data.date}</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transectionContainer.appendChild(div);
    }
});
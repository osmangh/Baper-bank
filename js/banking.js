//Handle deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput=document.getElementById('deposit-input');
    const newDepositAmount=depositInput.value;
    //console.log('depositAmount');
    const depositTotal=document.getElementById('deposit-total');
    const previousDepositAmount=depositTotal.innerText;
    const newDepositTotal=parseFloat(previousDepositAmount)+parseFloat(newDepositAmount);
    depositTotal.innerText=newDepositTotal;
    //balnce total
    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText);
    newBalanceTotal=parseFloat(previousBalanceTotal)+parseFloat(newDepositAmount);
balanceTotal.innerText=newBalanceTotal;
    //clear text
    depositInput.value='';
})
//with draw amount
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput=document.getElementById('withdraw-input');
    const withdrawAmountText=withdrawInput.value;
    const newWithdrawAmount=parseFloat(withdrawAmountText)
    //console.log(newWithdrawAmount);
    const withdrawTotal=document.getElementById('withdraw-total');
    previousWithdrawText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawText);
    const newWithdrawTotal=parseFloat(previousWithdrawTotal)+parseFloat(newWithdrawAmount);
    withdrawTotal.innerText=newWithdrawTotal;
const balanceTotal=document.getElementById('balance-total');
const previousBalanceText=balanceTotal.innerText;
const previousBalanceTotal=parseFloat(previousBalanceText);
const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
balanceTotal.innerText=newBalanceTotal;



    withdrawInput.value='';
})
/*   check withdraw js file linkup successfull or not */
console.log("withdraw js file linked");
/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  /*   check click event work or not */
  console.log("withdraw button click event work fine");

  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  if (isNaN(newWithdrawAmount) || newWithdrawAmount < 1) {
    alert("Give positive value");
    return;
  }
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newWithdrawTotal = previousWithdrawTotal * 1 + newWithdrawAmount * 1;
  if (previousBalanceTotal < newWithdrawTotal) {
    alert("Totel balance less than your withdraw balance");
    return;
  }
  setTextElementValueById("withdraw-total", parseFloat(newWithdrawTotal.toFixed(2)));
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", parseFloat(newBalanceTotal.toFixed(2)));
});

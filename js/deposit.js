/*   check deposit js file linkup successfull or not */
console.log("deposit js file linked");

document.getElementById("btn-deposit").addEventListener("click", function () {
  /*   check click event work or not */
  console.log("deposit button click event work fine");

  /* Now check value update and working porcess using breakpoint */
  /* newDepositAmount ok */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  /* set alert for avoid negative and not number input */
  if (isNaN(newDepositAmount) || newDepositAmount < 0) {
    alert("Give positive value as input");
    return;
  }
  /*previousDepositTotal ok  */
  const previousDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  /* Automatic Type Conversion use because multiply value covert to number */
  const newDepositTotal = previousDepositTotal * 1 + newDepositAmount * 1;
  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  /* fixed the decimal point value 2 */
  setTextElementValueById("deposit-total", newDepositTotal.toFixed(2));

  // get previous balance by using the function
  ///bug fix wrong function name
  const previousBalanceTotal = getTextElementValueById("balance-total");
  /* Automatic Type Conversion use because multiply value covert to number */
  const newBalanceTotal = previousBalanceTotal * 1 + newDepositAmount * 1;
  /* fixed the decimal point value 2 */
  setTextElementValueById("balance-total", newBalanceTotal.toFixed(2));
});

/* done deposit all problems */
/*   check utilities js file linkup successfull or not */
console.log("utilities js file linked");

function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = textElementValueString;
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  if (isNaN(newValue) || newValue < 0) {
    alert("Give positive value as input");
    return;
  }

  const textElement = document.getElementById(elementId);
  ///fix text field value update. so,it will be innerText
  textElement.innerText = newValue;
}

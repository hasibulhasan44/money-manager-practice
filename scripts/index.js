function getElementValueById(elementId){
    const inputElement = document.getElementById(elementId);
    const valueOfinputElementString = inputElement.value;
    const valueOfinputElement = parseFloat(valueOfinputElementString);
    return valueOfinputElement;
}
function getElementinnerTextById(elementId){
    const innerTextElement = document.getElementById(elementId);
    const valueOfInnerTextElementString = innerTextElement.innerText;
    const valueOfInnerTextElement = parseFloat(valueOfInnerTextElementString);
    return valueOfInnerTextElement;
}
function setElementInnerText(elementId, newInnerText){
    const getElementId = document.getElementById(elementId);
    getElementId.innerText = newInnerText;
}

function isNan(inputId){
    const inputFieldElement = document.getElementById(inputId);
    if(isNaN(inputFieldElement.value)){
        inputFieldElement.value = '';
        alert('Input a valid number');
    }
    else {
        return;
    }
}

function innerTextIsnaN(elementId){
    const innerTextField = document.getElementById(elementId);
    if(isNaN(innerTextField.innerText)){
        innerTextField.innerText = '0000';
    }
    else {
        return;
    }
}

// getting the input values by calling function
document.getElementById('btn-calculate').addEventListener('click', function(){
    const incomeInputField = getElementValueById('income-input-field');
    const foodInputField = getElementValueById('food-input-value');
    const rentInputField = getElementValueById('rents-input-value');
    const clothesInputField = getElementValueById('clothes-input-value');

    const totalExpenses = foodInputField + rentInputField + clothesInputField;

    const amountExpensesElement = getElementinnerTextById('amount-expenses');
    const amountExpensesSet = setElementInnerText('amount-expenses', totalExpenses);
    
    const balanceAfterExpenses = incomeInputField - totalExpenses;
    const balanceAmountSet = setElementInnerText('balance-after-expenses', balanceAfterExpenses);

    const incomeAlert = isNan('income-input-field');
    const aincomeAlert = isNan('food-input-value');
    const bincomeAlert = isNan('rents-input-value');
    const cincomeAlert = isNan('clothes-input-value');
    const alertCallForExpenses = innerTextIsnaN('amount-expenses');
    const alertCallForBalance = innerTextIsnaN('balance-after-expenses');
})

document.getElementById('btn-save').addEventListener('click', function(){
    const savingsValueElement = getElementValueById('savings-input-value');
    const balanceAfterExpenses = getElementinnerTextById('balance-after-expenses');
    const totalSavedAmount = (balanceAfterExpenses * savingsValueElement)/100;

    const setTotalSavingsAmout = setElementInnerText('total-savings', totalSavedAmount);

    const balanceAfterSavings = balanceAfterExpenses - totalSavedAmount;
    const setBalanceAfterSavings = setElementInnerText('balance-after-savings', balanceAfterSavings);

    const savingsAlert = isNan('savings-input-value');
    const alertCallForBalance = innerTextIsnaN('balance-after-savings');
    const alertCallForSavings = innerTextIsnaN('total-savings');
})
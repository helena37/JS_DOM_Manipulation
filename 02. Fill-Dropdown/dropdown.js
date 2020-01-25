function addItem() {
    /*
    1. We make reference to select menu
    2. We make a reference to item text
    3. We make a reference to item value

    4. Creating an element option
    5. We make the value of Option to be equal of to item value
    6. We make a text content of option to be equal to input text
    7. To the end we append the created option to select menu
    and after adding the option we clear the text fields!!!
     */
    const select = document.getElementById('menu');
    const itemTextInput = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');

    const option = document.createElement("option");
    option.value = itemValue.value;
    option.textContent = itemTextInput.value;
    select.appendChild(option);

    itemTextInput.value = "";
    itemValue.value = "";
}
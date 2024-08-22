import { alphabetOptions, languageOptions, OperationOption, stringOptions } from "./options-operations";

/**
 * @description This file contains all the event listeners for the calculator
 */
const select = document.getElementById('operation') as HTMLSelectElement;

select.addEventListener('change', () => { 
    const inputB = document.getElementById('inputB') as HTMLInputElement;
    const placeHolder = inputB.querySelector('span') as HTMLSpanElement;
    inputB.disabled = false;

    if (select.value === 'membership') {
        placeHolder.textContent = 'Elemento a verificar';
       return;
    }

    if (select.value === 'length') {
        inputB.disabled = true;
        return;
    }

    if (select.value === 'reverse') {
        inputB.disabled = true;
        return;
    }
    placeHolder.textContent = 'Introduce el conjunto B o veces para patronar';
})


const typeOperation = document.getElementById('type-operation') as HTMLSelectElement;

typeOperation.addEventListener('change', () => { 
    select.innerHTML = '';

    switch (typeOperation.value) { 
        case 'alphabet':
            createOptionByArray(alphabetOptions);
        break
        case 'string':
            createOptionByArray(stringOptions);
        break
        case 'language':
            createOptionByArray(languageOptions);
        break
    }
})


function createOptionByArray(array: OperationOption[]) { 
    array.forEach((option) => { 
        const element = document.createElement('option');
        element.value = option.value;
        element.text = option.label;
        select.add(element);
    })
}
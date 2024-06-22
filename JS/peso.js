document.getElementById('convert-button').addEventListener('click', function(){
    let fromUnit = document.getElementById('from-unit').value;
    let toUnit = document.getElementById('to-unit').value;
    let inputValue = parseFloat(document.getElementById('from-value').value);

    let result;
    if (fromUnit === 'gramas'){
        if (toUnit === 'gramas'){
            result = inputValue;
        } else if (toUnit === 'quilo'){
            result = inputValue / 1000;
        } else if (toUnit === 'libras'){
            result = inputValue / 453.592;
        }
    } else if (fromUnit === 'quilo'){
        if (toUnit === 'gramas'){
            result = inputValue * 1000;
        } else if (toUnit === 'quilo'){
            result = inputValue;
        } else if (toUnit === 'libras'){
            result = inputValue * 2.205;
        }
    } else if (fromUnit === 'libras'){
        if (toUnit === 'gramas') {
            result = inputValue * 453.592;
        } else if (toUnit === 'quilo'){
            result = inputValue / 2.205;
        } else if (toUnit === 'libras'){
            result = inputValue;
        }
    }

    document.getElementById('result-value').textContent = result.toFixed(2);
});

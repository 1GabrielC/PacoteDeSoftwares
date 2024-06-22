document.getElementById('convert-button').addEventListener('click', function(){
    const fromUnit = document.getElementById('from-unit').value;
    const fromValue = parseFloat(document.getElementById('from-value').value);
    const toUnit = document.getElementById('to-unit').value;

    if (isNaN(fromValue)){
        alert('Por favor, insira um valor válido.');
        return;
    }

    let result;

    if (fromUnit === 'celsius'){
        if (toUnit === 'fahrenheit'){
            result = (fromValue * 9/5) + 32;
        }else if (toUnit === 'kelvin'){
            result = fromValue + 273.15;
        }else{
            result = fromValue;
        }
    }else if (fromUnit === 'fahrenheit'){
        if (toUnit === 'celsius'){
            result = (fromValue - 32) * 5/9;
        }else if (toUnit === 'kelvin'){
            result = (fromValue - 32) * 5/9 + 273.15;
        }else{
            result = fromValue;
        }
    }else if (fromUnit === 'kelvin'){
        if (toUnit === 'celsius'){
            result = fromValue - 273.15;
        }else if (toUnit === 'fahrenheit'){
            result = (fromValue - 273.15) * 9/5 + 32;
        }else{
            result = fromValue;
        }
    }

    document.getElementById('result-value').innerText = result.toFixed(2);
    document.getElementById('result-textarea').value = result.toFixed(2);
});

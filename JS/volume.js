document.getElementById('convert-button').addEventListener('click', function(){
    const fromUnit = document.getElementById('from-unit').value;
    const fromValue = parseFloat(document.getElementById('from-value').value);
    const toUnit = document.getElementById('to-unit').value;

    if (isNaN(fromValue)){
        alert('Por favor, insira um valor válido.');
        return;
    }

    let result;

    if (fromUnit === 'litros'){
        if (toUnit === 'litros'){
            result = fromValue;
        }else if (toUnit === 'mililitros'){
            result = fromValue * 1000;
        }else if (toUnit === 'galoes'){
            result = fromValue * 0.264172;
        }
    }else if (fromUnit === 'mililitros'){
        if (toUnit === 'litros') {
            result = fromValue * 0.001;
        }else if (toUnit === 'mililitros'){
            result = fromValue;
        }else if (toUnit === 'galoes'){
            result = fromValue * 0.000264172;
        }
    }else if (fromUnit === 'galoes'){
        if (toUnit === 'litros') {
            result = fromValue * 3.78541;
        }else if (toUnit === 'mililitros'){
            result = fromValue * 3785.41;
        }else if (toUnit === 'galoes'){
            result = fromValue;
        }
    }

    document.getElementById('result-value').innerText = result.toFixed(2);
    document.getElementById('result-textarea').value = result.toFixed(2);
});

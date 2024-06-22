document.getElementById('convert-button').addEventListener('click', function(){
    let fromUnit = document.getElementById('from-unit').value;
    let toUnit = document.getElementById('to-unit').value;
    let inputValue = parseFloat(document.getElementById('from-value').value);

    let result;
    if (fromUnit === 'meters'){
        if (toUnit === 'meters'){
            result = inputValue;
        } else if (toUnit === 'centimeters'){
            result = inputValue * 100;
        } else if (toUnit === 'millimeters'){
            result = inputValue * 1000;
        } else if (toUnit === 'inches'){
            result = inputValue * 39.3701;
        }
    } else if (fromUnit === 'centimeters'){
        if (toUnit === 'meters') {
            result = inputValue / 100;
        } else if (toUnit === 'centimeters'){
            result = inputValue;
        } else if (toUnit === 'millimeters'){
            result = inputValue * 10;
        } else if (toUnit === 'inches'){
            result = inputValue * 0.393701;
        }
    } else if (fromUnit === 'millimeters'){
        if (toUnit === 'meters') {
            result = inputValue / 1000;
        } else if (toUnit === 'centimeters'){
            result = inputValue / 10;
        } else if (toUnit === 'millimeters'){
            result = inputValue;
        } else if (toUnit === 'inches'){
            result = inputValue * 0.0393701;
        }
    } else if (fromUnit === 'inches'){
        if (toUnit === 'meters') {
            result = inputValue * 0.0254;
        } else if (toUnit === 'centimeters'){
            result = inputValue * 2.54;
        } else if (toUnit === 'millimeters'){
            result = inputValue * 25.4;
        } else if (toUnit === 'inches'){
            result = inputValue;
        }
    }

    document.getElementById('result-value').textContent = result.toFixed(2);
});

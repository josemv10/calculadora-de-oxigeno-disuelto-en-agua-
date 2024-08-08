function getCorrectionConstant(temp) {
    const constants = {
        1: 0.08796,
        2: 0.08485,
        3: 0.08184,
        4: 0.07911,
        5: 0.07646,
        6: 0.07391,
        7: 0.07135,
        8: 0.06916,
        9: 0.06697,
        10: 0.06478,
        11: 0.06286,
        12: 0.06104,
        13: 0.05931,
        14: 0.05757,
        15: 0.05602,
        16: 0.05456,
        17: 0.05328,
        18: 0.05201,
        19: 0.05073,
        20: 0.04964,
        21: 0.04854,
        22: 0.04754,
        23: 0.04662,
        24: 0.04580,
        25: 0.04498,
        26: 0.04425,
        27: 0.04361,
        28: 0.04296,
    };
    return constants[Math.round(temp)] || 0;
}

function calculateOxygen() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const salinity = parseFloat(document.getElementById('salinity').value);
    const pressure = parseFloat(document.getElementById('pressure').value);
    
    // Valor de oxígeno disuelto en condiciones estándar (ejemplo)
    const standardDO = 8.55; // mg/L a 23°C y 0 ppt

    // Obtener la constante de corrección para la salinidad
    const k = getCorrectionConstant(temp);

    // Calcular el oxígeno disuelto corregido
    const correctedDO = (standardDO + (pressure - 760) * 0.00143) - (k * salinity);

    // Calcular el porcentaje de saturación
    const maxSaturationDO = standardDO + (pressure - 760) * 0.00143; // Oxígeno disuelto en condiciones ideales
    const saturationPercentage = (correctedDO / maxSaturationDO) * 100;

    document.getElementById('result').innerText = `Oxígeno Disuelto Corregido: ${correctedDO.toFixed(2)} mg/L\nPorcentaje de Saturación: ${saturationPercentage.toFixed(2)}%`;
}

function toggleInfo() {
    const infoDiv = document.getElementById('info');
    infoDiv.style.display = (infoDiv.style.display === 'none' || infoDiv.style.display === '') ? 'block' : 'none';
}

function toggleDoRanges() {
    const doRangesDiv = document.getElementById('doRanges');
    doRangesDiv.style.display = (doRangesDiv.style.display === 'none' || doRangesDiv.style.display === '') ? 'block' : 'none';
}

function toggleInfoWindow() {
    const infoWindow = document.getElementById('infoWindow');
    infoWindow.style.display = (infoWindow.style.display === 'none' || infoWindow.style.display === '') ? 'block' : 'none';
}

function toggleSalinityRanges() {
    const salinityRanges = document.getElementById('salinityRanges');
    salinityRanges.style.display = (salinityRanges.style.display === 'none' || salinityRanges.style.display === '') ? 'block' : 'none';
}


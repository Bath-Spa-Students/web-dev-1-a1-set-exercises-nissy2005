document.addEventListener("DOMContentLoaded", function() {
    const petrolCostInput = document.getElementById('petrolCost');
    const litersInput = document.getElementById('litersPurchased');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalCostOutput = document.getElementById('totalCost');

    calculateBtn.addEventListener('click', function() {
        const petrolCost = parseFloat(petrolCostInput.value);
        const liters = parseFloat(litersInput.value);

        if (isNaN(petrolCost) || isNaN(liters) || petrolCost <= 0 || liters <= 0) {
            alert('Please enter valid values for petrol cost and liters purchased.');
            return;
        }

        const totalCost = petrolCost * liters;
        totalCostOutput.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });
});


document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateLoan();
});

document.getElementById('carModel').addEventListener('change', updateCarPrice);
document.getElementById('carVariant').addEventListener('change', updateCarPrice);
document.getElementById('depositAmount').addEventListener('input', validateDepositAmount);
document.getElementById('interestRate').addEventListener('input', validateInterestRate);
document.getElementById('repaymentPeriod').addEventListener('input', validateRepaymentPeriod);

function updateCarPrice() {
    var carModel = document.getElementById('carModel').value;
    var carVariant = document.getElementById('carVariant').value;
    var carPrice = getCarPrice(carModel, carVariant);

    var carPriceElement = document.getElementById('carPrice');
    carPriceElement.value = carPrice.toFixed(2);

    validateDepositAmount(); // Call the validation function
}

function validateDepositAmount() {
    var carPrice = parseFloat(document.getElementById('carPrice').value);
    var depositAmount = parseFloat(document.getElementById('depositAmount').value);

    if (depositAmount > carPrice) {
        alert("Deposit amount cannot be greater than the car price.");
        document.getElementById('depositAmount').value = carPrice.toFixed(2);
    }
}

function validateInterestRate() {
    var interestRate = parseFloat(document.getElementById('interestRate').value);

    if (interestRate < 0 || interestRate > 5) {
        alert("Interest rate must be between 0 and 5.");
        document.getElementById('interestRate').value = '';
    }
}

function validateRepaymentPeriod() {
    var repaymentPeriod = parseInt(document.getElementById('repaymentPeriod').value);

    if (repaymentPeriod < 1 || repaymentPeriod > 10) {
        alert("Repayment period must be between 1 and 10 years.");
        document.getElementById('repaymentPeriod').value = '';
    }
}

function calculateLoan() {
    event.preventDefault(); // Prevent page refresh
    var carModel = document.getElementById('carModel').value;
    var carVariant = document.getElementById('carVariant').value;
    var carColor = document.getElementById('carColor').value;
    var carPrice = getCarPrice(carModel, carVariant);
    var depositAmount = parseFloat(document.getElementById('depositAmount').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);
    var repaymentPeriod = parseInt(document.getElementById('repaymentPeriod').value);

    if (carModel === "" || carVariant === "" || carColor === "" || isNaN(depositAmount) || isNaN(interestRate) || isNaN(repaymentPeriod)) {
        alert("Please fill in all the required fields with valid input.");
        return;
    }

    var loanAmount = carPrice - depositAmount;
    var interest = (interestRate / 100) * loanAmount;
    var totalAmount = loanAmount + interest;
    var monthlyPayment = totalAmount / (repaymentPeriod * 12);

    var resultElement = document.getElementById('result');
    var carPriceElement = document.getElementById('carPrice');

    // Set the determined car price in the input field
    carPriceElement.value = carPrice.toFixed(2);

    // Check if the calculation is valid
    if (isNaN(totalAmount) || isNaN(monthlyPayment)) {
        alert('Please enter valid numbers for the loan calculation.');
        return;
    }

    if (monthlyPayment < 0) {
        monthlyPayment = 0;
    }

    // Display the result
    resultElement.innerHTML =
        '<h2>Result:</h2>' +
        '<p><strong>Car Model:</strong> ' + carModel + '</p>' +
        '<p><strong>Car Variant:</strong> ' + carVariant + '</p>' +
        '<p><strong>Car Color:</strong> ' + carColor + '</p>' +
        '<p><strong>Car Price:</strong> RM' + carPrice.toFixed(2) + '</p>' +
        '<p><strong>Deposit Amount:</strong> RM' + depositAmount.toFixed(2) + '</p>' +
        '<p><strong>Interest Rate:</strong> ' + interestRate + '%</p>' +
        '<p><strong>Repayment Period:</strong> ' + repaymentPeriod + ' years</p>' +
        '<p><strong>Monthly Payment:</strong> RM' + monthlyPayment.toFixed(2) + '</p>';
}

function getCarPrice(model, variant) {
    var price;

    if (model === 'Ativa') {
        if (variant === 'Standard') {
            price = 25000;
        } else if (variant === 'Luxury') {
            price = 40000;
        } else if (variant === 'Gear Up') {
            price = 55000;
        }
    } else if (model === 'Aruz') {
        if (variant === 'Standard') {
            price = 30000;
        } else if (variant === 'Luxury') {
            price = 45000;
        } else if (variant === 'Gear Up') {
            price = 60000;
        }
    } else if (model === 'Myvi') {
        if (variant === 'Standard') {
            price = 20000;
        } else if (variant === 'Luxury') {
            price = 35000;
        } else if (variant === 'Gear Up') {
            price = 50000;
        }
    }

    return price;
}

// Slider update functions
function updateCarPriceSlider(value) {
    document.getElementById('carPrice').value = value;
    document.getElementById('carPriceSliderValue').textContent = value;
}

function updateDepositAmountSlider(value) {
    document.getElementById('depositAmount').value = value;
    document.getElementById('depositAmountSliderValue').textContent = value;
}

function updateInterestRateSlider(value) {
    document.getElementById('interestRate').value = value;
    document.getElementById('interestRateSliderValue').textContent = value;
}

function updateRepaymentPeriodSlider(value) {
    document.getElementById('repaymentPeriod').value = value;
    document.getElementById('repaymentPeriodSliderValue').textContent = value;
}

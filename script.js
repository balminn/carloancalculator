document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateLoan();
});

function calculateLoan() {
    event.preventDefault(); // Prevent page refresh
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;
    var monthlySalary = parseFloat(document.getElementById('monthlySalary').value);
    var carPrice = parseInt(document.getElementById('carPrice').value);
    var loanTerm = parseInt(document.getElementById('loanTerm').value);
    var interestRate = parseFloat(document.getElementById('interestRate').value);

    var loanAmount = carPrice;
    var interest = (interestRate / 100) * loanAmount;
    var totalAmount = loanAmount + interest;
    var monthlyPayment = totalAmount / loanTerm;

    var resultElement = document.getElementById('result');

    // Clear previous result
    resultElement.innerHTML = '';

    // Check if the calculation is valid
    if (isNaN(totalAmount) || isNaN(monthlyPayment)) {
        alert('Please enter valid numbers for the loan calculation.');
        return;
    }

    // Display the result
    resultElement.innerHTML =
        '<h2>Result:</h2>' +
        '<p><strong>Username:</strong> ' + name + '</p>' +
        '<p><strong>Age:</strong> ' + age + '</p>' +
        '<p><strong>Phone Number:</strong> ' + tel + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>' +
        '<p><strong>Monthly Salary:</strong> RM' + monthlySalary.toFixed(2) + '</p>' +
        '<p><strong>Total Amount:</strong> RM' + totalAmount.toFixed(2) + '</p>' +
        '<p><strong>Monthly Payment:</strong> RM' + monthlyPayment.toFixed(2) + '</p>';
}



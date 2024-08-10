function calculateTax(salary) {
    let tax = 0;

    if (salary <= 250000) {
        tax = 0;
    } else if (salary <= 500000) {
        tax = (salary - 250000) * 0.05;
    } else if (salary <= 750000) {
        tax = 12500 + (salary - 500000) * 0.10;
    } else if (salary <= 1000000) {
        tax = 37500 + (salary - 750000) * 0.15;
    } else if (salary <= 1250000) {
        tax = 75000 + (salary - 1000000) * 0.20;
    } else if (salary <= 1500000) {
        tax = 125000 + (salary - 1250000) * 0.25;
    } else {
        tax = 187500 + (salary - 1500000) * 0.30;
    }

    return tax;
}

function formatCurrency(amount) {
    return "₹ " + amount.toFixed(2).replace(/\d(?=(\d{2})+\d\.)/g, '$&,').slice(0, -3);
}

document.getElementById("calculateButton").addEventListener("click", function() {
    const salary = parseFloat(document.getElementById("salaryInput").value);
    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid salary.");
        return;
    }

    const tax = calculateTax(salary);
    document.getElementById("taxResult").innerText = "Income Tax: " + formatCurrency(tax);

    const expenses = calculateExpenses(salary);
    const personalExpenses = calculatePersonalExpenses(salary);
    const investments = calculateInvestments(salary);

    document.getElementById("expensesResult").innerText = "Expenses: " + formatCurrency(expenses);
    document.getElementById("personalExpensesResult").innerText = "Personal Expenses: " + formatCurrency(personalExpenses);
    document.getElementById("investmentsResult").innerText = "Investments: " + formatCurrency(investments);

    const fd = calculateFixedDeposit(investments);
    const rd = calculateRecurringDeposit(investments);
    const sip = calculateSIPMutualFund(investments);
    const personalSavings = calculatePersonalSavings(investments);

    document.getElementById("fdResult").innerText = "Fixed Deposit: " + formatCurrency(fd);
    document.getElementById("rdResult").innerText = "Recurring Deposit: " + formatCurrency(rd);
    document.getElementById("sipMutualFundResult").innerText = "SIP/Mutual Fund: " + formatCurrency(sip);
    document.getElementById("personalSavingsResult").innerText = "Personal Savings: " + formatCurrency(personalSavings);
});

// Dummy functions for other calculations (replace with actual logic)
function calculateExpenses(salary) {
    return salary * 0.4; // Example: 40% for expenses
}

function calculatePersonalExpenses(salary) {
    return salary * 0.3; // Example: 30% for personal expenses
}

function calculateInvestments(salary) {
    return salary * 0.3; // Example: 30% for investments
}

function calculateFixedDeposit(investments) {
    return investments * 0.25; // Example: 25% of investments for FD
}

function calculateRecurringDeposit(investments) {
    return investments * 0.25; // Example: 25% of investments for RD
}

function calculateSIPMutualFund(investments) {
    return investments * 0.25; // Example: 25% of investments for SIP/Mutual Fund
}

function calculatePersonalSavings(investments) {
    return investments * 0.25; // Example: 25% of investments for Personal Savings
}

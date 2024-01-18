let balance = 1000;

function updateBalance() {
    document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
}

function deposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        updateBalance();
    } else {
        alert('Please enter a valid amount.');
    }
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
    } else {
        alert('Invalid amount or insufficient funds.');
    }
}

updateBalance();

const depositadoElement = document.getElementById("depositado");
const saldoElement = document.getElementById("saldo");
const importeElement = document.getElementById("importe");
const retirarButton = document.getElementById("retirar");
const depositarButton = document.getElementById("depositar");

let saldo = 1000;
let depositado = 0;

depositarButton.addEventListener("click", () => {
    const importe = parseFloat(importeElement.value);
    if (!isNaN(importe) && importe > 0) {
        saldo += importe;
        depositado += importe;
        updateDisplay();
    }
});

retirarButton.addEventListener("click", () => {
    const importe = parseFloat(importeElement.value);
    if (!isNaN(importe) && importe > 0) {
        if (importe <= saldo) {
            saldo -= importe;
            updateDisplay();
        } else {
            alert("No puedes retirar más de tu saldo actual.");
        }
    }
});

function updateDisplay() {
    depositadoElement.textContent = `Depositado: ${depositado}€`;
    saldoElement.textContent = `Saldo: ${saldo}€`;
}
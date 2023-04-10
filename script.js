const btnAdicionar = document.querySelectorAll('.btn-adicionar');
const btnExcluir = document.querySelectorAll('.btn-excluir');
const quantidadeNumero =
document.querySelectorAll('.quantidade-numero');

btnAdicionar.forEach((btn, index) => {
btn.addEventListener('click', () => {
quantidadeNumero[index].innerText++;
});
});

btnExcluir.forEach((btn, index) => {
btn.addEventListener('click', () => {
if (quantidadeNumero[index].innerText > 0) {
quantidadeNumero[index].innerText--;
}
});
});



const btnCancelar = document.querySelector('.btn-cancelar');
const btnConcluir = document.querySelector('.btn-concluir');

btnCancelar.addEventListener('click', () => {
window.location.reload();
});

btnConcluir.addEventListener('click', () => {
const picole = document.querySelectorAll('.picole');
let total = 0;
let descricao = '';

picole.forEach((item, index) => {
const quantidade = parseInt(quantidadeNumero[index].innerText);
if (quantidade > 0) {
const preco = parseFloat(item.querySelector('p').innerText.replace('R$ ', '').replace(',', '.'));
total += preco * quantidade;
descricao += '${quantidade} x ${item.querySelector(h2).innerText}\n';
}
});

const pagamento = prompt('Total: R$ ${total.toFixed(2)}\n\nDescrição:\n${descricao}\n\nEscolha uma forma de pagamento:\n1. Cartão de crédito\n2. Cartão de débito\n3. Pix');

if (pagamento) {
alert('Venda realizada com sucesso!\n\nTotal: R$ ${total.toFixed(2)}\n\nForma de pagamento: ${pagamento}');
window.location.reload();
}
});
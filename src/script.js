document.getElementById('formConta').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita o recarregamento da página

  const numeroPessoas = parseInt(document.getElementById('pessoas').value);
  const valorConta = parseFloat(document.getElementById('valorConta').value);
  const metodoPagamento = document.getElementById('pagamento').value;

  let valorFinal = valorConta;

  // Aplica desconto de 10% se for PIX ou dinheiro
  if (metodoPagamento === 'pix' || metodoPagamento === 'dinheiro') {
    valorFinal *= 0.9;
  }

  const valorPorPessoa = valorFinal / numeroPessoas;

  document.getElementById('resultado').innerHTML =
    `Total com desconto: R$ ${valorFinal.toFixed(2)}<br>
     Cada pessoa paga: R$ ${valorPorPessoa.toFixed(2)}`;
});

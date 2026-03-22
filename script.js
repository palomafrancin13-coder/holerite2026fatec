function calcular() {
  let salario = parseFloat(document.getElementById("salario").value);

  let inss = calcularINSS(salario);
  let base = salario - inss;
  let irrf = calcularIRRF(base);
  let liquido = salario - inss - irrf;

  document.getElementById("inss").value = "R$ " + inss.toFixed(2);
  document.getElementById("irrf").value = "R$ " + irrf.toFixed(2);
  document.getElementById("liquido").value = "R$ " + liquido.toFixed(2);

 
  if (irrf === 0) {
    document.getElementById("mensagem").innerText =
      "Você está isento de Imposto de Renda em 2026!";
  } else {
    document.getElementById("mensagem").innerText = "";
  }
}


function calcularINSS(salario) {
  let inss = 0;

  if (salario > 4354.27) {
    inss += (4354.27 - 2902.84) * 0.12;
    inss += (2902.84 - 1621) * 0.09;
    inss += 1621 * 0.075;
    inss += (salario - 4354.27) * 0.14;
  } else if (salario > 2902.84) {
    inss += (salario - 2902.84) * 0.12;
    inss += (2902.84 - 1621) * 0.09;
    inss += 1621 * 0.075;
  } else if (salario > 1621) {
    inss += (salario - 1621) * 0.09;
    inss += 1621 * 0.075;
  } else {
    inss += salario * 0.075;
  }


  if (inss > 988.09) {
    inss = 988.09;
  }

  return inss;
}


function calcularIRRF(base) {
  if (base <= 5000) {
    return 0;
  } else {
    return (base - 5000) * 0.275;
  }
}
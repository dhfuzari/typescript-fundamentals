(function() {
  const input1 = document.getElementById('num1') as HTMLInputElement;
  const input2 = document.getElementById('num2') as HTMLInputElement;
  const button = document.getElementById('button')!;

  function sum(leftOperand: number, rightOperand: number) {
    return leftOperand + rightOperand;
  }

  button.addEventListener('click', function() {
    console.log(sum(Number(input1.value), Number(input2.value)));
  });
})();
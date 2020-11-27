let input;
let total = 0;

while (true) {
  input = prompt('Please enter a number');
  if (input === null) {
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);
  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  total += input;
}
alert(`Общая сумма чисел равна ${total}`);

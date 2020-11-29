let credits = 23580;
const pricePerDroid = 3000;
let droidAmount = prompt('Please enter number of droids');
let message;
if (droidAmount === null) {
  message = 'Отменено пользователем!';
} else {
  droidAmount = Number(droidAmount);
  const totalPrice = pricePerDroid * droidAmount;
  const notANumber = Number.isNaN(droidAmount);

  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else if (notANumber) {
    alert('Введено не число, попробуйте еще раз');
  } else {
    credits -= totalPrice;
    message = `Вы купили ${droidAmount} дроидов, на счету осталось ${credits} кредитов.`;
  }
}
console.log(message);

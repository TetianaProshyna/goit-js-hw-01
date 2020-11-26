let credits = 23580;
const pricePerDroid = 3000;
const droidAmount = prompt('Please enter number of droids');
let message;
const totalPrice = pricePerDroid * droidAmount;
if (droidAmount === null) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  credits -= totalPrice;
  message = `Вы купили ${droidAmount} дроидов, на счету осталось ${credits} кредитов.`;
}
console.log(message);

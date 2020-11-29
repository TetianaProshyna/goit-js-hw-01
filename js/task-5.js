let country = prompt('Please enter delivery country');
let deliveryPrice;
let message;
if (country === null) {
  message = 'Отменено пользователем!';
} else {
  country =
    country.charAt(0).toLocaleUpperCase() + country.slice(1).toLowerCase();
  switch (country) {
    case 'Китай':
      deliveryPrice = '100';
      break;
    case 'Чили':
      deliveryPrice = '250';
      break;
    case 'Австралия':
      deliveryPrice = '170';
      break;
    case 'Индия':
      deliveryPrice = '80';
      break;
    case 'Ямайка':
      deliveryPrice = '120';
      break;
    default:
      message = 'В вашей стране доставка не доступна';
      break;
  }
}

if (deliveryPrice) {
  message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
}

alert(message);

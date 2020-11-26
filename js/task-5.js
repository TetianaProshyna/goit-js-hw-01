const country = prompt('Please enter delivery country');
let deliveryPrice;
let message;
switch (country.toUpperCase()) {
  case 'КИТАЙ':
    deliveryPrice = '100';
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'ЧИЛИ':
    deliveryPrice = '250';
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'АВСТРАЛИЯ':
    deliveryPrice = '170';
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'ИНДИЯ':
    deliveryPrice = '80';
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'ЯМАЙКА':
    deliveryPrice = '120';
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  default:
    message = 'В вашей стране доставка не доступна';
    break;
}
alert(message);

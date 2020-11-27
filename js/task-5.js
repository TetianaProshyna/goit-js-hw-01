const country = prompt('Please enter delivery country');
let deliveryPrice;
let message;
switch (country.toLowerCase()) {
  case 'китай':
    deliveryPrice = '100';
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'чили':
    deliveryPrice = '250';
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'австралия':
    deliveryPrice = '170';
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'индия':
    deliveryPrice = '80';
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  case 'ямайка':
    deliveryPrice = '120';
    message = `Доставка в ${country} будет стоить ${deliveryPrice} кредитов`;
    break;
  default:
    message = 'В вашей стране доставка не доступна';
    break;
}
alert(message);

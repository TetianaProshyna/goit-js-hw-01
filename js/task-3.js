const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const password = prompt('Please enter a password');
if (password === null) {
  message = 'Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

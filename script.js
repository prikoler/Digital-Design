// Функция для форматирования даты
function getDayInfo(dateString) {
  var dateParts = dateString.split(".");
  var day = parseInt(dateParts[0], 10);
  var month = parseInt(dateParts[1], 10) - 1;
  var year = parseInt(dateParts[2], 10);

  var weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  var date = new Date(year, month, day);
  var weekday = weekdays[date.getDay()];
  var weekNumber = Math.ceil(day / 7);
  var monthName = months[month];

  return weekday + ', ' + weekNumber + ' неделя ' + monthName + ' ' + year + ' года';
}

for (var i = 1; i <= 50; i++) {
  var dateElement = document.getElementById('date' + i);
  if (dateElement) {
    var currentDate = new Date(); // Получаем текущую дату
    var daysToAdd = i; // Количество дней, на которое нужно увеличить дату
    currentDate.setDate(currentDate.getDate() + daysToAdd); // Увеличиваем текущую дату на daysToAdd дней

    var day = currentDate.getDate().toString().padStart(2, '0'); // Преобразуем день в строку с ведущим нулем
    var month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Преобразуем месяц в строку с ведущим нулем
    var year = currentDate.getFullYear().toString(); // Получаем год в строковом формате

    var dateString = day + '.' + month + '.' + year; // Формируем дату в формате "дд.мм.гггг"
    var dayInfo = getDayInfo(dateString);
    dateElement.textContent = dayInfo;
  }
}


// Показать форму покупки
document.querySelectorAll('.buy-button').forEach(function(button) {
  button.addEventListener('click', function() {
    document.getElementById('form-overlay').style.display = 'flex';
  });
});

// Скрыть форму покупки
document.querySelector('.close-button').addEventListener('click', function() {
  document.getElementById('form-overlay').style.display = 'none';
});

// Покупка
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Спасибо за покупку!');
});

// Показать кнопку "Наверх" при прокрутке
window.onscroll = function() {
  if (document.documentElement.scrollTop > 300) {
    document.getElementById('back-to-top').style.display = 'block';
  } else {
    document.getElementById('back-to-top').style.display = 'none';
  }
};

// Прокрутить страницу наверх
document.getElementById('back-to-top').addEventListener('click', function() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Переключение темы
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});




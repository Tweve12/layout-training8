const buttons = document.querySelectorAll('.clients-pagination-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

const clientsSection = document.querySelector('.clients');

// Массив фоновых изображений
const backgrounds = [
  'url("./../img/group5.jpg")',
  'url("./../img/group5.jpg")',
  'url("./../img/group5.jpg")',
  'url("./../img/group5.jpg")'
];

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Снимаем активный класс со всех
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Меняем фон
    clientsSection.style.backgroundImage = backgrounds[index];
  });
});
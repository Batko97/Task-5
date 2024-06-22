document.addEventListener("DOMContentLoaded", function() {
    // Находим все ссылки с атрибутом data-category
    const categoryLinks = document.querySelectorAll('a[data-category]');

    categoryLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Отменяем стандартное поведение ссылки
            const category = link.getAttribute("data-category"); // Получаем значение категории из атрибута data-category
            window.location.href = `#${category}`; // Перенаправляем пользователя на соответствующую категорию
        });
    });
});
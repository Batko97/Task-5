document.addEventListener("DOMContentLoaded", function() {
    const categories = ["chicken", "beef", "sushi"];
    const specialsTile = document.getElementById("specials-tile");

    specialsTile.addEventListener("click", function(event) {
        event.preventDefault();
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        window.location.href = `#${randomCategory}`;
    });
});

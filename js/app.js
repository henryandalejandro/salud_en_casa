// Animación para el botón de WhatsApp
document.querySelector('.btn-whatsapp').addEventListener('click', () => {
    alert('Gracias por contactarnos. ¡Te estamos redirigiendo a nuestra linea de Whatsapp!');
});


function toggleDropdown(menuId) {
    const dropdown = document.getElementById(menuId);
    const isVisible = dropdown.style.display === 'block';

    // Cierra cualquier otro dropdown abierto
    document.querySelectorAll('.dropdown').forEach(menu => menu.style.display = 'none');

    // Alterna la visibilidad del menú seleccionado
    dropdown.style.display = isVisible ? 'none' : 'block';
}

function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data);
}
// Cargar el header y el footer
loadHTML('header.html', 'header');
loadHTML('footer.html', 'footer');
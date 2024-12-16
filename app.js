// Animación para el botón de WhatsApp
document.querySelector('.btn-whatsapp').addEventListener('click', () => {
    alert('Gracias por contactarnos, ¡te responderemos pronto!');
});


function toggleDropdown(menuId) {
    const dropdown = document.getElementById(menuId);
    const isVisible = dropdown.style.display === 'block';

    // Cierra cualquier otro dropdown abierto
    document.querySelectorAll('.dropdown').forEach(menu => menu.style.display = 'none');

    // Alterna la visibilidad del menú seleccionado
    dropdown.style.display = isVisible ? 'none' : 'block';
}


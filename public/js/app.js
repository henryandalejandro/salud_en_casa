document.addEventListener('DOMContentLoaded', function () {
    // Función para alternar el dropdown
    function toggleDropdown(id) {
        var dropdown = document.getElementById(id);
        dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    }

    // Cerrar el dropdown cuando se haga clic fuera de él
    window.onclick = function (event) {
        if (!event.target.matches('.nav-button')) {
            var dropdowns = document.getElementsByClassName("dropdown");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.style.display === 'block') {
                    openDropdown.style.display = 'none';
                }
            }
        }
    }

    // Agregar evento de mouseover para abrir el dropdown al pasar el cursor
    var navItems = document.getElementsByClassName('nav-item');
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('mouseover', function () {
            this.getElementsByClassName('dropdown')[0].style.display = 'block';
        });
        navItems[i].addEventListener('mouseout', function () {
            this.getElementsByClassName('dropdown')[0].style.display = 'none';
        });
    }
});

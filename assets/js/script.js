// Función para alternar el Modo Oscuro / Claro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const btn = document.getElementById('darkModeBtn');
    if (body.classList.contains('dark-mode')) {
        btn.innerHTML = '☀️ Modo Claro';
    } else {
        btn.innerHTML = '🌙 Modo Oscuro';
    }
}

// Función para filtrar filas de la tabla en tiempo real
function filterTable() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let rows = document.querySelectorAll('#patientsTable tbody tr');
    
    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        if (text.includes(input)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Función para filtrar pacientes por estado clínico
function filterStatus(status) {
    let rows = document.querySelectorAll('#patientsTable tbody tr');
    
    rows.forEach(row => {
        let rowStatus = row.getAttribute('data-status');
        if (status === 'all' || rowStatus === status) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
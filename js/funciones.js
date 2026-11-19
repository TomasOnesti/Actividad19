//Base de datos basica
const baseDatosNormativas = [
    { id: 1, nro: "Resolución N° 651/26", tipo: "Resolución", anio: "2026", desc: "Aprueba pliegos y autoriza llamado a Licitación Pública para equipamiento técnico en EEST de GBA." },
    { id: 2, nro: "Disposición N° 420/25", tipo: "Disposición", anio: "2025", desc: "Lineamientos curriculares para el ciclo superior de Escuelas Técnicas en Región Metropolitana." },
    { id: 3, nro: "Circular N° 128/26", tipo: "Circular", anio: "2026", desc: "Cronograma oficial para Ferias de Ciencia, Arte y Tecnología (ACTE) en los 135 distritos de la Provincia." },
    { id: 4, nro: "Resolución N° 969/25", tipo: "Resolución", anio: "2025", desc: "Marco regulatorio general para prácticas profesionalizantes en tecnicaturas superiores y secundarias." }
];

//Logica y funcion de filtrado
function filtrarNormativas() {
    const texto = document.getElementById('buscador').value.toLowerCase();
    const tipoSeleccionado = document.getElementById('filtro-tipo').value;
    const anioSeleccionado = document.getElementById('filtro-anio').value;
    const resultadosFiltrados = baseDatosNormativas.filter(item => {
        const coincideTexto = item.nro.toLowerCase().includes(texto) || item.desc.toLowerCase().includes(texto);
        const coincideTipo = (tipoSeleccionado === "todos") || (item.tipo === tipoSeleccionado);
        const coincideAnio = (anioSeleccionado === "todos") || (item.anio === anioSeleccionado);
        return coincideTexto && coincideTipo && coincideAnio;
    });
    renderizarResultados(resultadosFiltrados);
}

//Renderizado
function renderizarResultados(lista) {
    const contenedor = document.getElementById('contenedor-resultados');
    if (lista.length === 0) {
        contenedor.innerHTML = `<div class="card"><p>No se encontraron normativas coincidentes en los registros de la DGCyE.</p></div>`;
        return;
    }
    contenedor.innerHTML = lista.map(item => `
        <div class="card">
            <span class="badge">${item.tipo} - Año ${item.anio}</span>
            <h3 style="margin-top: 10px; color: #38bdf8;">${item.nro}</h3>
            <p>${item.desc}</p>
            <a href="#" class="btn-descarga" onclick="alert('Abriendo documento oficial asociado a ${item.nro}')">📄 Ver Anexo PDF</a>
        </div>
    `).join('');
}



function expandirResoluciones() {

    const contenedor = document.querySelector('.contenedor-listado');
    const boton = document.getElementById('btn-expandir');

    contenedor.classList.toggle('expandido');

    if (contenedor.classList.contains('expandido')) {

        boton.textContent = 'Mostrar menos ↑';

    } else {

        boton.textContent = 'Ver todas las resoluciones ↓';

    }
}




//Iniciar al cargar la pagina
renderizarResultados(baseDatosNormativas);
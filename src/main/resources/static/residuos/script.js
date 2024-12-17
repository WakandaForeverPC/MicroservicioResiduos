// Obtener el botón 'residuos-management-button' que llevará a los gráficos
const botonResiduos = document.getElementById('residuos-management-button');

if (botonResiduos) {
    botonResiduos.addEventListener('click', function() {
        // Realizar la solicitud a la API para obtener los datos de residuos
        fetch("http://localhost:8080/mapa/residuos")
            .then(response => response.json())
            .then(datos => {
                // Seleccionar los elementos de los gráficos
                const ctxVerde = document.getElementById("graficoVerde").getContext("2d");
                const ctxAmarillo = document.getElementById("graficoAmarillo").getContext("2d");
                const ctxAzul = document.getElementById("graficoAzul").getContext("2d");

                // Crear gráfico de barras para el contenedor verde
                new Chart(ctxVerde, {
                    type: "bar",
                    data: {
                        labels: ["Cristal"],
                        datasets: [{
                            label: "Contenedor Verde (Cristal)",
                            data: [datos.verde],
                            backgroundColor: "rgba(0, 128, 0, 0.7)"
                        }]
                    }
                });

                // Crear gráfico de barras para el contenedor amarillo
                new Chart(ctxAmarillo, {
                    type: "bar",
                    data: {
                        labels: ["Envases y Plásticos"],
                        datasets: [{
                            label: "Contenedor Amarillo (Envases y Plásticos)",
                            data: [datos.amarillo],
                            backgroundColor: "rgba(255, 223, 0, 0.7)"
                        }]
                    }
                });

                // Crear gráfico de barras para el contenedor azul
                new Chart(ctxAzul, {
                    type: "bar",
                    data: {
                        labels: ["Cartones"],
                        datasets: [{
                            label: "Contenedor Azul (Cartones)",
                            data: [datos.azul],
                            backgroundColor: "rgba(0, 0, 255, 0.7)"
                        }]
                    }
                });
            })
            .catch(error => console.error("Error al obtener los datos:", error));
    });
} else {
    console.error("El botón con id 'residuos-management-button' no se encuentra en el documento.");
}

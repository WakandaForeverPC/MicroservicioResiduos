// Obtener el botón 'residuos-management-button' que llevará a los gráficos
const botonResiduos = document.getElementById('residuos-management-button');

if (botonResiduos) {
    botonResiduos.addEventListener('click', function() {
        // Datos inventados
        const datos = {
            verde: [30, 70],
            amarillo: [50, 50],
            azul: [20, 80]
        };

        // Realizar la solicitud a la API para obtener los datos de residuos
        fetch("http://localhost:8080/mapa/residuos")
            .then(response => response.json())
            .then(apiDatos => {
                // Seleccionar los elementos de los gráficos
                const ctxVerde = document.getElementById("graficoVerde").getContext("2d");
                const ctxAmarillo = document.getElementById("graficoAmarillo").getContext("2d");
                const ctxAzul = document.getElementById("graficoAzul").getContext("2d");

                // Crear gráfico de pie para el contenedor verde
                new Chart(ctxVerde, {
                    type: "pie",
                    data: {
                        labels: ["Cristal", "Otro"],
                        datasets: [{
                            label: "Contenedor Verde (Cristal)",
                            data: datos.verde,
                            backgroundColor: ["rgba(0, 128, 0, 0.7)", "rgba(0, 255, 0, 0.7)"]
                        }]
                    },
                    options: {
                        plugins: {
                            datalabels: {
                                formatter: (value, context) => {
                                    const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                                    const percentage = (value / total * 100).toFixed(2) + '%';
                                    return percentage;
                                },
                                color: '#fff',
                                font: {
                                    weight: 'bold'
                                }
                            }
                        }
                    }
                });

                // Crear gráfico de pie para el contenedor amarillo
                new Chart(ctxAmarillo, {
                    type: "pie",
                    data: {
                        labels: ["Envases y Plásticos", "Otro"],
                        datasets: [{
                            label: "Contenedor Amarillo (Envases y Plásticos)",
                            data: datos.amarillo,
                            backgroundColor: ["rgba(255, 223, 0, 0.7)", "rgba(255, 255, 0, 0.7)"]
                        }]
                    },
                    options: {
                        plugins: {
                            datalabels: {
                                formatter: (value, context) => {
                                    const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                                    const percentage = (value / total * 100).toFixed(2) + '%';
                                    return percentage;
                                },
                                color: '#fff',
                                font: {
                                    weight: 'bold'
                                }
                            }
                        }
                    }
                });

                // Crear gráfico de pie para el contenedor azul
                new Chart(ctxAzul, {
                    type: "pie",
                    data: {
                        labels: ["Cartones", "Otro"],
                        datasets: [{
                            label: "Contenedor Azul (Cartones)",
                            data: datos.azul,
                            backgroundColor: ["rgba(0, 0, 255, 0.7)", "rgba(0, 0, 128, 0.7)"]
                        }]
                    },
                    options: {
                        plugins: {
                            datalabels: {
                                formatter: (value, context) => {
                                    const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                                    const percentage = (value / total * 100).toFixed(2) + '%';
                                    return percentage;
                                },
                                color: '#fff',
                                font: {
                                    weight: 'bold'
                                }
                            }
                        }
                    }
                });
            })
            .catch(error => console.error("Error al obtener los datos:", error));
    });
} else {
    console.error("El botón con id 'residuos-management-button' no se encuentra en el documento.");
}

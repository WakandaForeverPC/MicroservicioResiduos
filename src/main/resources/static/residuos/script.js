document.addEventListener("DOMContentLoaded", () => {
  
    const actualizarGraficos = () => {
        const datos = {
            verde: [60, 40],
            amarillo: [50, 50],
            azul: [80, 20]
        };

        fetch("http://localhost:8080/mapa/residuos")
            .then(response => response.json())
            .then(apiDatos => {
                const ctxVerde = document.getElementById("graficoVerde").getContext("2d");
                const ctxAmarillo = document.getElementById("graficoAmarillo").getContext("2d");
                const ctxAzul = document.getElementById("graficoAzul").getContext("2d");

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
    };

    actualizarGraficos();

    setInterval(actualizarGraficos, 900000);
});

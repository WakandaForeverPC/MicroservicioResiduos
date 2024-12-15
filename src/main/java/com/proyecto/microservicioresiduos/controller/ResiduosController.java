package com.proyecto.microservicioresiduos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/residuos")
public class ResiduosController {

    @GetMapping
    public String obtenerResiduos() {
        // Lógica para obtener información de residuos
        return "Información de residuos";
    }

    @PostMapping
    public String crearResiduo(@RequestBody String nuevoResiduo) {
        // Lógica para crear nueva información de residuos
        return "Nuevo residuo creado";
    }
}
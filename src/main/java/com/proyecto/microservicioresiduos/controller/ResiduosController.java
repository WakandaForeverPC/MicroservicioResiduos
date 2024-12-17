package com.proyecto.microservicioresiduos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/residuos")
public class ResiduosController {

    @GetMapping
    public ModelAndView mostrarPantallaResiduos() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("residuos/residuos"); // Specify the view name explicitly
        return modelAndView;
    }

    @GetMapping("/data")
    public Map<String, Integer> obtenerDatosResiduos() {
        Map<String, Integer> datosResiduos = new HashMap<>();
        datosResiduos.put("verde", 120); // Cristal
        datosResiduos.put("amarillo", 300); // Envases y plásticos
        datosResiduos.put("azul", 200); // Cartones
        return datosResiduos;
    }
}

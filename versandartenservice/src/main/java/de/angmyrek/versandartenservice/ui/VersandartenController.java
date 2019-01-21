package de.angmyrek.versandartenservice.ui;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VersandartenController {

    @GetMapping("/versandarten")
    public String versandartenAuswahl(){
        return "Standard, Premium, Filialabholung";
    }
}

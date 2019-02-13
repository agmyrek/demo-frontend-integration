package de.angmyrek.zahlungsartenservice.ui;


import de.angmyrek.zahlungsartenservice.business.Zahlungsart;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ZahlungsartenController {

    @CrossOrigin(origins = "http://localhost:8080")
    @GetMapping("/zahlungsarten")
    public ModelAndView getZahlungsarten(){

        ZahlungsartenUiModel model = new ZahlungsartenUiModel();
        model.addZahlungsart(Zahlungsart.VORKASSE.name());
        model.addZahlungsart(Zahlungsart.RECHNUNG.name());
        model.addZahlungsart(Zahlungsart.BANKEINZUG.name());

        ModelAndView mav = new ModelAndView("zahlungsartenauswahl");
        mav.addObject("zahlungsartenmodel", model);
        return mav;
    }
}

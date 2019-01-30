package de.angmyrek.zahlungsartenservice.ui;


import de.angmyrek.zahlungsartenservice.business.Zahlungsart;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ZahlungsartenController {

    @GetMapping("/zahlungsarten")
    public ModelAndView getZahlungsarten(){

        ZahlungsartenUiModel model = new ZahlungsartenUiModel();
        model.addZahlungsart(Zahlungsart.VORKASSE);
        model.addZahlungsart(Zahlungsart.RECHNUNG);
        model.addZahlungsart(Zahlungsart.BANKEINZUG);

        ModelAndView mav = new ModelAndView("zahlungsartenauswahl");
        mav.addObject("zahlungsartenmodel", model);
        mav.addObject("test1", "test1 - wert");
        return mav;
    }
}

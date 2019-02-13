package de.angmyrek.checkoutservice.ui;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class CheckoutController {

    @GetMapping("/checkout")
    public ModelAndView getZahlungsarten(){

        CheckoutModel model = new CheckoutModel();

        ModelAndView mav = new ModelAndView("checkout");
        mav.addObject("checkoutmodel", model);
        return mav;
    }
}

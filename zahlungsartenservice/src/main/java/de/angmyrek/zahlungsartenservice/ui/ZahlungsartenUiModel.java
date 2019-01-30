package de.angmyrek.zahlungsartenservice.ui;

import de.angmyrek.zahlungsartenservice.business.Zahlungsart;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ZahlungsartenUiModel {

    private List<Zahlungsart> zahlungsarten = new ArrayList<>();


    public void addZahlungsart(Zahlungsart zahlungsart){
        this.zahlungsarten.add(zahlungsart);
    }
}

package de.angmyrek.zahlungsartenservice.ui;

import de.angmyrek.zahlungsartenservice.business.Zahlungsart;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class ZahlungsartenUiModel {

    private List<String> zahlungsarten = new ArrayList<>();


    public void addZahlungsart(String zahlungsart){
        this.zahlungsarten.add(zahlungsart);
    }
}

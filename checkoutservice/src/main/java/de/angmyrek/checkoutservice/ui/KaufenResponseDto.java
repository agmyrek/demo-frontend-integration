package de.angmyrek.checkoutservice.ui;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class KaufenResponseDto {

    public String zahlungsart;
    public String artikelpreis;
}

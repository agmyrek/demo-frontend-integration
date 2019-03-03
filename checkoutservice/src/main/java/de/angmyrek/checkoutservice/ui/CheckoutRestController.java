package de.angmyrek.checkoutservice.ui;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class CheckoutRestController {

    @PostMapping("/kaufen")
    public ResponseEntity<KaufenResponseDto> kaufen(@RequestBody KaufenRequestDto dto){

        //TODO: Validierung des dtos

        KaufenResponseDto responseDto = KaufenResponseDto.builder()
                .zahlungsart(dto.getZahlungsart())
                .build();

        return ResponseEntity.ok(responseDto);
    }
}

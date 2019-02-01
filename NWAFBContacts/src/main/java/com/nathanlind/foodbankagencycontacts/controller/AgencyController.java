package com.nathanlind.foodbankagencycontacts.controller;

import com.nathanlind.foodbankagencycontacts.model.Agency;
import com.nathanlind.foodbankagencycontacts.service.AgencyService;
import com.nathanlind.foodbankagencycontacts.service.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@CrossOrigin
@RequestMapping("/api/agency")
public class AgencyController {

    @Autowired
    private AgencyService agencyService;

    @Autowired
    private ValidationErrorService validationErrorService;


    @GetMapping("/all")
    public Iterable<Agency> getAllAgencies() {
        return agencyService.findAllAgencies();
    }

    @GetMapping("/{agencyAccountNumber}")
    public ResponseEntity<?> getAgencyByAccountNumber(@PathVariable String agencyAccountNumber) {

        Agency agency = agencyService.findAgencyByAccountNumber(agencyAccountNumber);

        return new ResponseEntity<Agency>(agency, HttpStatus.OK);
    }


    @PostMapping("")
    public ResponseEntity<?> createNewAgency(@Valid @RequestBody Agency agency, BindingResult result, Principal principal) {

        ResponseEntity<?> errorMap = validationErrorService.MapValidationService(result);

        if (errorMap != null) {
            return errorMap;
        }

        Agency newAgency = agencyService.createOrUpdateAgency(agency, principal.getName());
        return new ResponseEntity<Agency>(newAgency, HttpStatus.CREATED);

    }


    @DeleteMapping("/{agencyAccountNumber}")
    public ResponseEntity<?> deleteAgency(@PathVariable String agencyAccountNumber) {
        agencyService.deleteAgencyByAccountNumber(agencyAccountNumber);

        return new ResponseEntity<String>("Agency with account number '"
                + agencyAccountNumber + "', was deleted.", HttpStatus.OK);
    }
}

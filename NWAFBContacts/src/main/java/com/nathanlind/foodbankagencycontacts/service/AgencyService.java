package com.nathanlind.foodbankagencycontacts.service;

import com.nathanlind.foodbankagencycontacts.exception.AgencyAccountNumberException;
import com.nathanlind.foodbankagencycontacts.model.Agency;
import com.nathanlind.foodbankagencycontacts.repository.AgencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgencyService {

    @Autowired
    private AgencyRepository agencyRepository;


    public Agency createOrUpdateAgency(Agency agency) {
        try {
            agency.setAgencyAccountNumber(agency.getAgencyAccountNumber());
            return agencyRepository.save(agency);
        } catch (Exception e) {
            throw new AgencyAccountNumberException("Agency Account Number '"
                    + agency.getAgencyAccountNumber() + "' already exists.");
        }
    }

    public Agency findAgencyByAccountNumber(String agencyAccountNumber) {

        Agency agency = agencyRepository.findByAgencyAccountNumber(agencyAccountNumber);

        if (agency == null) {
            throw new AgencyAccountNumberException("Agency Account Number '"
                    + agencyAccountNumber + "' does not exist.");
        }

        return agency;
    }

    public Iterable<Agency> findAllAgencies() {
        return agencyRepository.findAll();
    }

    public void deleteAgencyByAccountNumber(String agencyAccountNumber) {
        Agency agency = agencyRepository.findByAgencyAccountNumber(agencyAccountNumber);

        if (agency == null) {
            throw new AgencyAccountNumberException("Cannot delete Agency, account number '"
                    + agencyAccountNumber + "' does not exist.");
        }

        agencyRepository.delete(agency);
    }
}

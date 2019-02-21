package com.nathanlind.foodbankagencycontacts.service;

import com.nathanlind.foodbankagencycontacts.exception.AgencyAccountNumberException;
import com.nathanlind.foodbankagencycontacts.exception.AgencyNameException;
import com.nathanlind.foodbankagencycontacts.model.Agency;
import com.nathanlind.foodbankagencycontacts.model.User;
import com.nathanlind.foodbankagencycontacts.repository.AgencyRepository;
import com.nathanlind.foodbankagencycontacts.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgencyService {

    @Autowired
    private AgencyRepository agencyRepository;

    @Autowired
    private UserRepository userRepository;


    public Agency createOrUpdateAgency(Agency agency, String username) {
        try {

            User user = userRepository.findByUsername(username);

            agency.setUser(user);

            agency.setAgencyAccountNumber(agency.getAgencyAccountNumber());
            agency.setAgencyName(agency.getAgencyName());
            return agencyRepository.save(agency);
        } catch (Exception e) {
            if (e.getMessage().contains("agency_name_UNIQUE")) {
                throw new AgencyNameException("Agency Name '"
                    + agency.getAgencyName() + "' already exists.");
            } else {
                throw new AgencyAccountNumberException("Agency Account Number '"
                        + agency.getAgencyAccountNumber() + "' already exists.");
            }
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


    public Agency findAgencyByAgencyName(String agencyName) {
        Agency agency = agencyRepository.findByAgencyName(agencyName);
        if (agency == null) {
            throw new AgencyNameException("Agency Name '"
                + agencyName + "' does not exist.");
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

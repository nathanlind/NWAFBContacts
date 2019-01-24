package com.nathanlind.foodbankagencycontacts.repository;

import com.nathanlind.foodbankagencycontacts.model.Agency;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgencyRepository extends CrudRepository<Agency, Long> {

    Agency findByAgencyAccountNumber(String agencyAccountNumber);

    @Override
    Iterable<Agency> findAll();
}

package com.nathanlind.foodbankagencycontacts.repository;

import com.nathanlind.foodbankagencycontacts.model.Agency;
import com.nathanlind.foodbankagencycontacts.model.Note;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long> {

    List<Note> findByAgencyOrderByModificationDateDesc(Agency agency);

}

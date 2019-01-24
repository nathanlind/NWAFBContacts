package com.nathanlind.foodbankagencycontacts.repository;

import com.nathanlind.foodbankagencycontacts.model.Note;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long> {

    @Override
    Iterable<Note> findAll();
}

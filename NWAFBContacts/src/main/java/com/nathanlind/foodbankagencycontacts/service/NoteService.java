package com.nathanlind.foodbankagencycontacts.service;

import com.nathanlind.foodbankagencycontacts.model.Agency;
import com.nathanlind.foodbankagencycontacts.model.Note;
import com.nathanlind.foodbankagencycontacts.repository.AgencyRepository;
import com.nathanlind.foodbankagencycontacts.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private AgencyRepository agencyRepository;


    public Note createOrUpdateNote(String agencyAccountNumber, Note note) {
        Agency agency = agencyRepository.findByAgencyAccountNumber(agencyAccountNumber);
        note.setAgency(agency);
        return noteRepository.save(note);
    }


    public Optional<Note> findById(Long noteId) {
        return noteRepository.findById(noteId);
    }


    public Iterable<Note> findAllNotes() {
        return noteRepository.findAll();
    }


    public Iterable<Note> findNotesByAgency(Agency agency) {
        return noteRepository.findByAgencyOrderByModificationDateDesc(agency);
    }


    public void deleteNoteById(Long noteId) {
        noteRepository.deleteById(noteId);
    }
}

package com.nathanlind.foodbankagencycontacts.controller;


import com.nathanlind.foodbankagencycontacts.model.Agency;
import com.nathanlind.foodbankagencycontacts.model.Note;
import com.nathanlind.foodbankagencycontacts.service.AgencyService;
import com.nathanlind.foodbankagencycontacts.service.NoteService;
import com.nathanlind.foodbankagencycontacts.service.ValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/agency")
@CrossOrigin
public class NoteController {

    @Autowired
    private NoteService noteService;

    @Autowired
    private AgencyService agencyService;

    @Autowired
    private ValidationErrorService validationErrorService;


    @GetMapping("/{agencyAccountNumber}/note/all")
    public Iterable<Note> getNotes(@PathVariable String agencyAccountNumber) {
        Agency agency = agencyService.findAgencyByAccountNumber(agencyAccountNumber);
        return noteService.findNotesByAgency(agency);
    }

    @GetMapping("/{agencyAccountNumber}/note/{noteId}")
    public ResponseEntity<?> getNoteById(@PathVariable Long noteId) {
        Note note = noteService.findById(noteId).orElse(null);

        return new ResponseEntity<Note>(note, HttpStatus.OK);
    }

    @PostMapping("/{agencyAccountNumber}/note")
    public ResponseEntity<?> createNewNote(@Valid @RequestBody Note note,
                                           BindingResult result, @PathVariable String agencyAccountNumber) {

        ResponseEntity<?> errorMap = validationErrorService.MapValidationService(result);

        if (errorMap != null) {
            return errorMap;
        }

        Note newNote = noteService.createOrUpdateNote(agencyAccountNumber, note);
        return new ResponseEntity<Note>(newNote, HttpStatus.CREATED);
    }

    @DeleteMapping("/{agencyAccountNumber}/note/{noteId}")
    public ResponseEntity<?> deleteNote(@PathVariable Long noteId) {
        noteService.deleteNoteById(noteId);

        return new ResponseEntity<String>("Note was deleted.", HttpStatus.OK);
    }

}

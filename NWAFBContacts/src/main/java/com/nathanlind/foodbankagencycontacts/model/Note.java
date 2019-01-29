package com.nathanlind.foodbankagencycontacts.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Note subject is required.")
    private String noteSubject;

    @Lob
    @Column(name="note_body", length=16777215)
    @NotBlank(message = "Note text is required.")
    private String noteBody;

    @JsonFormat(pattern = "MM-dd-yyyy @ hh:mm a")
    private LocalDateTime modificationDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="agency_id", updatable = false, nullable = false)
    @JsonIgnore
    private Agency agency;


    public Note() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNoteSubject() {
        return noteSubject;
    }

    public void setNoteSubject(String noteSubject) {
        this.noteSubject = noteSubject;
    }

    public String getNoteBody() {
        return noteBody;
    }

    public void setNoteBody(String noteBody) {
        this.noteBody = noteBody;
    }

    public LocalDateTime getModificationDate() {
        return modificationDate;
    }

    public Agency getAgency() {
        return agency;
    }

    public void setAgency(Agency agency) {
        this.agency = agency;
    }


    @PrePersist
    protected void onCreate() {
        this.modificationDate = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.modificationDate = LocalDateTime.now();
    }

    @Override
    public String toString() {
        return "Note{" +
                "id=" + id +
                ", noteSubject='" + noteSubject + '\'' +
                ", noteBody='" + noteBody + '\'' +
                ", modificationDate=" + modificationDate +
                ", agency=" + agency +
                '}';
    }
}

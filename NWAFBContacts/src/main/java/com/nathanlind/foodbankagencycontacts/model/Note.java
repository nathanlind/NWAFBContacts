package com.nathanlind.foodbankagencycontacts.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String agencyAccountNumber;

    @NotBlank(message = "Note subject is required.")
    private String noteSubject;

    @NotBlank(message = "Note text is required.")
    private String noteContents;

    @JsonFormat(pattern = "yyyy-MM-dd@HH:mm")
    @Column(updatable = false)
    private Date creationDate;
    @JsonFormat(pattern = "yyyy-MM-dd@HH:mm")
    private Date modificationDate;

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

    public String getNoteContents() {
        return noteContents;
    }

    public void setNoteContents(String noteContents) {
        this.noteContents = noteContents;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public Date getModificationDate() {
        return modificationDate;
    }

    public void setModificationDate(Date modificationDate) {
        this.modificationDate = modificationDate;
    }

    public Agency getAgency() {
        return agency;
    }

    public void setAgency(Agency agency) {
        this.agency = agency;
    }


    @PrePersist
    protected void onCreate() {
        this.creationDate = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.modificationDate = new Date();
    }

    @Override
    public String toString() {
        return "Note{" +
                "id=" + id +
                ", noteSubject='" + noteSubject + '\'' +
                ", noteContents='" + noteContents + '\'' +
                ", creationDate=" + creationDate +
                ", modificationDate=" + modificationDate +
                ", agency=" + agency +
                '}';
    }
}

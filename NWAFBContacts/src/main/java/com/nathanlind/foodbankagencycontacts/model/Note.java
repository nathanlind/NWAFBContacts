package com.nathanlind.foodbankagencycontacts.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String noteContents;

    @JsonFormat(pattern = "yyyy-mm-dd")
    @Column(updatable = false)
    private Date creationDate;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date modificationDate;

    @ManyToOne
    private Agency agency;
}

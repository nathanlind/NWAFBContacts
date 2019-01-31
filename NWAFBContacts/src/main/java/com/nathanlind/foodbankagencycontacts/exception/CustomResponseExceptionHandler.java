package com.nathanlind.foodbankagencycontacts.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
@RestController
public class CustomResponseExceptionHandler {

    @ExceptionHandler
    public final ResponseEntity<Object> handleAgencyAccountNumberException(AgencyAccountNumberException ex, WebRequest request) {
        AgencyAccountNumberExceptionResponse agencyAccountNumberExceptionResponse
                = new AgencyAccountNumberExceptionResponse(ex.getMessage());
        return new ResponseEntity(agencyAccountNumberExceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public final ResponseEntity<Object> handleAgencyAccountNameException(AgencyNameException ex, WebRequest request) {
        AgencyNameExceptionResponse agencyNameExceptionResponse
                = new AgencyNameExceptionResponse(ex.getMessage());
        return new ResponseEntity(agencyNameExceptionResponse, HttpStatus.BAD_REQUEST);
    }
}

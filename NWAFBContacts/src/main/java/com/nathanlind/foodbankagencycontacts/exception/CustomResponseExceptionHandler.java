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
    public final ResponseEntity<Object> handleAgencyException(AgencyAccountNumberException ex, WebRequest request) {
        AgencyAccountNumberExceptionResponse exceptionResponse = new AgencyAccountNumberExceptionResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}

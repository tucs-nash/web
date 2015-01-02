package com.tucs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tucs.business.services.interfaces.AuthenticationService;
import com.tucs.core.model.entity.EnUser;

@Controller
public class AuthenticationController {

	@Autowired 
	private AuthenticationService authenticationService;
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
    public String authenticateUser() {
        return "angular-template";
    }

	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public String register() {
		return "angular-template";
	}
	
	@RequestMapping(value = "/register/{email}/check-email", method = RequestMethod.GET)
	public ResponseEntity<Boolean> checkEmail(@PathVariable String email) {
		Boolean response = authenticationService.verifyEmail(email);
		return new ResponseEntity<Boolean>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/register/{email}/forgot-password", method = RequestMethod.GET)
	public ResponseEntity<Boolean> forgotPassword(@PathVariable String email) {
		Boolean response = authenticationService.forgotPassword(email);
		return new ResponseEntity<Boolean>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<EnUser> register(@RequestBody EnUser user) {
		EnUser response = authenticationService.createUser(user);
		return new ResponseEntity<EnUser>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
}

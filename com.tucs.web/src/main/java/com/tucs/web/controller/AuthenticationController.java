package com.tucs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tucs.business.services.interfaces.security.AuthenticationService;
import com.tucs.core.commons.dto.ControlLookupsDto;
import com.tucs.core.commons.dto.UserLookupsDto;
import com.tucs.core.model.entity.EnUser;

@Controller
public class AuthenticationController extends BaseController<AuthenticationService>{

	@Autowired 
	public AuthenticationController(AuthenticationService service) {
		super(service);
	}
	
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
		Boolean response = getService().verifyEmail(email);
		return new ResponseEntity<Boolean>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/register/{email}/forgot-password", method = RequestMethod.GET)
	public ResponseEntity<Boolean> forgotPassword(@PathVariable String email) {
		Boolean response = getService().forgotPassword(email);
		return new ResponseEntity<Boolean>(response, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<EnUser> register(@RequestBody EnUser user) {
		EnUser response = getService().createUser(user);
		return new ResponseEntity<EnUser>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@Secured("IS_AUTHENTICATED_FULLY")
	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public String defaultGetAngular(ModelMap model) {
		return "angular-template";
	}

	@RequestMapping(value = "/user/user-details", method = RequestMethod.GET)
	public ResponseEntity<EnUser> getUserDetails() {
		EnUser user = getService().getUser(getUserId());
		return new ResponseEntity<EnUser>(user, user != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}

	@RequestMapping(value = "/user/update", method = RequestMethod.POST)
	public ResponseEntity<EnUser> updateUserDetails(@RequestBody EnUser user) {
		EnUser response = getService().updateUser(user);
		return new ResponseEntity<EnUser>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/user/lookups", method = RequestMethod.GET)
	public ResponseEntity<UserLookupsDto> getUserLookups() {
		UserLookupsDto response = getService().getUserLookups();
		return new ResponseEntity<UserLookupsDto>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
}

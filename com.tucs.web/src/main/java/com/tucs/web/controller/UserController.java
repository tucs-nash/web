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

import com.tucs.business.services.interfaces.UserService;
import com.tucs.core.model.entity.EnUser;

@Controller
@RequestMapping("/user")
@Secured("IS_AUTHENTICATED_FULLY")
public class UserController extends BaseController<UserService>{

	@Autowired
	public UserController(UserService service) {
		super(service);
	}
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public String defaultGetAngular(ModelMap model) {
		return "angular-template";
	}

	@RequestMapping(value = "/user-details", method = RequestMethod.GET)
	public ResponseEntity<EnUser> getUserDetails(@PathVariable String userId) {
		EnUser user = getService().getUser(userId);
		return new ResponseEntity<EnUser>(user, user != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public ResponseEntity<EnUser> updateUserDetails(@RequestBody EnUser user) {
		EnUser response = getService().updateUser(user);
		return new ResponseEntity<EnUser>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
}

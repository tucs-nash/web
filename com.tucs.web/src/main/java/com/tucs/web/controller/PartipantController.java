package com.tucs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tucs.business.services.interfaces.ParticipantService;

@Controller
@RequestMapping("/participant")
@Secured("IS_AUTHENTICATED_FULLY")
public class PartipantController extends BaseController<ParticipantService> {

	@Autowired
	public PartipantController(ParticipantService service) {
		super(service);
	}

	@RequestMapping(value = "/{controlId}/add", method = RequestMethod.GET)
	public String defaultControlEdit() {
		return "angular-template";
	}
	
	@RequestMapping(value = "/{participantId}/update", method = RequestMethod.GET)
	public String defaultCategoryDetails() {
		return "angular-template";
	}

}

package com.tucs.web.controller;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tucs.business.services.interfaces.ControlService;
import com.tucs.core.commons.dto.ControlDetailsDto;
import com.tucs.core.commons.dto.ControlLookupsDto;
import com.tucs.core.model.entity.EnControl;
import com.tucs.core.model.entity.EnUser;

@Controller
@RequestMapping("/control")
@Secured("IS_AUTHENTICATED_FULLY")
public class ControlController extends BaseController<ControlService> {

	@Autowired
	public ControlController(ControlService service) {
		super(service);
	}
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public String defaultControl() {
		return "angular-template";
	}
		
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String defaultControlEdit() {
		return "angular-template";
	}
	
	@RequestMapping(value = "/details", method = RequestMethod.GET)
	public String defaultControlDetails() {
		return "angular-template";
	}
	
	@RequestMapping(value = "/lookups", method = RequestMethod.GET)
	public ResponseEntity<ControlLookupsDto> getControlLookups() {
		ControlLookupsDto response = getService().getControlLookups();
		return new ResponseEntity<ControlLookupsDto>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/details/{controlId}", method = RequestMethod.GET)
	public ResponseEntity<ControlDetailsDto> getControlDetails(@PathVariable String controlId) {
		ControlDetailsDto response = getService().getControlDetails(controlId);
		return new ResponseEntity<ControlDetailsDto>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/edit/{controlId}", method = RequestMethod.GET)
	public ResponseEntity<EnControl> getControl(@PathVariable String controlId) {
		EnControl response = getService().getControl(controlId);
		return new ResponseEntity<EnControl>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	@Transactional
	public ResponseEntity<EnControl> createControl(@RequestBody EnControl enControl) {
		EnControl response = getService().createControl(enControl, new EnUser(getUserId()));
		return new ResponseEntity<EnControl>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public ResponseEntity<EnControl> updateControl(@RequestBody EnControl enControl) {
		EnControl response = getService().updateControl(enControl, new EnUser(getUserId()));
		return new ResponseEntity<EnControl>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
}

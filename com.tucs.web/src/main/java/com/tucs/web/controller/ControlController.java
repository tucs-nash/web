package com.tucs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tucs.business.services.interfaces.ControlService;
import com.tucs.core.commons.dto.ControlLookupsDto;
import com.tucs.core.model.entity.EnControl;

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
	
	@RequestMapping(value = "/lookups", method = RequestMethod.GET)
	public ResponseEntity<ControlLookupsDto> getControlLookups() {
		ControlLookupsDto response = getService().getControlLookups();
		return new ResponseEntity<ControlLookupsDto>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "{controlId}", method = RequestMethod.GET)
	public ResponseEntity<EnControl> getControl(@PathVariable String controlId) {
		EnControl response = null;
		return new ResponseEntity<EnControl>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
}

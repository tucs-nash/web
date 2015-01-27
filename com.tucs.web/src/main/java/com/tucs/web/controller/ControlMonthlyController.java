package com.tucs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tucs.business.services.interfaces.ControlMonthlyService;
import com.tucs.core.commons.dto.AbstractMonthlyScreenDto;

@Controller
@RequestMapping("/monthly")
public class ControlMonthlyController extends BaseController<ControlMonthlyService> {

	@Autowired
	public ControlMonthlyController(ControlMonthlyService service) {
		super(service);
	}
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public String defaultIndex() {
		return "angular-template";
	}

	@RequestMapping(value = "/initial/{controlId}", method = RequestMethod.GET)
	public ResponseEntity<AbstractMonthlyScreenDto> getControlDetails(@PathVariable String controlId) {
		AbstractMonthlyScreenDto response = getService().getMonthlyInitial(controlId);
		return new ResponseEntity<AbstractMonthlyScreenDto>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}

}

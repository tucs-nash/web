package com.tucs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tucs.business.services.interfaces.ControlMonthlyService;

@Controller
@RequestMapping("/monthly")
public class ControlMonthlyController extends BaseController<ControlMonthlyService> {

	@Autowired
	public ControlMonthlyController(ControlMonthlyService service) {
		super(service);
	}
	
	@RequestMapping(value = "/{controlId}", method = RequestMethod.GET)
	public String defaultIndex() {
		return "angular-template";
	}
	
}

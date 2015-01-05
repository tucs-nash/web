package com.tucs.web.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@Secured("IS_AUTHENTICATED_FULLY")
public class IndexController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String defaultRoot() {
        return "angular-template";
    }
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String defaultIndex() {
		return "angular-template";
	}
}

package com.tucs.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tucs.business.services.interfaces.IndexService;
import com.tucs.core.model.entity.EnControl;

@Controller
@Secured("IS_AUTHENTICATED_FULLY")
public class IndexController extends BaseController<IndexService>{

	@Autowired
	public IndexController(IndexService service) {
		super(service);
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String defaultRoot() {
        return "angular-template";
    }
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String defaultIndex() {
		return "angular-template";
	}
	
	@RequestMapping(value = "/index/verify", method = RequestMethod.GET)
	public ResponseEntity<List<EnControl	>> verifyControlMonthly() {
		List<EnControl> response = getService().verifyInitialControl(getUserId());
		return new ResponseEntity<List<EnControl>>(response, HttpStatus.OK);
	}
}

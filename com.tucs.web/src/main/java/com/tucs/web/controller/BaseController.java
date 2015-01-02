package com.tucs.web.controller;

import org.springframework.stereotype.Controller;

import com.tucs.business.services.interfaces.BaseService;
import com.tucs.core.commons.log.ILogger;
import com.tucs.core.commons.log.LogManager;

@Controller
public abstract class BaseController<B extends BaseService> {

	protected static ILogger LOGGER = LogManager.getStaticLogger(BaseController.class);
	
	private final B business;
	
	public BaseController(B business) {
		this.business = business;
	}

	public B getBusiness() {
		return business;
	}
}


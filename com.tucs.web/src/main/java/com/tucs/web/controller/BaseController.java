package com.tucs.web.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;

import com.tucs.business.services.interfaces.BaseService;
import com.tucs.core.commons.log.ILogger;
import com.tucs.core.commons.log.LogManager;
import com.tucs.core.model.entity.EnUser;

@Controller
public abstract class BaseController<B extends BaseService> {

	protected static ILogger LOGGER = LogManager.getStaticLogger(BaseController.class);
	
	private final B service;
	
	public BaseController(B service) {
		this.service = service;
	}

	public B getService() {
		return service;
	}
	
	public String getUserId() {
		EnUser user = (EnUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return user.getId();
	}
}


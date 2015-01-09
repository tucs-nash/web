package com.tucs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.tucs.business.services.interfaces.GroupService;

@Controller
@RequestMapping("/group")
@Secured("IS_AUTHENTICATED_FULLY")
public class GroupController extends BaseController<GroupService> {

	@Autowired
	public GroupController(GroupService service) {
		super(service);
	}
		
}

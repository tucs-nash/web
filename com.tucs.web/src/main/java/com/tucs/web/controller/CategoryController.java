package com.tucs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tucs.business.services.interfaces.CategoryService;

@Controller
@RequestMapping("/category")
@Secured("IS_AUTHENTICATED_FULLY")
public class CategoryController extends BaseController<CategoryService> {

	@Autowired
	public CategoryController(CategoryService service) {
		super(service);
	}

	@RequestMapping(value = "/{controlId}/add", method = RequestMethod.GET)
	public String defaultCategoryAdd() {
		return "angular-template";
	}
	
	@RequestMapping(value = "/{categoryId}/update", method = RequestMethod.GET)
	public String defaultCategoryUpdate() {
		return "angular-template";
	}

}

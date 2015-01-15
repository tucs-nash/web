package com.tucs.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.tucs.business.services.interfaces.CategoryService;
import com.tucs.core.commons.dto.CategoryLookupsDto;
import com.tucs.core.model.entity.EnCategory;
import com.tucs.core.model.entity.EnUser;

@Controller
@RequestMapping("/category")
@Secured("IS_AUTHENTICATED_FULLY")
public class CategoryController extends BaseController<CategoryService> {

	@Autowired
	public CategoryController(CategoryService service) {
		super(service);
	}
	
	@RequestMapping(value = "/lookup/{controlId}/{categoryId}", method = RequestMethod.GET)
	public ResponseEntity<CategoryLookupsDto> getCategoryLookup(@PathVariable String controlId, @PathVariable String categoryId) {
		CategoryLookupsDto response= getService().getCategoryLookup(controlId, categoryId);
		return new ResponseEntity<CategoryLookupsDto>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/{categoryId}", method = RequestMethod.GET)
	public ResponseEntity<EnCategory> getCategory(@PathVariable String categoryId) {
		EnCategory response= getService().getCategory(categoryId);
		return new ResponseEntity<EnCategory>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public ResponseEntity<EnCategory> createCategory(@RequestBody EnCategory enCategory) {
		EnCategory response= getService().createCategory(enCategory, new EnUser(getUserId()));
		return new ResponseEntity<EnCategory>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public ResponseEntity<EnCategory> updateCategory(@RequestBody EnCategory enCategory) {
		EnCategory response= getService().updateCategory(enCategory, new EnUser(getUserId()));
		return new ResponseEntity<EnCategory>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}

}

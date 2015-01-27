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

import com.tucs.business.services.interfaces.GroupService;
import com.tucs.core.commons.dto.GroupParticipantLookupsDto;
import com.tucs.core.model.entity.EnGroup;
import com.tucs.core.model.entity.EnParticipant;
import com.tucs.core.model.entity.EnUser;

@Controller
@RequestMapping("/group")
@Secured("IS_AUTHENTICATED_FULLY")
public class GroupParticipantController extends BaseController<GroupService> {

	@Autowired
	public GroupParticipantController(GroupService service) {
		super(service);
	}

	@RequestMapping(value = "/participant/lookups/{controlId}", method = RequestMethod.GET)
	public ResponseEntity<GroupParticipantLookupsDto> getParticipantGroupLookup(@PathVariable String controlId) {
		GroupParticipantLookupsDto response= getService().getParticipantGroupLookup(controlId);
		return new ResponseEntity<GroupParticipantLookupsDto>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/participant/{participantId}", method = RequestMethod.GET)
	public ResponseEntity<EnParticipant> getParticipant(@PathVariable String participantId) {
		EnParticipant response= getService().getParticipant(participantId);
		return new ResponseEntity<EnParticipant>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/participant/{email}/create", method = RequestMethod.POST)
	public ResponseEntity<EnParticipant> createParticipant(@RequestBody EnParticipant enParticipant, @PathVariable String email) {
		EnParticipant response= getService().createParticipant(enParticipant, email, new EnUser(getUserId()));
		return new ResponseEntity<EnParticipant>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/participant/update", method = RequestMethod.POST)
	public ResponseEntity<EnParticipant> updateParticipant(@RequestBody EnParticipant enParticipant) {
		EnParticipant response= getService().updateParticipant(enParticipant, new EnUser(getUserId()));
		return new ResponseEntity<EnParticipant>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/{groupId}", method = RequestMethod.GET)
	public ResponseEntity<EnGroup> getGroup(@PathVariable String groupId) {
		EnGroup response= getService().getGroupWithParticipant(groupId);
		return new ResponseEntity<EnGroup>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/add-participant", method = RequestMethod.POST)
	public ResponseEntity<EnParticipant> addParticipant(@RequestBody EnParticipant enParticipant) {
		EnParticipant response = getService().createParticipantForGroup(enParticipant);
		return new ResponseEntity<EnParticipant>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public ResponseEntity<EnGroup> createGroup(@RequestBody EnGroup enGroup) {
		EnGroup response= getService().createGroup(enGroup, new EnUser(getUserId()));
		return new ResponseEntity<EnGroup>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public ResponseEntity<EnGroup> updateGroup(@RequestBody EnGroup enGroup) {
		EnGroup response= getService().updateGroup(enGroup, new EnUser(getUserId()));
		return new ResponseEntity<EnGroup>(response, response != null ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
	}

}

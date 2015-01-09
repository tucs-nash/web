package com.tucs.web.core;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.util.ISO8601DateFormat;
import com.fasterxml.jackson.datatype.hibernate4.Hibernate4Module;
import com.fasterxml.jackson.datatype.joda.JodaModule;

/**
 * Created by farrells on 22/08/2014.
 */
public class JsonObjectMapper extends ObjectMapper {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public JsonObjectMapper() {
        super();
        Hibernate4Module hm = new Hibernate4Module();
        registerModule(hm);
        
        JodaModule jm = new JodaModule();
        registerModule(jm);

        configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, false);
        setDateFormat(new ISO8601DateFormat());

    }
}

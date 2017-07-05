/*
 * Copyright (C) 2017, Liberty Mutual Group
 *
 * Created on Jul 4, 2017
 */

package org.spring.boot.fsdk.rest.controller;

import java.util.Collection;

import org.spring.boot.fsdk.rest.beans.Student;
import org.spring.boot.fsdk.rest.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/students")
public class StudentController {
	@Autowired
	private StudentService studentService;

	
	@RequestMapping(value = "/getAllStudents", method=RequestMethod.GET)
		//@RequestMapping(method=RequestMethod.GET)
		public Collection<Student> getAllStudents() {
			return studentService.getAllStudents();
		}
	
	@RequestMapping(value="/getStudent/{id}", method=RequestMethod.GET)
    public Student getStudent(@PathVariable("id") Integer id) {
   	 return studentService.getStudent(id);
    }
	
	 @RequestMapping(value="/removeStudent/{id}", method=RequestMethod.DELETE)
     public void removeStudent(@PathVariable("id") Integer id) {
    	     			 studentService.removeStudent(id);
     }
	 
	 @RequestMapping(value="/updateStudent", method=RequestMethod.PUT, consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
     public void updateStudent(@RequestBody Student st) {
    	     			 studentService.updateStudent(st);
     }
     
     @RequestMapping(value="/insertStudent", method=RequestMethod.POST, consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
     public void insertStudent(@RequestBody Student st) {
    	     			 studentService.insertStudent(st);
     }
      
	
}

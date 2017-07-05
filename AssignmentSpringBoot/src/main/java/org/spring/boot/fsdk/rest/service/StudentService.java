/*
 * Copyright (C) 2017, Liberty Mutual Group
 *
 * Created on Jul 4, 2017
 */

package org.spring.boot.fsdk.rest.service;

import java.util.Collection;

import org.spring.boot.fsdk.rest.beans.Student;
import org.spring.boot.fsdk.rest.dao.StudentDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author N0216777
 *
 */

@Service
public class StudentService {

	@Autowired
	private StudentDAO studentdao;

	public Collection<Student> getAllStudents() {
		return studentdao.getAllStudents();
	}
	
	public Student getStudent(Integer id) {
		return studentdao.getStudent(id);
	}
	
	public void removeStudent(Integer id) {
		 studentdao.removeStudent(id);
	}
	
	public void updateStudent(Student st) {
		 studentdao.updateStudent(st);
	}
	
	public void insertStudent(Student st) {
		 studentdao.insertStudent(st);
	}

}

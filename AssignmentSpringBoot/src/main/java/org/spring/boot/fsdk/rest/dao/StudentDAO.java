/*
 * Copyright (C) 2017, Liberty Mutual Group
 *
 * Created on Jul 4, 2017
 */

package org.spring.boot.fsdk.rest.dao;

/**
 * @author N0216777
 *
 */
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.spring.boot.fsdk.rest.beans.Student;
import org.springframework.stereotype.Component;



@Component
public class StudentDAO {
	
	private static Map<Integer, Student> students;

	static {
		students = new HashMap<Integer, Student>() {
			{
				put(1, new Student(1, "venkat", "Java"));
				put(2, new Student(2, "venkat", "Java"));
				put(3, new Student(3, "venkat", "Java"));
			}
		};
	}

	public Collection<Student> getAllStudents() {

		return students.values();
	}

	public void addStudents(Integer id, String name, String course) {

		students.put(id, new Student(id, name, course));
	}

	public Student getStudent(Integer id) {
		return students.get(id);
	}

	public void removeStudent(Integer id) {
		students.remove(id);
	}

	public void updateStudent(Student id) {

		Student oldSt = students.get(id.getId());
		oldSt.setCourse(id.getCourse());
		oldSt.setName(id.getName());
	}

	public void insertStudent(Student id) {

		students.put(id.getId(), new Student(id.getId(), id.getName(), id.getCourse()));
	}

	
}

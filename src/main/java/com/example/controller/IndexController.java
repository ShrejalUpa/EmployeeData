package com.example.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import com.example.model.Employee;

@RestController
@RequestMapping("/api")

public class IndexController {
	
	@GetMapping("index")
	public ModelAndView homePage() {
		return new ModelAndView("index");
	}
	
	@PostMapping("/form")
	public Employee handleFormData(@RequestBody Employee employee) {
		System.out.println("Received Data :" + employee);
		return employee;
	}
}
	

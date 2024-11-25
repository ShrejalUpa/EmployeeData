package com.example.demo;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

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
	

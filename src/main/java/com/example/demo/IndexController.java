package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class IndexController {
	
	@GetMapping("/")
	public String index() {
	return "index()";
	}
	
	
	@PostMapping("/form")
	public String EmployeeDataProject(@ModelAttribute Employee empname) {
		System.out.println(empname.toString());
		return "index()";
	}
}

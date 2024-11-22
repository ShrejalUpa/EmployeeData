package com.example.demo;

public class Employee {
	private String username;
	private String gender;
	private String address;
	private String remarks;
	
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	@Override
	public String toString() {
		return "Employee [username=" + username + ", gender=" + gender + ", address=" + address + ", remarks=" + remarks
				+ "]";
	}
	
	
	
	
}

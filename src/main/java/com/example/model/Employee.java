package com.example.model;

public class Employee {
	
	private String userName;
	
	private String gender;
	
	private String state;
	
	private String city;
	
	private String railwayStation;
	
	private String remarks;
	

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getRailwayStation() {
		return railwayStation;
	}
	public void setRailwayStation(String railwaystation) {
		this.railwayStation = railwaystation;
	}
	@Override
	public String toString() {
		return "Employee [userName=" + userName + ", gender=" + gender + ", state=" + state + ", city=" + city
				+ ", railwaystation=" + railwayStation + ", remarks=" + remarks + "]";
	}
	
	
	
}

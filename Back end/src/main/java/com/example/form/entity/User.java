package com.example.form.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String full_name;
	private String email;
	private String country;
	private String phonenumber;
	private String city;
	private String password;
	private String confirmPassword;
	private String gender;
	private String position;
	
}

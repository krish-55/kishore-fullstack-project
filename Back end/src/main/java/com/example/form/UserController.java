package com.example.form;
import com.example.form.entity.User;
import com.example.form.repo.UserRepo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserRepo userRepository;
	
	@PostMapping("/api/registrations")
	public User registerUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	@GetMapping("api/test")
	public String test() {
		return "Hello World";
	}
	@GetMapping("/api/users")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
}

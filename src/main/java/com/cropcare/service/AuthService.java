package com.cropcare.service;

import com.cropcare.entity.User;
import com.cropcare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private BCryptPasswordEncoder encoder;

    public String register(User user) {

        if (repo.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists";
        }

        // 🔐 Encrypt password
        user.setPassword(encoder.encode(user.getPassword()));

        repo.save(user);

        return "User registered successfully";
    }

    public String login(String email, String password) {

        User user = repo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 🔐 Match password
        if (encoder.matches(password, user.getPassword())) {
            return "Login successful";
        }

        return "Invalid password";
    }
}
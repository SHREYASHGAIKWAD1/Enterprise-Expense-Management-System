package com.expense_management_backend.service;

import com.expense_management_backend.dto.LoginRequest;
import com.expense_management_backend.dto.SignupRequest;
import com.expense_management_backend.dto.AuthResponse;
import com.expense_management_backend.entity.Role;
import com.expense_management_backend.entity.User;
import com.expense_management_backend.repository.RoleRepository;
import com.expense_management_backend.repository.UserRepository;
import com.expense_management_backend.security.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public AuthResponse signup(SignupRequest signupRequest) {
        // Create User
        User user = new User();
        user.setUsername(signupRequest.getUsername());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));

        // Assign role
        Role role = roleRepository.findByName(signupRequest.getRole().toUpperCase());
        user.getRoles().add(role);

        // Save User
        userRepository.save(user);

        // Generate Token
        String token = jwtService.generateToken(user);

        return new AuthResponse(token);
    }

    public AuthResponse login(LoginRequest loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail());

        if (user != null && passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            String token = jwtService.generateToken(user);
            return new AuthResponse(token);
        }

        throw new RuntimeException("Invalid credentials");
    }
}

package com.expense_management_backend.controller;

import com.expense_management_backend.dto.LoginRequest;
import com.expense_management_backend.dto.SignupRequest;
import com.expense_management_backend.dto.AuthResponse;
import com.expense_management_backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public AuthResponse signup(@RequestBody SignupRequest signupRequest) {
        return authService.signup(signupRequest);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest loginRequest) {
        return authService.login(loginRequest);
    }
}

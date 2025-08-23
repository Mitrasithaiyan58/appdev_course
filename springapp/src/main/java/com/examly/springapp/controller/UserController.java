package com.examly.springapp.controller;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/dashboard")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // Get dashboard data based on role
    @GetMapping("/{userId}")
    public ResponseEntity<?> getDashboard(@PathVariable Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (!optionalUser.isPresent()) {
            return ResponseEntity.status(404).body("User not found");
        }

        User user = optionalUser.get();
        switch (user.getRole()) {
            case STUDENT:
                return ResponseEntity.ok("Student Dashboard Data");
            case TRAINER:
                return ResponseEntity.ok("Trainer Dashboard Data");
            case TRAINING_MANAGER:
                return ResponseEntity.ok("Training Manager Dashboard Data");
            case ADMIN:
                return ResponseEntity.ok("Admin Dashboard Data");
            default:
                return ResponseEntity.status(403).body("Role not recognized");
        }
    }
}

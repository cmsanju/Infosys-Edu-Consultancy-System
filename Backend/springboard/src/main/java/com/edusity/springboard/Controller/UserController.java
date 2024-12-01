package com.edusity.springboard.Controller;

import com.edusity.springboard.Dto.LoginDTO;
import com.edusity.springboard.Dto.UserDTO;
import com.edusity.springboard.EmailService;
import com.edusity.springboard.Entity.User;
import com.edusity.springboard.Service.UserService;
import com.edusity.springboard.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("api/v1/user")

public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private EmailService emailService;
    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDTO userDTO)
    {
        String id = userService.addUser(userDTO);
        try {
            String subject = "Welcome to Edusity";
            String body = "Hello " + userDTO.getUsername() + ",\n\nWelcome to Edusity! Your account has been successfully created.";
            emailService.sendEmail(userDTO.getEmail(), subject, body);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
    @GetMapping(path = "/all")
    public List<UserDTO> getAllUsers() {
        List<UserDTO> users = userService.getAllUsers();
        System.out.println("Fetched Users: " + users); // Log for debugging
        return users;
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable("id") Integer id, @RequestBody UserDTO userDTO) {
        boolean isUpdated = userService.updateUser(id, userDTO);
        if (isUpdated) {
            return ResponseEntity.ok("User updated successfully.");
        } else {
            return ResponseEntity.badRequest().body("Failed to update user.");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Integer id) {
        boolean isDeleted = userService.deleteUser(id);
        if (isDeleted) {
            return ResponseEntity.ok("User deleted successfully.");
        } else {
            return ResponseEntity.badRequest().body("Failed to delete user.");
        }
    }


}

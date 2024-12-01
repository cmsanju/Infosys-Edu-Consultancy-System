package com.edusity.springboard.Service.impl;

import com.edusity.springboard.Dto.LoginDTO;
import com.edusity.springboard.Dto.UserDTO;
import com.edusity.springboard.Entity.User;
import com.edusity.springboard.Repo.UserRepo;
import com.edusity.springboard.Service.UserService;
import com.edusity.springboard.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserIMPL implements UserService {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserDTO userDTO) {
    User user = new User(
            userDTO.getUserid(),
            userDTO.getUsername(),
            userDTO.getEmail(),
            this.passwordEncoder.encode(userDTO.getPassword())

    );
        userRepo.save(user);
        return user.getUsername();
}

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepo.findAll();
        return users.stream()
                .map(user -> new UserDTO(user.getUserid(), user.getUsername(), user.getEmail(), user.getPassword()))
                .collect(Collectors.toList());
    }
    @Override
    public boolean updateUser(int id, UserDTO userDTO) {
        Optional<User> optionalUser = userRepo.findById(id); // No casting needed
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setUsername(userDTO.getUsername());
            user.setEmail(userDTO.getEmail());
            userRepo.save(user);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteUser(int id) {
        if (userRepo.existsById(id)) { // No casting needed
            userRepo.deleteById(id);
            return true;
        }
        return false;
    }


    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {

            String msg = "";
            User user1 = userRepo.findByEmail(loginDTO.getEmail());
            if (user1 != null) {
                String password = loginDTO.getPassword();
                String encodedPassword = user1.getPassword();
                Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
                if (isPwdRight) {
                    Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                    if (user.isPresent()) {
                        return new LoginResponse("Login Success", true);
                    } else {
                        return new LoginResponse("Login Failed", false);
                    }
                } else {
                    return new LoginResponse("password Not Match", false);
                }
            }else {
                return new LoginResponse("Email not exits", false);
            }
        }


    }


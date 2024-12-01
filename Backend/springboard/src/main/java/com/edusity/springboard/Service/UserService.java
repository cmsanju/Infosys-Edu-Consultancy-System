package com.edusity.springboard.Service;

import com.edusity.springboard.Dto.LoginDTO;
import com.edusity.springboard.Dto.UserDTO;
import com.edusity.springboard.Entity.User;
import com.edusity.springboard.response.LoginResponse;

import java.util.List;

public interface UserService {
    String addUser(UserDTO userDTO);

    LoginResponse loginUser(LoginDTO loginDTO);

    List<UserDTO> getAllUsers(); // New method to fetch all users

    boolean updateUser(int id, UserDTO userDTO);

    boolean deleteUser(int id);
}

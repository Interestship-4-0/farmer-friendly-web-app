package com.loginForm.springboot.repository;

import com.loginForm.springboot.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}

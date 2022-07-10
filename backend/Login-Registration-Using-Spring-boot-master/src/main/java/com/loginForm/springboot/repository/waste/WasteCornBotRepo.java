package com.loginForm.springboot.repository.waste;

//import coom.api.create.Models.WasteCornBot;
import com.loginForm.springboot.model.waste.WasteCornBot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WasteCornBotRepo extends JpaRepository<WasteCornBot, Long> {
}

package com.loginForm.springboot.repository.waste;

//import com.api.create.Models.WasteTobaccoCrop;
import com.loginForm.springboot.model.waste.WasteTobaccoCrop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WasteTobaccoCropRepo extends JpaRepository<WasteTobaccoCrop, Long> {
}

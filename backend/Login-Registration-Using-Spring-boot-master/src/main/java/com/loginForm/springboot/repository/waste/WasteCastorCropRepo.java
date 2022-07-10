package com.loginForm.springboot.repository.waste;

//import com.api.create.Models.WasteCastorCrop;
import com.loginForm.springboot.model.waste.WasteCastorCrop;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WasteCastorCropRepo extends JpaRepository<WasteCastorCrop, Long> {
}

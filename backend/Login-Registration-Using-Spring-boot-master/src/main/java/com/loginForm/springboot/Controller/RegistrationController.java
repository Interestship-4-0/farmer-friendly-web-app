package com.loginForm.springboot.Controller;


import com.loginForm.springboot.Registration.UserModel;
import com.loginForm.springboot.model.User;
import com.loginForm.springboot.model.waste.*;
import com.loginForm.springboot.repository.waste.*;
import com.loginForm.springboot.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {

    @Autowired
    private UserService userService;
    @Autowired
    private WasteRiceHuskRepo riceHuskRepo;

    @Autowired
    private WasteTobaccoCropRepo tobaccoCropRepo;

    @Autowired
    private WasteWheatHuskRepo wheatHuskRepo;

    @Autowired
    private WasteCastorCropRepo castorCropRepo;

    @Autowired
    private WasteCornBotRepo cornBotRepo;

    @Autowired
    private WasteCottonPlantLeftOutsRepo cottonPlantLeftOutsRepo;
    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel userModel){
        User user = userService.registerUser(userModel);
        long id = user.getId();

        WasteCastorCrop w1 = new WasteCastorCrop(id, 0, 0);
        castorCropRepo.save(w1);

        WasteCornBot w2 = new WasteCornBot(id, 0, 0);
        cornBotRepo.save(w2);

        WasteWheatHusk w3 = new WasteWheatHusk(id, 0, 0);
        wheatHuskRepo.save(w3);

        WasteTobaccoCrop w4 = new WasteTobaccoCrop(id, 0, 0);
        tobaccoCropRepo.save(w4);

        WasteCottonPlantLeftOuts w5 = new WasteCottonPlantLeftOuts(id, 0, 0);
        cottonPlantLeftOutsRepo.save(w5);

        WasteRiceHusk w6 = new WasteRiceHusk(id, 0, 0);
        riceHuskRepo.save(w6);
        return "Success";
    }



}

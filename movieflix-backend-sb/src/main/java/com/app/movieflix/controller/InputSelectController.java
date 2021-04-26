package com.app.movieflix.controller;

import com.app.movieflix.model.InputSelectList;
import com.app.movieflix.repositary.InputSelectListRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/inputselector")
public class InputSelectController {
    @Autowired
    InputSelectListRepositary inputSelectListRepositary;

    public InputSelectController(InputSelectListRepositary _inputSelectListRepositary){
        this.inputSelectListRepositary = _inputSelectListRepositary;
    }

    @GetMapping("/countrylist")
    public List<String> getcountryList(){
        System.out.println("1");
        List<InputSelectList> inputSelectList =  inputSelectListRepositary.findAll();
       for(InputSelectList i:  inputSelectList){
             System.out.println(i.get_id());
        }
        return  inputSelectList.get(0).getCountries();
    }

    @GetMapping("/generetypes")
    public List<String> getAllGeneres(){
        List<InputSelectList> list = inputSelectListRepositary.findAll();

        return list.get(0).getGeneres();
    }

    @GetMapping("/getAlllist")
    public InputSelectList getAlllist(){

        List<InputSelectList> inputSelectList = inputSelectListRepositary.findAll();
        return  inputSelectList.get(0);
    }
}

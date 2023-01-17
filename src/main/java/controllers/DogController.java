package controllers;

import model.Dog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.DogService;

import java.util.Collection;

@Controller
@RequestMapping("/dog")
public class DogController {

    @Autowired
    private DogService dogService;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Dog> getDogs(String search) {
        return dogService.getDogs(search);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResult setDog(@RequestBody Dog dog) {
        return new ExtResult(dogService.add(dog), dog);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteDog(@RequestBody Dog dog) {
        dogService.delete(dog);
        return "delete";
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    @ResponseBody
    public String updateDog(@RequestBody Dog dog) {
        dogService.update(dog);
        return "update";
    }
}

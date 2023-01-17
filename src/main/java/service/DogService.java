package service;

import model.Dog;

import java.util.Collection;

public interface DogService {

    Boolean add(Dog dog);

    void update(Dog dog);

    Collection<Dog> getDogs(String search);

    void delete(Dog dog);

}
package model.dao;

import model.Dog;

import java.util.Collection;
import java.util.List;

public interface DogDao {

    void add(Dog dog);

    void update(Dog dog);

    void delete(Dog dog);

    Collection<Dog> getDogs(String search);

    public List findByDog(String name, Long price);

}

package service.impl;

import model.Dog;
import model.dao.DogDao;

import service.DogService;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.List;

public class DogServiceImpl implements DogService {

    private DogDao dogDao;

    public DogDao getDogDao() {
        return dogDao;
    }

    public void setDogDao(DogDao dogDao) {
        this.dogDao = dogDao;
    }

    @Transactional
    @Override
    public Boolean add(Dog dog) {
        List<Dog> duplicate = dogDao.findByDog(dog.getName(), dog.getPrice());
        if (duplicate.isEmpty()) {
            dogDao.add(dog);
            return true;
        }
        return false;
    }

    @Transactional
    @Override
    public void update(Dog dog) {
        dogDao.update(dog);
    }

    @Transactional
    @Override
    public Collection<Dog> getDogs(String search) {
        return dogDao.getDogs(search);
    }

    @Transactional
    @Override
    public void delete(Dog dog) {
        dogDao.delete(dog);
    }

}

package model.dao.impl;

import model.Dog;
import model.dao.DogDao;

import javax.persistence.EntityManager;
import javax.persistence.*;
import java.util.Collection;
import java.util.List;

public class DogDaoImpl implements DogDao {

    @PersistenceContext
    private EntityManager emf;

    public void add(Dog dog) {
        emf.persist(dog);
    }

    @Override
    public void update(Dog dog) {
        emf.merge(dog);
    }

    @Override
    public void delete(Dog dog) {
        emf.remove(emf.getReference(Dog.class, dog.getId()));
    }

    @Override
    public Collection<Dog> getDogs(String search) {
        if (null == search || search.trim().isEmpty()) {
            return emf.createQuery(
                            "select c from Dog c")
                    .getResultList();
        }
        return emf.createQuery(
                        "select c from Dog c where c.name like :search")
                .setParameter("search", search.trim() + "%")
                .getResultList();
    }

    public List<Dog> findByDog(String name, Long price) {
        return emf.createQuery(
                        "select c from Dog c where c.name = :name and c.price = :price")
                .setParameter("name", name)
                .setParameter("price", price)
                .getResultList();
    }
}

package it.corso.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import it.corso.model.User;

public interface UserDao extends CrudRepository<User, Integer> {

	boolean existsByEmail(String email);

	Optional<User> findByEmailAndPassword(String email, String password);

	Optional<User> findByEmail(String email);
	
}

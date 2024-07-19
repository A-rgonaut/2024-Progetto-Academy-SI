package it.corso.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import it.corso.model.User;

public interface AuthDao extends CrudRepository<User, Integer> {

	Optional<User> findByEmail(String email);

	Optional<User> findByEmailAndPassword(String email, String password);

	boolean existsByEmail(String email);
	
}

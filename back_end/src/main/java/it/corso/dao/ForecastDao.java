package it.corso.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import it.corso.model.User;
import it.corso.model.Weather;

public interface ForecastDao extends CrudRepository<Weather, Integer> {
	
}

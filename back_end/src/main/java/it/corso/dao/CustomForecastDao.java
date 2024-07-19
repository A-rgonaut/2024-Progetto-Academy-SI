package it.corso.dao;

import java.util.ArrayList;

import it.corso.model.Weather;

public interface CustomForecastDao {
	
	ArrayList<Weather> findBySearchByLatitudeAndLongitude (double latitude, double longitude);

	ArrayList<Weather> getWeather(String location);
}

package it.corso.service;

import java.util.ArrayList;

import it.corso.dto.UserDto;
import it.corso.dto.UserSignInRequestDto;
import it.corso.dto.UserSignInResponseDto;
import it.corso.dto.UserSignUpRequestDto;
import it.corso.model.User;
import it.corso.model.Weather;

public interface ForecastService {

	ArrayList<Weather> getWeeklyWeather(String location);
	
	//String delete(String email);

}
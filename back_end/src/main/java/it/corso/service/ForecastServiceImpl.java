package it.corso.service;

import java.util.ArrayList;
import java.util.Optional;

import org.apache.commons.codec.digest.DigestUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.corso.dao.AuthDao;
import it.corso.dao.CustomForecastDao;
import it.corso.dao.ForecastDao;
import it.corso.dto.UserDto;
import it.corso.dto.UserSignInRequestDto;
import it.corso.dto.UserSignInResponseDto;
import it.corso.dto.UserSignUpRequestDto;
import it.corso.model.User;
import it.corso.model.Weather;

@Service
public class ForecastServiceImpl implements ForecastService {

	@Autowired
	private CustomForecastDao customForecastDao;

	@Autowired
	private ForecastDao forecastDao;
	
	private ModelMapper modelMapper = new ModelMapper();

	@Override
	public ArrayList<Weather> getWeeklyWeather(String location) {

		ArrayList<Weather> weekly = customForecastDao.getWeather(location);
		
		for(Weather item : weekly)
			forecastDao.save(item);
		
		return weekly;
	}

}

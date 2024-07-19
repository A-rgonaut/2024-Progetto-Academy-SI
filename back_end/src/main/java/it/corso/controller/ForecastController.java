package it.corso.controller;

import java.security.Key;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import it.corso.dto.UserDto;
import it.corso.dto.UserSignInRequestDto;
import it.corso.dto.UserSignInResponseDto;
import it.corso.dto.UserSignUpRequestDto;
import it.corso.model.User;
import it.corso.model.Weather;
import it.corso.service.AuthService;
import it.corso.service.ForecastService;
import jakarta.validation.Valid;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/forecast")
@Component
public class ForecastController {	
	
	@Autowired
	private ForecastService forecastService;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUserByEmail(@QueryParam("location") String location) {
		
		try {

			ArrayList<Weather> user = forecastService.getWeeklyWeather(location);
			
			return Response.status(Response.Status.OK).entity(user).build();
			
		} catch(Exception e) {
			return Response.status(Response.Status.BAD_REQUEST).build();
		}
	}

	/*
	@POST
	@Path("/signin")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response login(@RequestBody UserSignInRequestDto user) {
	
		try {
			
			if (authService.signIn(user) != null) 
				return Response.ok(issueToken(user.getEmail())).build();
			
		} catch (Exception e) {
			return Response.status (Response.Status.BAD_REQUEST).build();
		} 
		
		return Response.status (Response.Status.BAD_REQUEST).build();
	}
	 */
	
}

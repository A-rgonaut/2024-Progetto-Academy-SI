package it.corso.controller;

import java.security.Key;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import it.corso.dto.UserDto;
import it.corso.dto.UserSignInRequestDto;
import it.corso.dto.UserSignInResponseDto;
import it.corso.dto.UserSignUpRequestDto;
import it.corso.model.User;
import it.corso.service.AuthService;
import jakarta.validation.Valid;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.PathParam;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/auth")
public class AuthController {	
	
	@Autowired
	private AuthService authService;
	
	private Logger logger = LogManager.getLogger(this.getClass());

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
	
	@POST
	@Path("/signup")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response SignupUser(@Valid @RequestBody UserSignUpRequestDto user) {

		if(!Pattern.matches("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,20}", user.getPassword()))
			return Response.status(Response.Status.BAD_REQUEST).build();
		
		if(authService.existsUserByEmail(user.getEmail()))
			return Response.status(Response.Status.BAD_REQUEST).build();
		
		try {
			
			if (authService.signUp(user) != null) 
				return Response.ok(issueToken(user.getEmail())).build();
			
		} catch(Exception e) {
			return Response.status(Response.Status.BAD_REQUEST).build();
		}
		
		return Response.status (Response.Status.BAD_REQUEST).build();
	}
	
	@DELETE
	@Path("/{email}")
	public Response deleteUserByEmail(@PathParam("email") String email) {
		
		try {

			authService.delete(email);
			
			return Response.status(Response.Status.OK).build();
			
		} catch(Exception e) {
			return Response.status(Response.Status.BAD_REQUEST).build();
		}
	}
	
	@GET
	@Path("/{email}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUserByEmail(@PathParam("email") String email) {
		
		try {

			UserDto user = authService.getUserDtoByEmail(email);
			
			return Response.status(Response.Status.OK).entity(user).build();
			
		} catch(Exception e) {
			return Response.status(Response.Status.BAD_REQUEST).build();
		}
	}
	
	private UserSignInResponseDto issueToken(String email) {
		  
		  byte[] secret = "33trentinientraronoatrentotuttie33trotterellando1234567890".getBytes();
		  Key key = Keys.hmacShaKeyFor(secret);
		  
		  User userInfo = authService.getUserByEmail(email);
		  Map<String, Object> map = new HashMap<>();
		  
		  map.put("firstname", userInfo.getFirstname());
		  map.put("lastname", userInfo.getLastname());
		  map.put("email", email);
		  
		  Date creation = new Date();
		  Date end = java.sql.Timestamp.valueOf(LocalDateTime.now().plusMinutes(15L));
		  String jwtToken = Jwts.builder()
		                        .setClaims(map)
		                        .setIssuer("http://localhost:8080") 
		                        .setIssuedAt(creation)
		                        .setExpiration(end)
		                        .signWith(key)
		                        .compact();
		  
		  UserSignInResponseDto token = new UserSignInResponseDto(); 
		  
		  token.setId(userInfo.getId());
		  token.setFirstname(userInfo.getFirstname());
		  token.setLastname(userInfo.getLastname());
		  token.setEmail(userInfo.getEmail());
		  
		  token.setToken(jwtToken);
		  token.setTtl(end);
		  token.setTokenCreationTime(creation);
		  
		  return token;
	}
	
}

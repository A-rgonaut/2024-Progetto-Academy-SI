package it.corso.dto;

import java.util.Date;

public class UserSignInResponseDto {

	public int id;
	private String firstname;
	private String lastname;
	private String email;
	
	private String token;
	private Date ttl;
	private Date tokenCreationTime;

	public int getId() {
		return id;
	}

	public String getFirstname() {
		return firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public String getEmail() {
		return email;
	}

	public String getToken() {
		return token;
	}

	public Date getTtl() {
		return ttl;
	}

	public Date getTokenCreationTime() {
		return tokenCreationTime;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public void setTtl(Date ttl) {
		this.ttl = ttl;
	}

	public void setTokenCreationTime(Date tokenCreationTime) {
		this.tokenCreationTime = tokenCreationTime;
	}
}

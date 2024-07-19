package it.corso.service;

import java.util.Optional;

import org.apache.commons.codec.digest.DigestUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.corso.dao.AuthDao;
import it.corso.dto.UserDto;
import it.corso.dto.UserSignInRequestDto;
import it.corso.dto.UserSignInResponseDto;
import it.corso.dto.UserSignUpRequestDto;
import it.corso.model.User;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	private AuthDao authDao;
	
	private ModelMapper modelMapper = new ModelMapper();

	@Override
	public UserSignInResponseDto signIn(UserSignInRequestDto userSignInDto) {

		String password = DigestUtils.sha256Hex(userSignInDto.getPassword());
		
		Optional<User> optional = authDao.findByEmailAndPassword(userSignInDto.getEmail(), password);
		
		if(optional.isPresent()) {
			User user = optional.get();
			
	        return modelMapper.map(user, UserSignInResponseDto.class);
		}
		
		return new UserSignInResponseDto();
		
	}

	@Override
	public UserSignInResponseDto signUp(UserSignUpRequestDto userSignUpDto) {

		User user = new User();

		user.setFirstname(userSignUpDto.getFirstname());
		user.setLastname(userSignUpDto.getLastname());
		user.setEmail(userSignUpDto.getEmail());		
		user.setPassword(DigestUtils.sha256Hex(userSignUpDto.getPassword()));
		
		authDao.save(user);	
		
		UserSignInRequestDto userSignIn = new UserSignInRequestDto();

		userSignIn.setEmail(user.getEmail());
		userSignIn.setPassword(user.getPassword());
		
        return this.signIn(userSignIn);
		
	}

	@Override
	public String delete(String email) {
		
		Optional<User> optional = authDao.findByEmail(email);
		
		if(optional.isPresent()) {
			User user = optional.get();
			
			authDao.delete(optional.get());
			
			return "User: " + user.getFirstname() + " " + user.getLastname() + ", has been delete successfully";
		}		
		
		return "User with email: " + email + ", has not delete";
	}

	@Override
	public boolean existsUserByEmail(String email) {
		return authDao.existsByEmail(email);
	}

	@Override
	public User getUserByEmail(String email) {
		
		Optional<User> optional = authDao.findByEmail(email);
		
		if(optional.isPresent())
	        return optional.get();
		
		return new User();
	}	
	
	@Override
	public UserDto getUserDtoByEmail(String email) {
		
		Optional<User> optional = authDao.findByEmail(email);
		
		if(optional.isPresent()) {
			User user = optional.get();
			
	        return modelMapper.map(user, UserDto.class);
		}
		
		return new UserDto();
	}

}

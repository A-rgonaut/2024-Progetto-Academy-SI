package it.corso.service;

import it.corso.dto.UserDto;
import it.corso.dto.UserSignInRequestDto;
import it.corso.dto.UserSignInResponseDto;
import it.corso.dto.UserSignUpRequestDto;
import it.corso.model.User;

public interface AuthService {

	UserSignInResponseDto signIn(UserSignInRequestDto userSignInDto);
	
	UserSignInResponseDto signUp(UserSignUpRequestDto userSignUpDto);
	
	String delete(String email);

	User getUserByEmail(String email);

	UserDto getUserDtoByEmail(String email);

	boolean existsUserByEmail(String email);
	
	/*

	void userSignup(UserSignupDto userdDto);

	void userUpdate(UserUpdateDto userUpdateDto);

	void userDelete(String email);

	User getUserByEmail(String email);

	UserDto getUserDtoByEmail(String email);

	List<UserDto> getAllUser();

	boolean existsUserByEmail(String email);
	
	boolean login(UserLoginRequestDto userLoginRequestDto);

	void addCourse(int userId, int courseId);

	void deleteCourse(int userId, int courseId);
	
	*/

}
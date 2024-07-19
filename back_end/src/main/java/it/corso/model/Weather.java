package it.corso.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Weather")
public class Weather {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String location;

	private double latitude;

	private double longitude;

	private String period;

	@Column(name = "min_temperature")
	private double minTemperature;

	@Column(name = "max_temperature")
	private double maxTemperature;

	@Column(name = "wind_speed")
	private double windSpeed;

	@Column(name = "wind_direction")
	private double windDirection;

	public int getId() {
		return id;
	}

	public String getLocation() {
		return location;
	}

	public double getLatitude() {
		return latitude;
	}

	public double getLongitude() {
		return longitude;
	}

	public String getPeriod() {
		return period;
	}

	public double getMinTemperature() {
		return minTemperature;
	}

	public double getMaxTemperature() {
		return maxTemperature;
	}

	public double getWindSpeed() {
		return windSpeed;
	}

	public double getWindDirection() {
		return windDirection;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public void setPeriod(String period) {
		this.period = period;
	}

	public void setMinTemperature(double minTemperature) {
		this.minTemperature = minTemperature;
	}

	public void setMaxTemperature(double maxTemperature) {
		this.maxTemperature = maxTemperature;
	}

	public void setWindSpeed(double windSpeed) {
		this.windSpeed = windSpeed;
	}

	public void setWindDirection(double windDirection) {
		this.windDirection = windDirection;
	}

}

package it.corso.dao;

import java.util.ArrayList;

import org.springframework.stereotype.Repository;
import org.springframework.web.reactive.function.client.WebClient;
import com.fasterxml.jackson.databind.JsonNode;

import it.corso.model.Weather;

@Repository
public class CustomForecastDaoImpl implements CustomForecastDao{

	@Override
	public ArrayList<Weather> findBySearchByLatitudeAndLongitude(double latitude, double longitude) {
		
		System.out.println("\n\n");

		WebClient client = WebClient.create("https://api.open-meteo.com/v1");
		
		ArrayList<Weather> data = new ArrayList<>();
		
		JsonNode json = client.get().uri("/forecast", uriBuilder -> {
			
			uriBuilder.queryParam("latitude", latitude)
			          .queryParam("longitude", longitude)
			          .queryParam("daily", "temperature_2m_max")
			          .queryParam("daily", "temperature_2m_min")
			          .queryParam("daily", "wind_speed_10m_max")
			          .queryParam("daily", "wind_direction_10m_dominant");
			
			return uriBuilder.build();
			
		}).retrieve().bodyToMono(JsonNode.class).block();
		
		System.out.println(json.toPrettyString());

		for(int i = 0; i < 7; i++) {
			
			Weather item = new Weather();

			item.setLatitude(json.get("latitude").doubleValue());
			item.setLongitude(json.get("longitude").doubleValue());
			item.setPeriod(json.get("daily").get("time").get(i).textValue());
			item.setMaxTemperature(json.get("daily").get("temperature_2m_max").get(i).doubleValue());
			item.setMinTemperature(json.get("daily").get("temperature_2m_min").get(i).doubleValue());
			item.setWindSpeed(json.get("daily").get("wind_speed_10m_max").get(i).doubleValue());
			item.setWindDirection(json.get("daily").get("wind_direction_10m_dominant").get(i).doubleValue());
			
			data.add(item);
		}
		
		return data;
	}

	@Override
	public ArrayList<Weather> getWeather(String location) {

		WebClient client = WebClient.create("https://geocoding-api.open-meteo.com/v1");
		
		JsonNode json = client.get().uri("/search", uriBuilder -> {
			
			uriBuilder.queryParam("name", location)
			          .queryParam("count", "1");
			
			return uriBuilder.build();
			
		}).retrieve().bodyToMono(JsonNode.class).block();
		
		System.out.println(json.toPrettyString());

		ArrayList<Weather> data = findBySearchByLatitudeAndLongitude(json.get("results").get(0).get("latitude").doubleValue(), json.get("results").get(0).get("longitude").doubleValue());
		
		for(Weather item : data)
			item.setLocation(location);
		
		return data;
	}

}

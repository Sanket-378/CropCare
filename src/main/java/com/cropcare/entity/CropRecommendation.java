package com.cropcare.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "crop_recommendation")
public class CropRecommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String soilType;
    private String weather;
    private double minTemp;
    private double maxTemp;
    private double minRain;
    private double maxRain;
    private String cropName;

    // getters & setters

    public int getId() { return id; }

    public String getSoilType() { return soilType; }
    public void setSoilType(String soilType) { this.soilType = soilType; }

    public String getWeather() { return weather; }
    public void setWeather(String weather) { this.weather = weather; }

    public double getMinTemp() { return minTemp; }
    public void setMinTemp(double minTemp) { this.minTemp = minTemp; }

    public double getMaxTemp() { return maxTemp; }
    public void setMaxTemp(double maxTemp) { this.maxTemp = maxTemp; }

    public double getMinRain() { return minRain; }
    public void setMinRain(double minRain) { this.minRain = minRain; }

    public double getMaxRain() { return maxRain; }
    public void setMaxRain(double maxRain) { this.maxRain = maxRain; }

    public String getCropName() { return cropName; }
    public void setCropName(String cropName) { this.cropName = cropName; }
}
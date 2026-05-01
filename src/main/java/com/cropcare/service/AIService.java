package com.cropcare.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AIService {

    @Value("${openrouter.api.key}")
    private String apiKey;

    public String getResponse(String message) {

        try {

            String url = "https://openrouter.ai/api/v1/chat/completions";

            JSONObject body = new JSONObject();

            body.put("model", "openai/gpt-3.5-turbo");
            JSONArray messages = new JSONArray();

            JSONObject userMessage = new JSONObject();

            userMessage.put("role", "user");

            userMessage.put(
                    "content",
                    "You are an AI Farmer Assistant. " +
                            "Answer farming questions in simple English, Hindi, or Marathi. " +
                            "Give crop disease remedies, fertilizer suggestions, weather guidance, and farming tips. " +
                            "Question: " + message
            );

            messages.put(userMessage);

            body.put("messages", messages);

            HttpHeaders headers = new HttpHeaders();

            headers.setContentType(MediaType.APPLICATION_JSON);

            headers.setBearerAuth(apiKey);

            HttpEntity<String> entity =
                    new HttpEntity<>(body.toString(), headers);

            RestTemplate restTemplate = new RestTemplate();

            ResponseEntity<String> response =
                    restTemplate.exchange(
                            url,
                            HttpMethod.POST,
                            entity,
                            String.class
                    );

            JSONObject json =
                    new JSONObject(response.getBody());

            return json
                    .getJSONArray("choices")
                    .getJSONObject(0)
                    .getJSONObject("message")
                    .getString("content");

        } catch (Exception e) {

            return "AI Error: " + e.getMessage();
        }
    }
}
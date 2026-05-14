package com.cropcare.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AIService {

    @Value("${grok.api.key}")
    private String apiKey;

    public String getResponse(String message) {

        try {

            // GROK API URL
            String url = "https://api.groq.com/openai/v1/chat/completions";
            JSONObject body = new JSONObject();

            // GROK MODEL
            body.put("model", "llama-3.1-8b-instant");            JSONArray messages = new JSONArray();

            JSONObject systemMessage = new JSONObject();

            systemMessage.put("role", "system");

            systemMessage.put(
                    "content",
                    "You are an AI Farmer Assistant for the CropCare project. " +

                            "Rules: " +

                            "1. Answer ONLY farming and agriculture related questions. " +

                            "2. Allowed topics are crops, fertilizers, soil, irrigation, weather, pesticides, plant diseases, organic farming, farming techniques, and crop recommendations. " +

                            "3. IMPORTANT: If the user asks to translate, explain, summarize, or reply in another language for a previous farming answer, then allow it and respond properly. " +

                            "You can reply in English, Hindi, or Marathi based on the user's request. " +

                            "4. Allow translation, explanation, summarization, or language conversion requests if they are related to a farming answer. " +

                            "5. If the user asks anything completely unrelated to farming or agriculture, reply ONLY with: " +

                            "'Please ask only farming and agriculture related questions.' " +

                            "6. Keep answers short, simple, and farmer-friendly. " +

                            "7. Support English, Hindi, and Marathi languages. " +

                            "8. If translation is requested, translate the farming-related response appropriately."
            );

            JSONObject userMessage = new JSONObject();

            userMessage.put("role", "user");

            userMessage.put("content", message);

            messages.put(systemMessage);

            messages.put(userMessage);

            body.put("messages", messages);

            HttpHeaders headers = new HttpHeaders();

            headers.setContentType(MediaType.APPLICATION_JSON);

            // GROK AUTH HEADER
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
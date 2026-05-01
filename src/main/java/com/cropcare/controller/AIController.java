package com.cropcare.controller;

import com.cropcare.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin("*")
public class AIController {

    @Autowired
    private AIService aiService;

    @PostMapping("/chat")
    public String chat(@RequestBody Map<String, String> body) {

        String message = body.get("message");

        return aiService.getResponse(message);
    }

}
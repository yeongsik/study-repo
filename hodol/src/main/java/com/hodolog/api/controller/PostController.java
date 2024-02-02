package com.hodolog.api.controller;


import com.hodolog.api.request.PostCreate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@Slf4j
public class PostController {

    @PostMapping("/posts")
    public Map<String, String> post(@RequestBody @Valid PostCreate params, BindingResult bindingResult) throws Exception {
        log.info("params = {}" , params.toString());

        if (bindingResult.hasErrors()) {
            List<FieldError> fieldErrors = bindingResult.getFieldErrors();
            FieldError fieldError = fieldErrors.get(0);
            String fieldName = fieldError.getField();
            String errorMessage = fieldError.getDefaultMessage();

            Map<String, String> error = new HashMap<>();
            error.put(fieldName, errorMessage);
            return error;
        }

        return Map.of();
    }

}

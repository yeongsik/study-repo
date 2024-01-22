package com.hodolog.api.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

    /*
    예전 방식
    @RequestMapping(method = RequestMethod.GET, path="/v1/posts")
    * */

    @GetMapping("/posts")
    public String get() {
        return "Hello World";
    }
}

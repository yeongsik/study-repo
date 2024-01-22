package com.hodolog.api.controller;


import com.hodolog.api.request.PostCreate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@Slf4j
public class PostController {
    /*
        HTTP METHOD
        GET POST PUT PATCH DELETE OPTIONS HEAD TRACE CONNECT
        각 특징 알기
    */


    /*
    예전 방식
    @RequestMapping(method = RequestMethod.GET, path="/v1/posts")
    * */

    @PostMapping("/posts")
    public String post(@RequestBody PostCreate postCreate) {

        log.info("postCreate = {}" , postCreate.toString());
        return "Hello World";
    }

}

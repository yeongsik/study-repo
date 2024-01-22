package com.hodolog.api.request;

import lombok.*;

@ToString
@Getter
@NoArgsConstructor
public class PostCreate {
    private String title;
    private String content;

    @Builder
    public PostCreate(String title, String content) {
        this.title = title;
        this.content = content;
    }
}

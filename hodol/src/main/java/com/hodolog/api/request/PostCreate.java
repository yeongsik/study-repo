package com.hodolog.api.request;

import lombok.*;

import javax.validation.constraints.NotBlank;

@ToString
@Getter
@NoArgsConstructor
public class PostCreate {

    @NotBlank(message = "타이틀 값이 없어요.")
    private String title;
    @NotBlank(message = "컨텐츠 값이 없어요.")
    private String content;

    @Builder
    public PostCreate(String title, String content) {
        this.title = title;
        this.content = content;
    }
}

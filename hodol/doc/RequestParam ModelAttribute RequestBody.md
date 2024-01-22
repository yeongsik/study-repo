# RequestParam, ModelAttribute, RequestBody

### RequestParam 

* Key-value 값으로 넘겨주는 application/x-www-form-urlencoded 데이터 타입일 때 사용
* 넘겨주는 데이터 값을 하나씩 바인딩해주거나, Map<String,String> params과 같이 바인딩을 해줄 수 있다.

### ModelAttribute

* 객체 클래스를 만들어서 해당 클래스 안에 있는 property에 key-valueㄹ 넘어오는 데이터를 바인딩
```java

public class exampleDTO {
    
    private String a;
    private String b;
    
    // setter or 생성자가 있어야 해당 클래스 안에 프로퍼티에 요청값을 바인딩해준다.
}

```

### RequestBody 

* key-value 값을 데이터를 보내는 형태는 한계가 분명하다. 그렇기에 javascript 객체 데이터 형태인 JSON을 많이 사용한다.
* application/json 데이터를 매핑하기 위해 RequestBody를 사용
* 기본 생성자가 있어야지 바인딩을 해준다.
  * 관련 내용을 자세히 설명해준 블로그 글 https://blogshine.tistory.com/445
  * 알아보니 기본생성자 없이도 바인딩해주는 방법이 있다. @JsonProperty, @JsonAutoDetect 사용
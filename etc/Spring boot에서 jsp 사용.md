# Spring boot에서 jsp 사용

1. 외장 톰캣 사용해야 한다.
2. ServletInitializer를 생성해줘야 한다.
   ```java
    public class ServletInitializer extends SpringBootServletInitializer {

      @Override
      protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
          return application.sources(Application.class);
      }
    }

3. 외장 톰캣 버전 확인 (8.5이상)
   * 톰캣 버전이 낮으면 jsp 로드가 안되었다는 Exception이 발생했었는데 해결하는데 애를 먹음(단순히 버전 문제였음)
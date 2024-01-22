# Http method

### GET
* 데이터 요청 시 사용
* queryString, key-value &로 조회 조건 데이터 요청

### HEAD
* 특정 리소스를 GET 메서드로 요청했을 때 돌아올 헤더를 요청
* 응답에 본문을 가져서는 안된다.

### POST
* 서버에 데이터 전송, 전송되는 데이터 본문 유형은 Content-type 헤더로 나타남
* html form 양식으로 전송하 경우 Cotent-type은 application/x-www-form-urlencoded, multipart/form-data, text/plain로 보냄
  * 바이너리 데이터 경우 multipart를 사용 (ex: file)
* html 양식 외엔 경우 요청 본문이 어떠한 형태도 취할 수 있다. ( 현재 가장 많이 사용하는 형태 : json)


### PUT
* HTTP PUT 메서드는 요청 페이로드를 사용해 새로운 리소스를 생성하거나, 대상 리소스를 나타내는 데이터를 대체합니다.

### DELETE 
* HTTP DELETE 메서드는 지정한 리소스를 삭제
* DELETE 메서드를 성공적으로 적용한 후에 사용할 수 있는 응답 상태 코드
  1. 명령을 성공적으로 수행할 것 같으나 아직은 실행하지 않은 경우 202 (Accepted)
  2. 명령을 수행했고 더 이상 제공할 정보가 없는 경우 204 (No Content)
  3. 명령을 수행했고 응답 메시지가 이후의 상태를 설명하는 경우 200 (OK)

### CONNECT
* 요청한 리소스에 대해 양방향 연결을 시작하는 메소드

### OPTIONS
* 주어진 URL 또는 서버에 대해 허용된 통신 옵션 요청
* 응답 값으로 해당 URL에 허용된 HTTP METHOD 등의 통신 옵션들을 볼 수 있다.

### TRACE
* 원격지 서버에 루프백 메시지 호출하기 위해 사용

### PATCH
* 리소스의 부분적인 수정을 할 때에 사용
* PUT은 완전한 교체, PATCH 부분 교체
* 
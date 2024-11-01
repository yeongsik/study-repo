사내 내부 서버에서 하나의 서버 (아파치)와 여러 톰캣(WAS)를 세팅해놓고 각 프로젝트 별로 개발서버를 구축해놓은 상황에 하나의 프로젝트에 image경로를 아파치 Alias로 처리하자는 의견이 나와서 변경하려고 했다.

JkMount가 선언이 되어있는 httpd-vhost.conf 쪽으로 들어가서 해당 프로젝트 virtualHost에 Alias 정보를 기입했다. 경로등이 제대로 기입되었는데도 해당 이미지로 갔을 때 404 에러가 발생했다.

인터넷과 chatGpt를 찾아봤더니 jkMount가 되어있으면 Alias가 안먹힌다는 내용이었다. 이미 먼저 jkMount 경로에 있는 톰캣으로 redirect 처리를 했기 때문에 Alias가 안먹힌다는 것이다. 따라서 해당 image경로는 JkUnmount를 하고 Alias를 진행시켰더니 이미지가 잘 조회되는 것을 확인했다.

이어서 혹시 모를 보안에 대비해 image 경로에 접근 시 image 파일만 접근 할 수 있도록 파일 패턴을 추가했다.

```xml
<VirtualHost *:포트>

Servername // 서버 이름

....

JkUnMount /업로드경로URL/* JkWorker이름

Alias /업로드경로URL "/실제파일경로/"

<Directory "/실제파일경로/">
	Require all granted

	<FilesMatch "\.(jpg|jpeg|png|gif|svg)$">
      Require all granted
  </FilesMatch>

  <FilesMatch ".*">
      Require all denied
  </FilesMatch>
</Directory>

JkMount /* JkWorker이름
</VirtualHost>

```
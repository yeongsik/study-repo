# 톰캣 9.0 conf 폴더에 있는 server.xml 설명

```xml

<?xml version="1.0" encoding="UTF-8"?>
<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<!-- Note:  A "Server" is not itself a "Container", so you may not
     define subcomponents such as "Valves" at this level.
     Documentation at /docs/config/server.html
 -->
<Server port="8005" shutdown="SHUTDOWN">
  <Listener className="org.apache.catalina.startup.VersionLoggerListener" />
  <!-- Security listener. Documentation at /docs/config/listeners.html
  <Listener className="org.apache.catalina.security.SecurityListener" />
  -->
  <!-- APR library loader. Documentation at /docs/apr.html -->
  <Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on" />
  <!-- Prevent memory leaks due to use of particular java/javax APIs-->
  <Listener className="org.apache.catalina.core.JreMemoryLeakPreventionListener" />
  <Listener className="org.apache.catalina.mbeans.GlobalResourcesLifecycleListener" />
  <Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener" />

  <!-- Global JNDI resources
       Documentation at /docs/jndi-resources-howto.html
  -->
  <GlobalNamingResources>
    <!-- Editable user database that can also be used by
         UserDatabaseRealm to authenticate users
    -->
    <Resource name="UserDatabase" auth="Container"
              type="org.apache.catalina.UserDatabase"
              description="User database that can be updated and saved"
              factory="org.apache.catalina.users.MemoryUserDatabaseFactory"
              pathname="conf/tomcat-users.xml" />
  </GlobalNamingResources>

  <!-- A "Service" is a collection of one or more "Connectors" that share
       a single "Container" Note:  A "Service" is not itself a "Container",
       so you may not define subcomponents such as "Valves" at this level.
       Documentation at /docs/config/service.html
   -->
  <Service name="Catalina">

    <!--The connectors can use a shared executor, you can define one or more named thread pools-->
    <!--
    <Executor name="tomcatThreadPool" namePrefix="catalina-exec-"
        maxThreads="150" minSpareThreads="4"/>
    -->


    <!-- A "Connector" represents an endpoint by which requests are received
         and responses are returned. Documentation at :
         Java HTTP Connector: /docs/config/http.html
         Java AJP  Connector: /docs/config/ajp.html
         APR (HTTP/AJP) Connector: /docs/apr.html
         Define a non-SSL/TLS HTTP/1.1 Connector on port 8080
    -->
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
               maxParameterCount="1000"
               />
    <!-- A "Connector" using the shared thread pool-->
    <!--
    <Connector executor="tomcatThreadPool"
               port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443"
               maxParameterCount="1000"
               />
    -->
    <!-- Define an SSL/TLS HTTP/1.1 Connector on port 8443
         This connector uses the NIO implementation. The default
         SSLImplementation will depend on the presence of the APR/native
         library and the useOpenSSL attribute of the AprLifecycleListener.
         Either JSSE or OpenSSL style configuration may be used regardless of
         the SSLImplementation selected. JSSE style configuration is used below.
    -->
    <!--
    <Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol"
               maxThreads="150" SSLEnabled="true"
               maxParameterCount="1000"
               >
        <SSLHostConfig>
            <Certificate certificateKeystoreFile="conf/localhost-rsa.jks"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
    -->
    <!-- Define an SSL/TLS HTTP/1.1 Connector on port 8443 with HTTP/2
         This connector uses the APR/native implementation which always uses
         OpenSSL for TLS.
         Either JSSE or OpenSSL style configuration may be used. OpenSSL style
         configuration is used below.
    -->
    <!--
    <Connector port="8443" protocol="org.apache.coyote.http11.Http11AprProtocol"
               maxThreads="150" SSLEnabled="true"
               maxParameterCount="1000"
               >
        <UpgradeProtocol className="org.apache.coyote.http2.Http2Protocol" />
        <SSLHostConfig>
            <Certificate certificateKeyFile="conf/localhost-rsa-key.pem"
                         certificateFile="conf/localhost-rsa-cert.pem"
                         certificateChainFile="conf/localhost-rsa-chain.pem"
                         type="RSA" />
        </SSLHostConfig>
    </Connector>
    -->

    <!-- Define an AJP 1.3 Connector on port 8009 -->
    <!--
    <Connector protocol="AJP/1.3"
               address="::1"
               port="8009"
               redirectPort="8443"
               maxParameterCount="1000"
               />
    -->

    <!-- An Engine represents the entry point (within Catalina) that processes
         every request.  The Engine implementation for Tomcat stand alone
         analyzes the HTTP headers included with the request, and passes them
         on to the appropriate Host (virtual host).
         Documentation at /docs/config/engine.html -->

    <!-- You should set jvmRoute to support load-balancing via AJP ie :
  <Engine name="Catalina" defaultHost="localhost" jvmRoute="jvm1">
    -->
    <Engine name="Catalina" defaultHost="localhost">

      <!--For clustering, please take a look at documentation at:
          /docs/cluster-howto.html  (simple how to)
          /docs/config/cluster.html (reference documentation) -->
      <!--
      <Cluster className="org.apache.catalina.ha.tcp.SimpleTcpCluster"/>
      -->

      <!-- Use the LockOutRealm to prevent attempts to guess user passwords
           via a brute-force attack -->
      <Realm className="org.apache.catalina.realm.LockOutRealm">
        <!-- This Realm uses the UserDatabase configured in the global JNDI
             resources under the key "UserDatabase".  Any edits
             that are performed against this UserDatabase are immediately
             available for use by the Realm.  -->
        <Realm className="org.apache.catalina.realm.UserDatabaseRealm"
               resourceName="UserDatabase"/>
      </Realm>

      <Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">

        <!-- SingleSignOn valve, share authentication between web applications
             Documentation at: /docs/config/valve.html -->
        <!--
        <Valve className="org.apache.catalina.authenticator.SingleSignOn" />
        -->

        <!-- Access log processes all example.
             Documentation at: /docs/config/valve.html
             Note: The pattern used is equivalent to using pattern="common" -->
        <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
               prefix="localhost_access_log" suffix=".txt"
               pattern="%h %l %u %t &quot;%r&quot; %s %b" />

      </Host>
    </Engine>
  </Service>
</Server>

```

## `<Server>`
- **역할**: Tomcat 서버를 정의하는 최상위 태그.
- **속성**:
    - `port="8005"`: Tomcat을 안전하게 종료하기 위한 shutdown 명령 포트.
    - `shutdown="SHUTDOWN"`: Tomcat 종료 시 사용할 명령어.
- **포함 내용**:
    - 여러 `<Listener>`와 글로벌 설정.

---

## `<Listener>`
Tomcat 실행 시 이벤트를 처리하거나 리소스를 초기화/관리하는 리스너.

### 주요 리스너:
- `VersionLoggerListener`: Tomcat 버전 정보를 로그로 출력.
- `AprLifecycleListener`: APR(Apache Portable Runtime) 라이브러리 로딩.
- `JreMemoryLeakPreventionListener`: JVM 메모리 누수 방지.
- `GlobalResourcesLifecycleListener`: 전역 JNDI 리소스 관리.
- `ThreadLocalLeakPreventionListener`: ThreadLocal 객체의 메모리 누수 방지.

---

## `<GlobalNamingResources>`
Tomcat의 전역 JNDI(Java Naming and Directory Interface) 리소스를 정의.

### 예제 리소스:
```xml
<Resource name="UserDatabase" auth="Container"
          type="org.apache.catalina.UserDatabase"
          description="User database that can be updated and saved"
          factory="org.apache.catalina.users.MemoryUserDatabaseFactory"
          pathname="conf/tomcat-users.xml" />
```
- `UserDatabase`: 사용자 인증 정보를 저장하는 데이터베이스.
- `pathname="conf/tomcat-users.xml"`: 사용자 정보가 저장된 XML 파일 경로.

---

## `<Service>`
- **역할**: 요청을 처리하기 위한 엔진과 커넥터를 포함.
- **속성**:
    - `name="Catalina"`: 서비스 이름.

### 포함 내용:
- `<Connector>`: 요청을 수신하는 네트워크 엔드포인트.
- `<Engine>`: 요청 처리의 핵심 엔진.

---

## `<Connector>`
클라이언트 요청을 수신하고 응답을 반환하는 네트워크 인터페이스.

### HTTP Connector:
```xml
<Connector port="8080" protocol="HTTP/1.1"
           connectionTimeout="20000"
           redirectPort="8443"
           maxParameterCount="1000" />
```
- `port="8080"`: HTTP 요청을 수신할 포트.
- `connectionTimeout="20000"`: 연결 타임아웃 (밀리초).
- `redirectPort="8443"`: HTTPS 리디렉션 시 사용할 포트.

### SSL/TLS Connector:
```xml
<Connector port="8443" protocol="org.apache.coyote.http11.Http11NioProtocol"
           maxThreads="150" SSLEnabled="true"
           maxParameterCount="1000">
    <SSLHostConfig>
        <Certificate certificateKeystoreFile="conf/localhost-rsa.jks"
                     type="RSA" />
    </SSLHostConfig>
</Connector>
```
- **역할**: HTTPS를 통해 보안 요청을 처리.
- **속성**:
    - `port="8443"`: HTTPS 요청을 수신할 포트.
    - `SSLEnabled="true"`: SSL/TLS 활성화.
    - `maxThreads="150"`: 최대 스레드 수.
    - `certificateKeystoreFile`: 인증서 파일 경로.
    - `type="RSA"`: RSA 인증서 타입.

### AJP Connector:
```xml
<Connector protocol="AJP/1.3"
           address="::1"
           port="8009"
           redirectPort="8443"
           maxParameterCount="1000" />
```
- **역할**: 웹 서버(Apache HTTP Server 등)와의 통신을 처리.
- **속성**:
    - `protocol="AJP/1.3"`: AJP 프로토콜 버전 1.3 사용.
    - `address="::1"`: 연결할 IP 주소 (로컬 호스트).
    - `port="8009"`: AJP 요청을 수신할 포트.
    - `redirectPort="8443"`: HTTPS 리디렉션 시 사용할 포트.

---


## `<Engine>`
서비스의 요청을 처리하는 핵심 컴포넌트로, 가상 호스트를 포함.

### 속성:
- `name="Catalina"`: 엔진 이름.
- `defaultHost="localhost"`: 기본 호스트 이름.

### 내부 내용:
- `<Realm>`: 사용자 인증 및 권한 관리.
    - `LockOutRealm`: 비밀번호 brute-force 공격 방지.
    - `UserDatabaseRealm`: 글로벌 JNDI 리소스 `UserDatabase`를 참조.
- `<Host>`: 요청을 처리할 호스트.

---

## `<Host>`
각 도메인 또는 가상 호스트의 설정.

### 속성:
- `name="localhost"`: 호스트 이름.
- `appBase="webapps"`: 웹 애플리케이션의 기본 디렉터리.
- `unpackWARs="true"`: WAR 파일을 자동으로 압축 해제.
- `autoDeploy="true"`: 새로운 WAR 파일 배치 시 자동 배포.

### 내부 내용:
- `<Valve>`: 요청/응답의 로그 기록이나 인증 처리.
    - **AccessLogValve**:
      ```xml
      <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
             prefix="localhost_access_log" suffix=".txt"
             pattern="%h %l %u %t &quot;%r&quot; %s %b" />
      ```
        - 요청 로그를 기록.

---
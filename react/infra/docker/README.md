##### 도커이미지 만들기

```shell
docker build -t [태그이름] .
```

##### 이미지 조회

```shell
docker images
```

##### 이미지 삭제

```shell
docker image rm [이미지id]
```

##### 도커실행시키기

```shell
docker run -d -p 3000:3000 [태그이름] [컨테이너이름]
```

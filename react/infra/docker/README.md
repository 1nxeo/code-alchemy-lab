<!-- 도커이미지 만들기 -->

docker build -t [태그이름] .

<!-- 이미지 조회 -->

docker images

<!-- 이미지 삭제 -->

docker image rm [이미지id]

<!-- 도커실행시키기 -->

docker run -d -p 3000:3000 [태그이름] [컨테이너이름]

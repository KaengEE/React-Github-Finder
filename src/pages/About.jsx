function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        깃허브 사용자를 찾고 프로파일을 확인할 수 있는 리엑트 앱입니다. 나의
        블로그 주소는 다음과 같습니다.
        <strong>
          <a href="https://blog.naver.com/drv983"> 내 블로그</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span> 1.0.0</span>
      </p>
    </>
  );
}

export default About;

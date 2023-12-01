import Search from "../../assets/search.svg";

function About() {
  return (
    <div className="flex items-center">
      <div className="mr-8">
        <h1 className="text-6xl mb-4 font-bold">Github Finder</h1>
        <p className="mb-8 text-2xl font-light">
          깃허브 사용자를 찾고 프로필과 최근 Repo를 확인할 수 있는 리엑트
          앱입니다.
        </p>
        <p className="mb-3 text-xl">
          <strong>
            <a
              href="https://github.com/KaengEE/React-Github-Finder"
              target="_blank"
            >
              깃허브
            </a>
          </strong>
        </p>
        <p className="mb-3 text-xl">
          <strong>
            <a
              href="https://blog.naver.com/coding_ori/223278916785"
              target="_blank"
            >
              블로그
            </a>
          </strong>
        </p>
        <p className="text-lg text-gray-400">
          Version <span> 1.0.0</span>
        </p>
        <p className=" mt-10 text-ms text-gray-400">
          Contact Me : <span> yopuiqwer@naver.com</span>
        </p>
      </div>
      {/* 이미지 */}
      <div className="ml-8 max-w-md">
        <img
          src={Search}
          alt="검색이미지"
          // hidden sm:block sm 사이즈에서는 이미지 안보임
          className="object-contain hidden sm:block"
        />
      </div>
    </div>
  );
}

export default About;

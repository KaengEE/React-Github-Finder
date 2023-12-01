import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  //초기값
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  //유저검색
  const searchUsers = async (text) => {
    setLoading(); //로딩상태

    //url주소에 끝에 쿼리스트링을 만듬(q=text)
    const pararms = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${pararms}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    //console.log(data);

    dispatch({
      type: "GET_USERS",
      payload: data.items,
    });
  };

  //유저 1명의 정보
  const getUser = async (login) => {
    setLoading(); //로딩상태

    //https://api.github.com/users/:id
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    //아이디로 못찾을 경우
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  //유저의 repo 찾기
  const getUserRepos = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();

    dispatch({
      type: "GET_REPOS",
      payload: data,
      loading: false,
    });
  };

  //로딩상태를 true로 업데이트하기 위한 dispatch
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  //클리어 버튼
  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        searchUsers, //동일할땐 생략가능
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

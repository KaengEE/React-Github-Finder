import { useContext, useEffect } from "react";
import GithubContext from "../../context/github/GithubContext";
import { useParams } from "react-router-dom";

function User() {
  const { user, getUser } = useContext(GithubContext);

  //path주소로 id넘어옴
  const params = useParams();
  //console.log(params);

  useEffect(() => {
    getUser(params.login);
  }, []);

  return (
    <h3>
      {user.login},{user.id}
    </h3>
  );
}

export default User;

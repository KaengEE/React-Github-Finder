import { useContext, useEffect } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  // const [users, setUsers] = useState([]);
  //로딩 - 시작시 데이터를 가져오기때문에 작업중(true)
  // const [loading, setLoading] = useState(true);

  //context
  const { users, loading } = useContext(GithubContext);

  //로딩이 아닐때 표시, 로딩일때 로딩표시
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users && users.map((user) => <UserItem key={user.id} user={user} />)}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;

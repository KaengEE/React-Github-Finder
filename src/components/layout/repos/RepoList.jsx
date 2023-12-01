function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">최근 Repo 10개</h2>
        {repos.map((repo) => (
          <h3 key={repo.id}>{repo.name}</h3>
        ))}
      </div>
    </div>
  );
}

export default RepoList;

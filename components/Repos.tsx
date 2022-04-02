import { useEffect, useState } from 'react';

import { VscRepo } from 'react-icons/vsc';

const Repos = ({ userRepos }: { userRepos: any }) => {
  const { created_at } = userRepos;
  const [recentRepos, setRecentRepos] = useState([]);
  const [sortType, setSortType] = useState('created');
  console.log('userRepos', userRepos);

  const getRecentRepos = (type: any) => {
    const LIMIT = 8;

    const sortedRepos = userRepos
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) => b[created_at] - a[created_at])
      .slice(0, LIMIT);

    setRecentRepos(sortedRepos);
  };

  useEffect(() => {
    if (userRepos.length) {
      getRecentRepos('created');
    }
  }, []);

  useEffect(() => getRecentRepos(sortType), [sortType]);

  console.log('recentRepos', recentRepos);

  return (
    <div className="mt-5 flex-col justify-center">
      <div className="my-5 flex justify-center">
        <h1>My Recent Repos</h1>
      </div>
      <div className="flex flex-col items-center justify-center space-x-3 space-y-3 md:flex-row md:flex-wrap">
        {recentRepos.map((repo: any) => (
          <div
            className="flex w-80 flex-col rounded-md border-[1px] border-[#ff7f50] p-1 shadow-lg"
            key={repo.id}
          >
            <div className="flex items-center space-x-2">
              <VscRepo /> <h1>{repo.name}</h1>
            </div>
            <div className="my-2">
              <p>{repo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Repos;

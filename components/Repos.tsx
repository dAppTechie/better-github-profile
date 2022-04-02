import { useEffect, useState } from 'react';

import { VscRepo } from 'react-icons/vsc';

const Repos = ({ userRepos }: { userRepos: any }) => {
  const { created_at } = userRepos;
  const [recentRepos, setRecentRepos] = useState([]);
  const [sortType, setSortType] = useState('created');

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

  return (
    <div className="mt-5 mb-8 flex-col justify-center">
      <div className="my-5 flex justify-center">
        <h1 className="text-1xl md:text-2xl">Some Random Repos Of Mine</h1>
      </div>
      <div className="mt-5 flex flex-col justify-center md:flex-row md:flex-wrap">
        {recentRepos.map((repo: any) => (
          <div
            className="mb-5 flex h-36 w-80 flex-col rounded-md border-[1px] border-[#ff7f50] p-2 shadow-lg md:mr-5"
            key={repo.id}
          >
            <div className="flex items-center space-x-2">
              <VscRepo />
              <a
                href={`${repo.html_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                {' '}
                <h1>{repo.name}</h1>
              </a>
            </div>
            <div className="my-3">
              <p>{repo.description}</p>
            </div>
            <div className="mt-7 flex justify-between">
              <div>{repo.language}</div>
              <div>{repo.size} KB</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Repos;

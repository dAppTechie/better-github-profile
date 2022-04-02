import { useState, useEffect } from 'react';
import GhPolyglot from 'gh-polyglot';

import { Hero, Stats, Repos, Footer } from '../components';

const User = () => {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [langData, setLangData] = useState(null);

  const getUserData = () => {
    fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USER}`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => setUserData(json))
      .catch((err) => {
        console.log('Error', err);
      });
  };

  const getLanguageData = () => {
    const me = new GhPolyglot(`${process.env.NEXT_PUBLIC_GITHUB_USER}`);
    me.userStats((err: any, stats: any) => {
      if (err) {
        console.log('Error', err);
      }
      setLangData(stats);
    });
  };

  const getUserRepos = () => {
    fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USER}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((json) => setUserRepos(json))
      .catch((err) => {
        console.log('Error', err);
      });
  };

  useEffect(() => {
    getUserData();
    getUserRepos();
    getLanguageData();
  }, []);

  return (
    <main className="flex w-full flex-col items-center justify-center">
      {userData && <Hero userData={userData} />}
      {langData && <Stats langData={langData} />}
      {userRepos && <Repos userRepos={userRepos} />}
      <Footer />
    </main>
  );
};

export default User;

import Image from 'next/image';
import { BsPeople } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BsLink45Deg } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const Hero = ({ userData }: { userData: any }) => {
  const {
    avatar_url,
    name,
    login,
    location,
    blog,
    followers,
    following,
    plan,
    twitter_username,
  } = userData;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center rounded-full">
        <Image
          className="rounded-full"
          src={`${avatar_url}`}
          alt="avatar"
          width={200}
          height={200}
        />
      </div>
      <div className="mt-5 flex items-center justify-center">
        <h1 className="main-text text-4xl md:text-5xl">{`${name}`}</h1>
        <div className="badge badge-outline ml-2 border-[#ff7f50] text-[#ff7f50]">
          {`${plan.name}`}
        </div>
      </div>
      <a
        href="https://github.com/dAppTechie?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="  mt-5 flex cursor-pointer justify-center">
          <h2 className="text-3xl text-[#ff7f50] md:text-4xl">{`${login}`}</h2>
        </div>
      </a>
      <div className="mt-5 flex items-center justify-center space-x-3">
        <BsPeople className="text-sm" />
        <p className="text-sm">
          <span className=" text-white">{`${followers}`}</span> Followers
        </p>
        <hr className="w-2" />
        <p className="text-sm">
          <span className="text-white">{`${following}`}</span> following
        </p>
      </div>
      <div className="mt-5 flex items-center justify-center space-x-4">
        <div className="flex items-center justify-center space-x-1">
          <GoLocation className="text-sm" />
          <p className="text-sm">{`${location}`}</p>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <BsLink45Deg className="text-sm" />
          <a
            href="https://www.slicingcode.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="cursor-pointer text-sm">{`${blog}`}</p>
          </a>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <BsTwitter className="text-sm" />
          <a
            href="https://twitter.com/SlicingCode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm">{`${twitter_username}`}</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;

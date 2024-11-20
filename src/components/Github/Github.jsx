import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData();
    //const [data,setData]=useState([]);
    const [repos, setRepos] = useState([]);
     useEffect(()=>{
    //      fetch("https://api.github.com/users/SubhashKumar1612")
    //     //fetch("https://www.instagram.com/web/search/topsearch/?context=blended&query=${subhashraja143}")
    //     .then(response => response.json())
    //     .then(data=>{
    //         //console.log(data);
    //         setData(data);
    //     });

        // Fetch repository data
    fetch("https://api.github.com/users/SubhashKumar1612/repos")
    .then(response => response.json())
    .then(repoData => {
      setRepos(repoData);
    });
        
    },[])
  return (
    <>
    <div className='flex justify-around items-center p-4 bg-gray-600'>
        <div><img src={data.avatar_url} alt='Git picture' width={300}  className="rounded-full" /></div>
        <div>
        <div className='text-center m-4 text-3xl text-white p-4'>Github follower :{data.followers}</div>
        <div className='text-center m-4 text-3xl text-white p-4'>Github following :{data.following}</div>
        <div className='text-center m-4 text-3xl text-white p-4'>Github Reposetory :{data.public_repos}</div>
        </div>
    </div>
   
    <div className="text-center p-4">
        <h2 className="text-2xl font-bold mb-4">Repository List:</h2>
        <ul className="list-disc text-left m-auto p-4 w-2/3 bg-gray-200 rounded">
          {repos.map(repo => (
            <li key={repo.id} className="my-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {repo.name}
              </a>
              <p className="text-gray-600">{repo.description || "No description available"}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Github;
export const githubInfoLoader=async()=>{
   const response=await fetch("https://api.github.com/users/SubhashKumar1612")
   return response.json();
};
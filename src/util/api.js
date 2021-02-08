const init = {
    method: 'GET',
    headers: {Authorization: 'token dc15b58d0b7ca437be419b4cea8ce9aa6e5ab5a9'}
}

export const fetchUser = async (userLogin) => {
    const response = await fetch(`https://api.github.com/users/${userLogin}`, init);
    const dataJson = await response.json();
    return mapUser(dataJson);
}

export const fetchRepositories = async (repositoriesURL) => {
    const response = await fetch(repositoriesURL, init);
    const dataJson = await response.json();
    return dataJson.map(mapRepo);
}

export const fetchFollow = async (followURL) => {
    const response = await fetch(followURL, init);
    const dataJson = await response.json();
    
    return dataJson.map(mapFollow);
}


const mapUser =  user => {
    const  data =  {
        id,
        avatar_url,
        bio,
        email,
        followers,
        following,
        location,
        name,
        login,
        public_repos,
        repos_url,
    } = user;

    return {
        id,
        avatar_url,
        bio,
        email,
        followers,
        following,
        location,
        login,
        name,
        public_repos,
        repos_url,
    };
}

const mapRepo = repo => {

    const {
        id,
        name,
        description,
        stargazers_count,
    } = repo;

    return {
        id,
        name,
        description,
        stars: stargazers_count,
    };
}

const mapFollow = follower => {
    const {
        id,
        avatar_url,
        login,
    } = follower;

    return {
        id,
        avatar_url,
        login,
    };
}
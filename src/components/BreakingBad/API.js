import axios from 'axios';

const BaseUrl = 'https://www.breakingbadapi.com/api/';

export const getEpisodes = async () => {
    
    const episodesData = await axios.get(`${BaseUrl}episodes`);
    
    // console.log(episodesData);

    return episodesData.data;
}

export const getCharacters = async () => {
    const characters = await axios.get(`${BaseUrl}characters`);
    console.log(characters);
    return characters.data;
}
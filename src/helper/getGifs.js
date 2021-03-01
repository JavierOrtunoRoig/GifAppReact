const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=P8GTmmfIhasYPGn2DNqVSlvjEcij1g2v`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            ulr: img.images?.downsized_medium.url
        }
    });
    return gifs;
};

export default getGifs;
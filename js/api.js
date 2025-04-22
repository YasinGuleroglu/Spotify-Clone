const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "e52e3bfef4msh2b3dc66d0cfb4a8p16624ejsn1c91d9af0240",
    "x-rapidapi-host": "shazam.p.rapidapi.com",
  },
};

export class API {
  
  async getPopular() {

    try {
      // Api'a istek at
      const response = await fetch(
        "https://shazam.p.rapidapi.com/search?term=duman",
        options
      );
     
      const data = await response.json();

     
      const formattedData = data.tracks.hits.map((item) => item.track);

      

      return formattedData;
    } catch (error) {
     
      alert(error);
    }
  }
  
  async getSearchMusics(query) {
    
    try {
      // Api'a istek at
      const res = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${query}`,
        options
      );
    
      const data = await res.json();

      const formattedData = data.tracks.hits.map((item) => item.track);

     

      return formattedData;
    } catch (error) {
     
      alert(error);
    }
  }
}

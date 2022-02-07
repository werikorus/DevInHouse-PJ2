
export const getGameDetails = async (idGame) => {
 
  try{
    const data = await fetch(`https://mmo-games.p.rapidapi.com/game?id=${idGame}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "d677fd7569msh9a6e3c5b9b18132p1bd5b2jsna73f935e12bd"
        }      
      });
      
      if(data){
        const listItems = await data.json();
        console.log(data.status);
        return listItems;
      }
      
  }catch(error){
    console.log(error);
  }
};

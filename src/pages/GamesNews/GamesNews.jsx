import {React, useState, useRef, useEffect}  from "react";
import { Pagination } from "../../Components/Pagination";
import { getAllGamesNews } from '../../Services/newsGameAPI';
import { Content, SearchingArea } from "./GamesNewsSyles";
import { InputArea } from "../../Components/InputArea";
import { Loading } from "../../Components/Loading";
import { MessageBox } from "../../Components/MessageBox";
import { Typography } from "../../Components/Typography";
import { ToolBar } from "../../Components/ToolBar";


export const GamesNews = (props) =>{
  const gamesNews = useRef([]);
  const maxQtdPages = Math.ceil(gamesNews.current.length / 20);

  const [gamesNewsFiltered, setgamesNewsFiltered] = useState([]);
  const [termSearching, settermSearching] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  
  const topElement = useRef();
  const handleBacktoTop=()=>{
    topElement.current.scrollIntoView({behavior: "smooth"});
  }
    
   
  useEffect(()=>{(
    async ()=>{
      const list = await getAllGamesNews();      
      gamesNews.current = list;
      setgamesNewsFiltered(filterListByPage(gamesNews.current, page));               
      setIsLoading(true);      
    })();
  },[]);

  
  const filterListByTermSearching = (list, term) => {
    return list.filter((gamesNews) => {
      return new RegExp(term, "ig").test(gamesNews.title);
    });
  };

  const filterListByPage = (list, page) =>{
    const amount_Items = 20;
    return list.slice((page * amount_Items) - amount_Items, page * amount_Items);
  }

  useEffect(()=>{
    setgamesNewsFiltered(filterListByTermSearching(gamesNews.current, termSearching));
  },[termSearching]);
  
  useEffect(()=>{
    setgamesNewsFiltered(filterListByPage(gamesNews.current, page));
  },[page]);
   
  const handlePreviousPage = () =>{
    setPage((currentPage) => (currentPage > 1 ? currentPage - 1 : 1));
    handleBacktoTop()
  }
  
  const handleNextPage = () =>{
    setPage((currentPage)=>(currentPage >= maxQtdPages ? maxQtdPages: currentPage + 1 ));
    handleBacktoTop()
  }

  const renderContentAPI = () => {
    if(!isLoading){
        return(
          <>
            <Typography str="Loading..." color="white"/>
            <Loading/>
          </>) 
      }else{
      if(gamesNewsFiltered.length===0){
        return <MessageBox messsage={gamesNewsFiltered.status}/>;
      }
    }
    const pageInfo =  {
      currentPage: page,
      totalPages: maxQtdPages
    }
    return(
      <>
        <Typography str="Games" color="white"/>
        <Pagination 
          Items={gamesNewsFiltered}
          PageInfos={pageInfo}
          hasNext={true} 
          hasPrevious={true}
          handlePrevious={handlePreviousPage}
          handleNext={handleNextPage}
          typeCard={1}
          ref={topElement}
        />  
      </>
    );
  }
    
  return (
    <Content>
      <ToolBar />
      <SearchingArea>
        <InputArea 
          placeholder="search here..."
          onChange={(event) =>{
            settermSearching(event.target.value);            
          }}
        /> 
      </SearchingArea>      
      {renderContentAPI()}  
    </Content>
  );
}

import {React, useState, useRef, useEffect}  from "react";
import { ButtonAction } from "../../Components/ButtonAction";
import { Pagination } from "../../Components/Pagination";
import { getAllNews } from './../../Services/latestNewsAPI';
import { Content, SearchingArea } from "./LatestNewsSyles";
import { InputArea } from "../../Components/InputArea";
import { Loading } from "../../Components/Loading";
import { MessageBox } from "../../Components/MessageBox";
import { ToolBar } from "../../Components/ToolBar";


export const LatestNews = (props) =>{
  const latestNews = useRef([]);
  const maxQtdPages = Math.ceil(latestNews.current.length / 10);

  const [latestNewsFiltered, setlatestNewsFiltered] = useState([]);
  const [termSearching, settermSearching] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
    
   
  useEffect(()=>{(
    async ()=>{
      const list = await getAllNews();      
      latestNews.current = list;
      setlatestNewsFiltered(filterListByPage(latestNews.current, page));               
      setIsLoading(true);      
    })();
  },[]);

  
  const filterListByTermSearching = (list, term) => {
    return list.filter((latestNews) => {
      return new RegExp(term, "ig").test(latestNews.title);
    });
  };

  const filterListByPage = (list, page) =>{
    const amount_Items = 10;
    return list.slice((page * amount_Items) - amount_Items, page * amount_Items);
  }

  useEffect(()=>{
    setlatestNewsFiltered(filterListByTermSearching(latestNews.current, termSearching));
  },[termSearching]);
  
  useEffect(()=>{
    setlatestNewsFiltered(filterListByPage(latestNews.current, termSearching));
  },[page]);
   
  const handlePreviousPage = () =>{
    setPage((currentPage) => (currentPage > 1 ? currentPage - 1 : 1));
    console.log(`Apertou para a anterior! ${page}`)
  }
  
  const handleNextPage = () =>{
    setPage((currentPage)=>(currentPage >= maxQtdPages ? maxQtdPages: currentPage ))
    console.log(`Apertou para a próxima! ${page}`)
  }


  const renderContentAPI = () => {
   
    if(!isLoading){
      return <Loading/>
    }else{
      if(latestNewsFiltered.length===0){
        return <MessageBox messsage="Results not found !"/>;
      }
    }

    const pageInfo =  {
      currentPage: page,
      totalPages: maxQtdPages
    }

    return(
      <Pagination 
        Items={latestNewsFiltered}
        PageInfos={pageInfo}
        hasNext={true} 
        hasPrevious={true}
        handlePrevious={handlePreviousPage}
        handleNext={handleNextPage}
        typeCard={2}
      />  
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

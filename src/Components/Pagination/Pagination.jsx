import React, { useRef } from 'react';
import { Section, GamesCardsArea,  PageInfo, InfoArea } from './PaginationStyles';
import { ButtonAction } from '../ButtonAction';
import { GamesCard } from './../GamesCard'
import { NewsCard } from './../NewsCard'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

export const Pagination= (props)=>{

  const { 
    Items, 
    PageInfos, 
    hasNext, 
    hasPrevious,
    handleNext,
    handlePrevious,
    typeCard
   } = props;

  const topElement = useRef();

  const handleBacktoTop=()=>{
    topElement.current.scrollIntoView({behavior: "smooth"});
  }


  const renderCards = (type) =>{
    if(type===1){
      return(
        <GamesCardsArea>
          {Items.map((item, key)=>        
            <GamesCard
              id={item.id}
              image={item.thumbnail} 
              title={item.title}
              shortDescription={item.short_description}
              details={item.article_content}
              urlDetail={item.article_url}
            />
          )}
        </GamesCardsArea>
      );
    }else{
      return(
        Items.map((item, key)=>        
          <NewsCard
            id={item.id}
            image={item.thumbnail} 
            title={item.title}
            shortDescription={item.short_description}
            details={item.article_content}
            urlDetail={item.article_url}
            urlNews={item.article_url}
          />
        )
      );
    }
  };

  return(
    <Section ref={topElement}>
      {renderCards(typeCard)}
      <InfoArea>      
        <ButtonAction 
          str={<BiLeftArrow/>} 
          disabled={hasPrevious} 
          action={handlePrevious}         
        />        

        <PageInfo> Page {PageInfos.currentPage} of {PageInfos.totalPages} </PageInfo> 

        <ButtonAction 
          str={<BiRightArrow/>} 
          disabled={hasNext} 
          action={handleNext}         
        />

        <ButtonAction
          str="Back to Top"
          action={handleBacktoTop}
        />
      </InfoArea>
    </Section>
  );
};
import './Seasons.scss'
import AccordionGroup from "@/Components/AccordionGroup";
import seasonItems from "@/Components/Seasons/seasonItems";
import Accordion from "@/Components/Accordion";
import EpisodeCard from "@/Components/EpisodeCard";

const Seasons = () => {

    return (
       <AccordionGroup
           className='seasons'
       mode='dark'
       isOrderedList = {false}
       >
           {seasonItems.map(({title, subtitle, episodes},index) => (
               <Accordion
                   title={title}
                   titleLevelClassName='h4'
                   subtitle={subtitle}
                   id={`seasons-${index}`}
                   name='seasons'
                   inOpen={index === 0}
                   key={index}
                   isArrowButton
               >
                   <ul className="seasons__list">
                       {episodes.map((episode, index)=> (
                           <li className="seasons__item"
                           key={index}>
                               <EpisodeCard {...episode}/>
                           </li>
                       ))}
                   </ul>
              </Accordion>
           ))}
       </AccordionGroup>
    )
}

export default Seasons
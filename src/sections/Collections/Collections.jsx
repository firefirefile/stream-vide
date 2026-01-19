import './Collections.scss'
import Tabs from "@/Components/Tabs";
import collectionGroups from "@/sections/Collections/collectionGroups";
import getIdFromTitle from "@/utils/getIdFromTitle";
import Section from "@/layouts/Section";
import SliderNavigation from "@/Components/Slider/components/SliderNavigation";
import Slider from "@/Components/Slider";
import CategoryCard from "@/Components/CategoryCard";
import MovieCard from "@/Components/MovieCard";

const Collections = (props) => {

    return (
       <Tabs
       className = "collections container"
       title = "Collections"
       isEnableOnlyOnMobile
       items={collectionGroups.map((collectionGroup) =>({
            isActive: collectionGroup.isActive,
           title: collectionGroup.title,
           children: (
               <div className="collections__group">
                <p className="collections__title hidden-mobile">
                    {collectionGroup.title}
                </p>
                   {collectionGroup.items.map((collectionItem, index)=> {
                       const {
                           title,
                           categoryItems,
                           sliderParams,
                           movieItems,
                       } = collectionItem;

                       const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`
                       const titleId = `${titleFormatted}-title`
                       const sliderNavigationId = `${titleFormatted}-slider-navigation`

                       return (
                           <Section
                           className="collections__section"
                           title={title}
                           titleId={titleId}
                           actions={(
                               <SliderNavigation
                               id={sliderNavigationId}
                               mode="tile"
                               />
                           )}
                           isActionsHiddenOnMobile
                           key={index}
                           >
                                <Slider
                                sliderParams={sliderParams}
                                navigationTargetElementId={sliderNavigationId}
                                isBeyondViewportOnMobileS
                                >
                                    {categoryItems?.map((categoryItem, index)=> (
                                        <CategoryCard
                                            {...categoryItem}
                                            key={index}
                                        />
                                    )) ?? movieItems?.map((movieItem, index)=> (
                                        <MovieCard
                                            {...movieItem}
                                            key={index}
                                        />
                                    ))}
                                </Slider>
                           </Section>
                       )


                   })}
               </div>
           )
       }))}
       />
    )
}

export default Collections 
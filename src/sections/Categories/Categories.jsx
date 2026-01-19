import './Categories.scss'
import classNames from 'classnames'
import Section from "@/layouts/Section";
import CategoryCard from "@/Components/CategoryCard";
import Slider from "@/Components/Slider";
import SliderNavigation from "@/Components/Slider/components/SliderNavigation";
import categoryItems from "./categoryItems";

const Categories = (props) => {
    const {
        className,
    } = props



    const sliderNavigationId = 'categories-slider-navigation'

    return (
        <Section
            title='Explore our wide variety of categories'
            titleId='categories-title'
            description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
            actions={
               (
                  <SliderNavigation
                      mode="tile"
                  id={sliderNavigationId}
                  />
               )}
            isActionsHiddenOnMobile
        >
          <Slider
          navigationTargetElementId={sliderNavigationId}
          isBeyondViewportOnMobileS
          >
              {categoryItems.map((categoryItem, index) => (
                  <CategoryCard
                      {...categoryItem}
                      key={index}
                  />
              ))}
          </Slider>

        </Section>
    )
}

export default Categories
import './CategoryCard.scss'
import classNames from 'classnames'
import {Image} from "minista";
import Icon from "@/Components/Icon";
import Badge from "@/Components/Badge";

const CategoryCard = (props) => {
    const {
        title,
        images = [],
        badge,
    } = props

    return (
        <a href="/movie" className="category-card">
            <div className="category-card__images">
                {images.map((imgSrc, index) => (
                    <Image
                        className='category-card__image'
                        src={imgSrc}
                        key={index}
                    />
                ))}
            </div>
            <div className="category-card__body">
                <h3 className="category-card__title">
                    {badge && (
                        <Badge
                        className="category-card__badge"
                        mode="accent"
                        isBig
                        >
                            {badge}
                        </Badge>
                    )}
                    <span>{title}</span>
                </h3>
                <Icon
                className='category-card__icon'
                name="arrow-right"/>
            </div>
        </a>
    )
}

export default CategoryCard
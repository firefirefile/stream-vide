import './MovieCard.scss'
import classNames from 'classnames'
import Badge from "@/Components/Badge";
import {Image} from "minista";
import RatingView from "@/Components/RatingView";

const MovieCard = (props) => {
    const {
        title,
        imgSrc,
        duration,
        views,
        released,
        rating,
        season,
        href = '/movie',
    } = props

    return (
        <a href={href} className="movie-card"
           title={title}
        >
            <h3 className="visually-hidden">{title}</h3>
            <Image
            src={imgSrc}
            className='movie-card__image'
            />
            <div className="movie-card__body">
                {duration && (
                    <Badge
                    iconName="clock"
                    iconAriaLabel="Duration"
                    hasFillIcon
                    >
                        {duration}
                    </Badge>
                )}

                {season && (
                    <Badge
                        iconName="catalog"
                        hasFillIcon
                    >
                        {season}
                    </Badge>
                )}

                {rating && (
                    <Badge
                    className="movie-card__rating-badge"
                    >
                        <RatingView {...rating} />
                    </Badge>
                )}

                {views && (
                    <Badge
                        iconName="eye"
                        iconAriaLabel="Views"
                        hasFillIcon
                    >
                        {views}

                    </Badge>
                )}
                {released && (
                    <Badge
                        className="movie-card__released-badge"
                        isBig
                    >
                        Released at <time
                        dateTime={released.dateTime}
                        className="movie-card__released-badge-label"
                    >{released.label}</time>
                    </Badge>
                )}

            </div>
        </a>
    )
}

export default MovieCard
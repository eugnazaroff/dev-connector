import React from 'react'
import './EventCard.scss'
const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <h3 className="event-card__title">{event.title}</h3>
            <img className="event-card__image" src={event.image} alt="" />
            <p className="event-card__description">{event.description}</p>
        </div>
    )
}

export default EventCard

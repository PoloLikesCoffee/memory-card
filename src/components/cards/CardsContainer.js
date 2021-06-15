import React from 'react';
import CardItem from './CardItem';

const CardsContainer = ({ cards, handleClick }) => {
	const cardItems = cards.map((card) => (
		<CardItem
			key={card.id}
			id={card.id}
			card={card}
			handleClick={handleClick}
		/>
	));
	return <div className="cards-container">{cardItems}</div>;
};

export default CardsContainer;

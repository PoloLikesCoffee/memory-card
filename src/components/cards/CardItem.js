import React from 'react';

const CardItem = ({ card, id, handleClick }) => {
	return (
		<div className="card" onClick={handleClick} data-card={id}>
			<img src={card.sprite} alt={card.name} />
			<h3>{card.name}</h3>
		</div>
	);
};

export default CardItem;

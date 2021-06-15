import React, { useState, useEffect } from 'react';
import CardsContainer from './cards/CardsContainer';
import ScoreboardContainer from './scoreboard/ScoreboardContainer';
import LevelBoardContainer from './levelboard/LevelBoardContainer';

const Main = () => {
	const numberCards = 0;
	//const numberCards = 14;
	const [cards, setCards] = useState([]);
	const [currentScore, setCurrentScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickedCards, setClickedCards] = useState([]);

	// useEffect(() => {
	// 	const loadCards = async () => {
	// 		setCards(shuffleCards(await fetchCards(numberCards)));
	// 	};
	// 	loadCards();
	// }, []);

	useEffect(() => {
		loadCards(numberCards);
	}, []);

	// start game
	const loadCards = async (numberCards) => {
		setCards(shuffleCards(await fetchCards(numberCards)));
	};

	// get cards elements from poke API
	const fetchCards = async (nb) => {
		const cards = [];
		for (let i = 1; i <= nb; i++) {
			const response = await fetch(`https://pokeapi.co/api/v2/item/${i}/
            `);
			const card = await response.json();
			const name = capitalizeFirstLetter(card.name);
			const id = card.id;
			const sprite = card.sprites.default;
			cards.push({ name, id, sprite });
		}
		return cards;
	};

	// shuffle the cards randomly
	const shuffleCards = (array) => {
		let currentIndex = array.length,
			randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			// And swap it with the current element
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}
		return array;
	};

	// capitalize first letter of the card name
	const capitalizeFirstLetter = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	// handle click on card
	const handleClick = (event) => {
		//console.log(event.target.parentNode.dataset.card);
		const cardId = event.target.parentNode.dataset;
		if (clickedCards.includes(cardId)) {
			resetGame();
		} else {
			incrementScore(cardId);
		}
	};

	// reset game
	const resetGame = () => {
		setClickedCards([]);
		setCurrentScore(0);
	};

	// increment score when clicked and add clicked card to clickedCards array
	const incrementScore = (cardId) => {
		const newScore = currentScore + 1;
		if (newScore > bestScore) setBestScore(newScore);
		setCurrentScore(newScore);
		setClickedCards((prevState) => [...prevState, cardId]);
		setCards(shuffleCards(cards));
	};

	// level difficulty
	const setGameLvlEasy = (event) => {
		console.log('Level EASY');
		loadCards(7);
		resetGame();
		setBestScore(0);
	};
	const setGameLvlNormal = (event) => {
		console.log('Level NORMAL');
		loadCards(14);
		resetGame();
		setBestScore(0);
	};
	const setGameLvlHard = (event) => {
		console.log('Level HARD');
		loadCards(21);
		resetGame();
		setBestScore(0);
	};

	return (
		<div className="main">
			<ScoreboardContainer currentScore={currentScore} bestScore={bestScore} />
			<LevelBoardContainer
				setGameLvlEasy={setGameLvlEasy}
				setGameLvlNormal={setGameLvlNormal}
				setGameLvlHard={setGameLvlHard}
			/>
			<CardsContainer cards={cards} handleClick={handleClick} />
		</div>
	);
};

export default Main;

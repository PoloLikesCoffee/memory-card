import React from 'react';

const ScoreboardContainer = ({ currentScore, bestScore }) => {
	return (
		<div className="scoreboard-container">
			<div className="current-score">Current score = {currentScore}</div>
			<div className="best-score">Best score = {bestScore}</div>
		</div>
	);
};

export default ScoreboardContainer;

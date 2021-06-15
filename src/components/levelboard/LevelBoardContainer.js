import React from 'react';

const LevelBoardContainer = ({
	setGameLvlEasy,
	setGameLvlNormal,
	setGameLvlHard,
}) => {
	return (
		<div className="level-container">
			<button className="btn" onClick={setGameLvlEasy}>
				easy
			</button>
			<button className="btn" onClick={setGameLvlNormal}>
				normal
			</button>
			<button className="btn" onClick={setGameLvlHard}>
				hard
			</button>
		</div>
	);
};

export default LevelBoardContainer;

import { useState } from 'react';

export const useCounter = (inital = 0, min, max) => {
	const [counter, setCounter] = useState(inital);

	// console.log(renderCount)
	let handleSum = () => {
		if (counter < max) {
			setCounter(counter + 1);
		}
	};

	let handleRes = () => {
		if (counter > min) {
			// 1>1
			setCounter(counter - 1);
		}
	};

	return { counter, handleSum, handleRes };
};

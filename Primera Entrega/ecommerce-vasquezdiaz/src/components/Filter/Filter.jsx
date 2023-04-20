import { useState } from 'react';

const Filter = ({ children }) => {
	// children función
	const [filterState, setFilterState] = useState('');

	const handleFilterChange = (evt) => {
		setFilterState(evt.target.value);
	};

	return children({ filterState, handleFilterChange });
};
export default Filter;

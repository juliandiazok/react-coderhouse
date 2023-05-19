import { useCounter } from '../../hook/useCounter';

const ItemCount = ({ inital = 1, stock, onAdd }) => {
	const { counter, handleRes, handleSum } = useCounter(inital, 1, stock);

	const styles = {
		counter: {
			marginLeft: '5px',
			marginRight: '5px',
		},
	};

	return (
		<>
			<button onClick={handleSum} style={styles.counter}>
				{' '}
				+ 1
			</button>
			<label> {counter} </label>
			<button onClick={handleRes} style={styles.counter}>
				{' '}
				- 1
			</button>
			<button
				onClick={() => {
					onAdd(counter);
				}}>
				Agregar al carrito
			</button>
		</>
	);
};

export default ItemCount;

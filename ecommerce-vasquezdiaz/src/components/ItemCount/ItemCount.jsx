import { useCounter } from '../../hook/useCounter';

const ItemCount = ({ inital = 1, stock = 10, onAdd }) => {
	const { counter, handleRes, handleSum } = useCounter(inital, 1, stock);

	return (
		<center>
			<button onClick={handleSum}> + 1</button>
			<label>{counter}</label>
			<button onClick={handleRes}> - 1</button>
			<button
				onClick={() => {
					onAdd(counter);
				}}>
				Agregar al carrito
			</button>
		</center>
	);
};

export default ItemCount;

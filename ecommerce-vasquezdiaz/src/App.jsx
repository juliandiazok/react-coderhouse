import './App.css';
import Menu from './components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const styles = {
		app: {
			backgroundColor: 'orange',
			width: '99vw',
			height: '100vh',
		},
	};

	return (
		<div className='App' style={styles.app}>
			<Menu />
		</div>
	);
}

export default App;

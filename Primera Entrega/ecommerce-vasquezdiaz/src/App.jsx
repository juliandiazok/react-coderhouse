import './App.css';
import Menu from './components/Menu/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		<div className='App' style={{
			backgroundColor: 'orange',
			width: '100vw',
        	height: '100vh'
		  }}>
			<Menu />
		</div>
	);
}

export default App;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/loguito.png';

function NavbarLight() {
	const styles = {
		navButton: {
			marginLeft: '5px',
		},
	};

	const categories = [
		{id: 1, category: 'Balanceado', name: 'Balanceado', description: 'Aqui se muestran los elementos de la categoria alimentos balanceados'},
		{id: 2, category: 'Accesorios', name: 'Accesorios', description: 'Aqui se muestran los elementos de la categoria accesorios'},
	]

	return (
		<>
			<br />
			<Navbar bg='light' variant='light'>
				<Container>
					<Link to='/'>
						<Navbar.Brand>
							<img
								src={logo}
								width='130'
								height='30'
								className='d-inline-block align-top'
								alt='Ponzoo'
							/>
						</Navbar.Brand>
					</Link>
					<Nav className='me-auto'>
						{categories.map(category => <div key={category.id}><div style={styles.navButton}>
							<NavLink
								key={category.id}
								to={`/category/${category.category}`}
								className={({ isActive }) =>
									isActive ? 'btn btn-warning' : 'btn btn-outline-warning'
								}>
								{category.name}
							</NavLink>
						</div></div>)}
					</Nav>
				</Container>
				<Navbar.Collapse className='justify-content-end'>
					<Link className='' to='/cart'>
						<CartWidget />
					</Link>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default NavbarLight;

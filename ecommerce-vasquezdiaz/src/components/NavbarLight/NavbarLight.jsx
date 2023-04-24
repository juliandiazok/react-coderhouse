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
						<div style={styles.navButton}>
							<NavLink
								to='/categoria/Balanceado'
								className={({ isActive }) =>
									isActive ? 'btn btn-warning' : 'btn btn-outline-warning'
								}>
								Balanceados
							</NavLink>
						</div>
						<div style={styles.navButton}>
							<NavLink
								to='/categoria/Accesorios'
								className={({ isActive }) =>
									isActive ? 'btn btn-warning' : 'btn btn-outline-warning'
								}>
								Accesorios
							</NavLink>
						</div>
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

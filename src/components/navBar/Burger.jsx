import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { routes } from '../../constant/routes';
import styles from '../../styles/nav.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

const Burger = () => {
  return (
    <>
    {[false, ].map((expand) => (
      <Navbar key={expand} expand={expand} className=" mb-3" variant='dark'>
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
             
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to={routes.top_rated}>
                <h3 className={`${styles.movie_list_navBar} cursor_pointer`}>Top rated </h3> 
              </Link>
              <Link to={routes.upcoming}>
                <h3 className={`${styles.movie_list_navBar} cursor_pointer`}>Upcoming</h3>
              </Link>
              <Link to={routes.popular_on_db}>
                <h3  className={`${styles.movie_list_navBar} cursor_pointer`}>Popular On DB</h3>
              </Link>
            </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  )
}

export default Burger
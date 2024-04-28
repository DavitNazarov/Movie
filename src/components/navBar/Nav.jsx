import styles from '../../styles/nav.module.css';
import '../../styles/main.css';
import indexStyle from '../../index.module.css';
import {Link} from 'react-router-dom';
import {routes} from '../../constant/routes';
import Burger from './Burger';

const Nav = () => {
  return (
    <nav className={`${styles.movies_page__nav} ${styles.navBar} position_fixed_navbar ${indexStyle.body_color}`}>
      <h1 className={`${styles.movie_nav_title} cursor_pointer user_select_none` } >Movie db</h1>
      <div className={styles.nav_text}>
          <Link to={routes.top_rated}>
            <h3 className={`${styles.movie_list_navBar} cursor_pointer`}>Top rated </h3> 
          </Link>
          <Link to={routes.home}>
            <h3 className={`${styles.movie_list_navBar} cursor_pointer`}>Home</h3>
          </Link>
          <Link to={routes.popular_on_db}>
            <h3  className={`${styles.movie_list_navBar} cursor_pointer`}>Popular On DB</h3>
          </Link>
      </div>
      <div className={styles.burger}>
        <Burger/>
      </div>
    </nav>
  )
}

export default Nav
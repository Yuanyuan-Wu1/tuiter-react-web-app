import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav() {
    return (
        <nav className={styles.nav}>
            <NavLink 
                to="/" 
                className={({ isActive }) => 
                    isActive ? styles.activeLink : styles.link
                }
            >
                Labs
            </NavLink>
            {/* 其他导航链接 */}
        </nav>
    );
} 
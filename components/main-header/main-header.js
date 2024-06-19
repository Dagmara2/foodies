import Link from "next/link";
import styles from './main-header.module.css'

import MainHeaderBackground from "./main-header-background";
import logoImg from '@/assets/logo.png';
import Image from "next/image";
import NavLink from "./nav-link";

export default function MainHeader() {
    return <>
        <MainHeaderBackground />
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image src={logoImg} alt='logo' width={100} height={100} priority />
                Next Level Food</Link>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink href="/meals">Browse Meals</NavLink></li>
                    <li><NavLink href="/community">Foodies Community</NavLink></li>
                </ul>
            </nav>
        </header>
    </>
}
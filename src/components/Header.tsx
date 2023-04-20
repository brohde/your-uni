import Link from 'next/link'
import styles from '@/styles/Header.module.css'

const Header = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">YourUni</Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#" className={styles.currentLink}>Product</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header

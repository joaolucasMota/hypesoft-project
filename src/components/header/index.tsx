import styles from "./header.module.css"

export function Header() {
  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.menu}>
        <nav className={styles.menuItens}>
          <ul>
            <li><a href="#About-Section">about</a></li>
            <li><a href="#Services-Section">services</a></li>
            <li><a href="#">works</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
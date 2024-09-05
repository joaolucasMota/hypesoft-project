import styles from "./hero.module.css"

import { Button, SocialButton } from "../buttons";

export function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroLeft}>
        <div className={styles.heroInfo}>
          <h1 className="font-heading-01">Hello, I’m John, a <span className="span-purple"><span className="purple-highlighter">Software Engine</span>er.</span></h1>
          <p className="font-body-xl">Product Designer, UI/UX Designer, and developer based in Brazil. Over the past 17 years, as an art director and designer, I’ve worked with big companies and up-and-coming startups.</p>
          <div className={styles.heroButtons}>
            <Button text="Hire Me" />
            <Button secundary text="View work" />
          </div>
        </div>
        <div className={styles.heroLinks}>
          <p>Follow me on</p>
          <nav>
            <SocialButton icon="Dribbble"/>
            <SocialButton icon="Behance"/>
            <SocialButton icon="Facebook"/>
            <SocialButton icon="Twitter"/>
          </nav>
        </div>
      </div>
    </div>
  )
}

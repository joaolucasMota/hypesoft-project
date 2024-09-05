import styles from "./hero-section.module.css";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";


import HeroImage from "@/assets/hero_image.png";

export function HeroSection() {
    return (
        <div className={styles.heroSection} style={{
            backgroundImage: `url(${HeroImage.src})`,
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            maxWidth: '1920px',
            margin: 'auto',
            transition: '.25s'
          }}>
            <Header />
            <Hero />
        </div>
    )
}
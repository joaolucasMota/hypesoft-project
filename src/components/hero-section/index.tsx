import styles from "./hero-section.module.css";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";


export function HeroSection() {
    return (
        <div className={styles.heroSection} data-testid="hero-section">
            <Header />
            <Hero />
        </div>
    )
}
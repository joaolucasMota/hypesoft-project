import styles from "./banner-section.module.css";
import { Button } from "../buttons";


export function BannerSection() {
    return (
        <div className={styles.bannerContainer} data-testid="banner-section">
            <div className={styles.bannerSection} >
                <h2>Got a project in mind? Let's make something awesome <span className="span-pink">together</span>.</h2>
                <Button arrow text="Hire Me" />
            </div>
        </div>
    )
}
import styles from "./banner-section.module.css";
import { Button } from "../buttons";


import BannerBackground from "@/assets/images/banner.svg"

export function BannerSection() {
    return (
        <div className={styles.bannerContainer} data-testid="banner-section">
            <div className={styles.bannerSection} style={{
            backgroundImage: `url(${BannerBackground.src})`,
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
        }}>
                <h2>Got a project in mind? Let's make something awesome <span className="span-pink">together</span>.</h2>
                <Button arrow text="Hire Me" />
            </div>
        </div>
    )
}
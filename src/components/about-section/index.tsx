import styles from "./about-section.module.css";
import Image from "next/image";


import AboutImage from "@/assets/about_image.png";
import { Button } from "../buttons";

export function AboutSection() {
    return (
        <div className={styles.aboutSection} data-testid="about-section">
            <Image 
                src={AboutImage} 
                alt="About image"
                className={styles.aboutImage}
            />
            <div className={styles.aboutRigth}>
                <div className={styles.aboutText}>
                    <h2>Software Engineer and Infrastructure specialist based in Brazil.</h2>
                    <p>Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et interdum interdum.</p>
                </div>
                <div className={styles.aboutInfo}>
                    <div className={styles.aboutInfoItem}>
                        <span>17+</span>
                        <p>Years of Experience</p>
                    </div>
                    <div className="about-info-item">
                        <span>325+</span>
                        <p>Completed Projects</p>
                    </div>
                </div>
                <Button arrow text="Say Hi" />
            </div>
        </div>
    )
}
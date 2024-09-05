import styles from"./company-section.module.css";
import Image from "next/image";


import YoutubeLogo from "@/assets/logos/youtube_logo.svg";
import GoogleLogo from "@/assets/logos/google_logo.svg";
import AdobeLogo from "@/assets/logos/adobe_logo.svg";
import SketchLogo from "@/assets/logos/sketch_logo.svg";
import ArrowIconPurple from "@/assets/icons/arrow_right_purple.svg";


export function CompanySection() {
    return (
        <div className={styles.companyContainer}>
            <h2 className="font-heading-05">I worked with <span className="span-pink purple-highlighter">289+</span> Companies all over the World.</h2>
            <nav className={styles.companyList}>
                <ul>
                    <li className={styles.companyItem}>
                        <Image src={YoutubeLogo} alt="Youtube logo" />
                    </li>
                    <li className={styles.companyItem}>
                        <Image src={GoogleLogo} alt="Google logo" />
                    </li>
                    <li className={styles.companyItem}>
                        <Image src={AdobeLogo} alt="Adobe logo" />
                    </li>
                    <li className={styles.companyItem}>
                        <Image src={SketchLogo} alt="Sketch logo" />
                    </li>
                    <li>
                        <a href="#" className={styles.companyItem}>
                            <Image src={ArrowIconPurple} alt="arrow right icon" aria-label="Go to testimonials" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
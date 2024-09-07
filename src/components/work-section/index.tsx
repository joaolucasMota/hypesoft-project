import styles from "./work-section.module.css";
import Image from "next/image";

import ArrowIconBlack from "@/assets/icons/arrow_right_black.svg";
import work1 from "@/assets/images/work1.png";
import work2 from "@/assets/images/work2.png";
import work3 from "@/assets/images/work3.png";
import work4 from "@/assets/images/work4.png";
import work5 from "@/assets/images/work5.png";
import work6 from "@/assets/images/work6.png";





export function WorkSection() {
    return (
        <div className={styles.container} data-testid="work-section">

            <h2 className="font-heading-04">My Selected Work</h2>
            <hr />
            <div className={styles.cardsContainer}>

                <div className={styles.card}>
                    <Image src={work1} alt="Project one" className={styles.image} />
                    <div className={styles.footer}>
                        <p>Eduguard - E-learning Website</p>

                        <div className={styles.servicesItemFooter}>
                            <p className="font-button-02">View Project</p>
                            <Image src={ArrowIconBlack} alt="Arrow Icon" />
                        </div>

                    </div>
                </div>

                <div className={styles.card}>
                    <Image src={work2} alt="Project one" className={styles.image} />
                    <div className={styles.footer}>
                        <p>Eduguard E-learning Website</p>

                        <div className={styles.servicesItemFooter}>
                            <p className="font-button-02">View Project</p>
                            <Image src={ArrowIconBlack} alt="Arrow Icon" />
                        </div>

                    </div>
                </div>

                <div className={styles.card}>
                    <Image src={work3} alt="Project one" className={styles.image} />
                    <div className={styles.footer}>
                        <p>Huma Marketing Agency</p>

                        <div className={styles.servicesItemFooter}>
                            <p className="font-button-02">View Project</p>
                            <Image src={ArrowIconBlack} alt="Arrow Icon" />
                        </div>

                    </div>
                </div>

                <div className={styles.card}>
                    <Image src={work4} alt="Project one" className={styles.image} />
                    <div className={styles.footer}>
                        <p>Beeryblog Blog Website</p>

                        <div className={styles.servicesItemFooter}>
                            <p className="font-button-02">View Project</p>
                            <Image src={ArrowIconBlack} alt="Arrow Icon" />
                        </div>

                    </div>
                </div>

                <div className={styles.card}>
                    <Image src={work5} alt="Project one" className={styles.image} />
                    <div className={styles.footer}>
                        <p>Educare Elearning website</p>

                        <div className={styles.servicesItemFooter}>
                            <p className="font-button-02">View Project</p>
                            <Image src={ArrowIconBlack} alt="Arrow Icon" />
                        </div>

                    </div>
                </div>

                <div className={styles.card}>
                    <Image src={work6} alt="Project one" className={styles.image} />
                    <div className={styles.footer}>
                        <p>Blogy Blog Website</p>

                        <div className={styles.servicesItemFooter}>
                            <p className="font-button-02">View Project</p>
                            <Image src={ArrowIconBlack} alt="Arrow Icon" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
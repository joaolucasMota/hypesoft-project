import styles from "./contact-info.module.css";
import Image from "next/image";

import streetPoint from "@/assets/icons/streetPoint.svg";
import email from "@/assets/icons/email.svg";
import phone from "@/assets/icons/phone.svg";
import { SocialButton } from "../buttons";



export function ContactInfo() {
    return (
        <div className={styles.container} data-testid="contact-info">
            <h2>
                Get In Touch
            </h2>

            <div className={styles.infosContainer}>

                <div className={styles.info}>
                    <div className={styles.icon}>
                        <Image src={streetPoint} alt="Street icon" />
                    </div>

                    <p>
                        House #5, Street Number #98,<br /> brasilia-	70000-000, Brazil.
                    </p>
                </div>


                <div className={styles.info}>
                    <div className={styles.icon}>
                        <Image src={email} alt="Email icon" />
                    </div>

                    <div>
                        <p>
                            albert.design@gmail.com
                        </p>

                        <p>
                            albert.design@gmail.com
                        </p>
                    </div>
                </div>


                <div className={styles.info}>
                    <div className={styles.icon}>
                        <Image src={phone} alt="Phone icon" />
                    </div>

                    <div>
                        <p>
                            +55 955 258 2699
                        </p>

                        <p>
                            +55 955 258 2699
                        </p>
                    </div>
                </div>

                <div className={styles.socialButtons}>
                    <SocialButton circular icon="Dribbble"/>
                    <SocialButton circular icon="Behance"/>
                    <SocialButton circular icon="Facebook"/>
                    <SocialButton circular icon="Twitter"/>
                    <SocialButton circular icon="Instagram"/>
                </div>

            </div>

        </div>
    )
}
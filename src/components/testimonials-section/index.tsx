import styles from "./testimonials.module.css";
import Image from "next/image";

import StarIcon from "@/assets/icons/star_icon.svg";
import QuoteImage from "@/assets/images/quote.svg";

export function TestimonialsSection() {
    return (
        <div className={styles.testimonialsContainer}>
            <div>
                <h2 className="font-heading-04">Testimonial</h2>
                <hr />
            </div>
            <div className={styles.testimonials}>
                <div className={styles.testimonialList}>
                    <ul>
                        <li className={styles.testimonialItem} tabIndex={0}>
                            <div className={styles.testimoniaAvatarCircle}></div>
                            <div className={styles.testimoniaItemText}>
                                <h3 className="font-body-large">Sundar Pichai</h3>
                                <p className="font-body-small">CEO & Founder of <span className="span-pink">Google</span></p>
                            </div>
                        </li>
                        <li className={styles.testimonialItem} tabIndex={0}>
                            <div className={styles.testimoniaAvatarCircle}></div>
                            <div className={styles.testimoniaItemText}>
                                <h3 className="font-body-large">Shantanu Narayen</h3>
                                <p className="font-body-small">CEO of <span className="span-pink">Adobe</span></p>
                            </div>
                        </li>
                        <li className={styles.testimonialItem} tabIndex={0}>
                            <div className={styles.testimoniaAvatarCircle}></div>
                            <div className={styles.testimoniaItemText}>
                                <h3 className="font-body-large">Noah Levin</h3>
                                <p className="font-body-small">Director of Design, <span className="span-pink">Figma</span></p>
                            </div>
                        </li>
                        <li className={styles.testimonialItem} tabIndex={0}>
                            <div className={styles.testimoniaAvatarCircle}></div>
                            <div className={styles.testimoniaItemText}>
                                <h3 className="font-body-large">Stewart Butterfield</h3>
                                <p className="font-body-small">CEO & Founder of <span className="span-pink">Slack</span></p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.testimonialQuote}>
                    <div className={styles.quoteHeader}>
                        <div className={styles.quoteRating}>
                            <Image src={StarIcon} alt="Star Icon" width={32} height={32} />
                            <p>5.0 Star Rating</p>
                        </div>
                        <Image src={QuoteImage} alt="Quote Background" />
                    </div>
                    <q>If you're looking for someone who will challenge your UX/UI thinking and really cut to the core of what's important for users, then Jesse is your man. On top of that, he brings a level of enthusiasm to the craft that's energizing for everyone who works with him.</q>
                </div>
            </div>
        </div>
    )
}
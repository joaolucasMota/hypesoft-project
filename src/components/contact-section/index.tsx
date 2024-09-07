import styles from "./contact-section.module.css";

import { ContactForm } from "../contact-form";
import { ContactInfo } from "../contact-info";


export function ContactSection() {
    return (
        <div className={styles.container} data-testid="contact-section">
            <ContactForm />
            <ContactInfo/>
        </div>
    )
}
import styles from "./footer.module.css"
import Image from 'next/image'


import HypesoftLogo from "@/assets/hypesoft_logo.svg"

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <Image 
                    src={HypesoftLogo} 
                    alt="Hypesoft Logo"
                    width={262}
                    height={59} 
                />
                <p className="font-body-small">Made for <span className="span-purple">Hypesoft</span> code challenge</p>
            </footer>
        </>
    )
}
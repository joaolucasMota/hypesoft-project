import styles from "./service-section.module.css";
import Image from "next/image";

import UserIntefaceIcon from "@/assets/icons/ui_layers_icon.svg";
import BrandingIcon from "@/assets/icons/branding_design_icon.svg";
import ProductIcon from "@/assets/icons/product_design_icon.svg";
import FrontendIcon from "@/assets/icons/frontend_design_icon.svg";
import ArrowIconBlack from "@/assets/icons/arrow_right_black.svg";

export function ServicesSection() {
    return (
        <div className={styles.servicesSection}>
            <h2 className="font-heading-04">My Service</h2>
            <hr />
            <nav className={styles.servicesList}>
                <ul>
                    <li><a href="#" className={styles.servicesItem}>
                        <Image src={UserIntefaceIcon}
                            alt="UI icon"
                            height={40}
                            width={40}
                        />
                        <div className={styles.servicesItemText}>
                            <div>
                                <h3 className="font-heading-05">UI/UX Design</h3>
                                <div className={styles.servicesSeparator} />
                            </div>
                            <div className={styles.servicesItemFooter}>
                                <p className="font-button-02">Discuss now</p>
                                <Image src={ArrowIconBlack} alt="Arrow Icon"/>
                            </div>
                        </div>
                    </a></li>
                    <li><a href="#" className={styles.servicesItem}>
                        <Image src={ProductIcon}
                            alt="Product icon"
                            height={40}
                            width={40}
                        />
                        <div className={styles.servicesItemText}>
                            <div>
                                <h3 className="font-heading-05">Product Design</h3>
                                <div className={styles.servicesSeparator} />
                            </div>
                            <div className={styles.servicesItemFooter}>
                                <p className="font-button-02">Discuss now</p>
                                <Image src={ArrowIconBlack} alt="Arrow Icon"/>
                            </div>
                        </div>
                    </a></li>
                    <li><a href="#" className={styles.servicesItem}>
                        <Image src={BrandingIcon}
                            alt="Branding icon"
                            height={40}
                            width={40}
                        />
                        <div className={styles.servicesItemText}>
                            <div>
                                <h3 className="font-heading-05">Branding Design</h3>
                                <div className={styles.servicesSeparator} />
                            </div>
                            <div className={styles.servicesItemFooter}>
                                <p className="font-button-02">Discuss now</p>
                                <Image src={ArrowIconBlack} alt="Arrow Icon"/>
                            </div>
                        </div>
                    </a></li>
                    <li><a href="#" className={styles.servicesItem}>
                        <Image src={FrontendIcon}
                            alt="Frontend icon"
                            height={40}
                            width={40}
                        />
                        <div className={styles.servicesItemText}>
                            <div>
                                <h3 className="font-heading-05">Front End Development</h3>
                                <div className={styles.servicesSeparator} />
                            </div>
                            <div className={styles.servicesItemFooter}>
                                <p className="font-button-02">Discuss now</p>
                                <Image src={ArrowIconBlack} alt="Arrow Icon"/>
                            </div>
                        </div>
                    </a></li>
                </ul>
            </nav>
        </div>
    )
}
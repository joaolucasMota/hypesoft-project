import "./style.css";
import Image from "next/image";

import DribbbleIcon from "@/assets/icons/dribbble_logo.svg";
import BehanceIcon from "@/assets/icons/behance_logo.svg";
import FacebookIcon from "@/assets/icons/facebook_logo.svg";
import TwitterIcon from "@/assets/icons/twitter_logo.svg";
import YoutubeIcon from "@/assets/icons/youtube_logo.svg";
import InstagramIcon from "@/assets/icons/instagram_logo.svg";
import ArrowRight from "@/assets/icons/arrow_right.svg";

interface IButton {
    text: string,
    secundary?: boolean,
    arrow?: boolean
}

interface ISocialButton {
    icon: 'Dribbble' | 'Behance' | 'Facebook' | 'Twitter' | 'Youtube' | 'Instagram',
    secundary?: boolean,
    circular?: boolean
}

export function Button( {text, secundary, arrow}:IButton ) {
    return (
        <a className={`btn ${secundary ? 'btn-secundary' : 'btn-primary'}`} href="#">
            {text} { arrow ? <Image src={ArrowRight} alt="Arrow right icon" width={36} height={20} /> : ''}
        </a>
    )
}

export function SocialButton( {icon, secundary, circular}:ISocialButton ) {
    return (
        <a className={`social-btn ${secundary ? 'btn-secundary' : 'btn-primary'} ${circular ? 'btn-rounded' : ''}`} href="#">
            <Image src={
                    (icon == 'Dribbble') ? DribbbleIcon:
                    (icon == 'Behance') ? BehanceIcon :
                    (icon == 'Facebook') ? FacebookIcon :
                    (icon == 'Twitter') ? TwitterIcon :
                    (icon == 'Youtube') ?  YoutubeIcon:
                    (icon == 'Instagram') ? InstagramIcon :
                    ''
                } 
                alt={`${icon.toString()} link`}
                width={20} 
                height={20}
            />
        </a>
    )
}
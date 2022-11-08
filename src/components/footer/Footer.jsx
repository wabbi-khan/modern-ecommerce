import React from "react";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import css from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={css.footerWrapper}>
      <hr />
      <div className={css.footer}>
        <div className={css.logo}>
          <img src={Logo} alt='logo' />
          <span>anazom</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                nobis.
              </span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.Picon} />
              <span>01234568989</span>
            </span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                nobis.
              </span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>About Us</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.Licon} />
              <span>Sign In</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserIcon className={css.Licon} />
              <span>About Us</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.Licon} />
              <span>Safety Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>Copyright &copy;2022 by Amazon, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;

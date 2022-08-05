import React from "react";
import Subheader from "../SubHeader/Subheader";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <a aria-current="page" title="Home — Unsplash" href="/">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            version="1.1"
            aria-labelledby="unsplash-home"
            aria-hidden="false"
          >
            <title id="unsplash-home">Unsplash Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </a>
        <div style={{ width: "18px" }}></div>
        <div className={styles.inputparent}>
          <form className={styles.forminput1}>
            <button type="submit" className={styles.inptsearch}>
              <svg
                width="32"
                height="32"
                className={styles.inptsearchsvg}
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
              </svg>
            </button>
            <div className={styles.inptsearchtext}>
              <input
                type="text"
                name=""
                id=""
                className={styles.inptsearchtextinput}
                placeholder="Search free high-resolution photos"
              />
              <div
                id="react-autowhatever-1"
                role="listbox"
                className={styles.rMj7l}
              ></div>
            </div>
            <div
              style={{ display: "inline-block" }}
              id="popover-visual-search-form-nav"
            >
              <button
                tabIndex="0"
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
                title="Visual search"
                className={styles.inptqrdesign}
              >
                <svg
                  width="32"
                  height="32"
                  className={styles.inptqrdesignsvg}
                  viewBox="0 0 32 32"
                  version="1.1"
                  aria-hidden="false"
                >
                  <path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path>
                </svg>
              </button>
              <div role="menu" tabIndex="-1"></div>
            </div>
          </form>
        </div>
        <ul className={styles.inputrightlist}>
          <li className={styles.inputrightlistlistitems}>
            <a href="/#">
              <div>Explore</div>
            </a>
          </li>
          <li className={styles.inputrightlistlistitems}>
            <a href="/#">
              <div>Advertise</div>
            </a>
          </li>
          <li className={styles.inputrightlistlistitems}>
            <a href="/#">
              <div>Blog</div>
            </a>
          </li>
        </ul>
        <div className={styles.divider}></div>
        <div style={{ width: "21px" }}></div>
        <div className={styles.loginsignup}>
          <a href="#/">Log in</a>/<a href="#/">Sign up</a>
        </div>
        <button disabled="disabled" className={styles.submitphotobtn}>
          Submit <span>a photo</span>
        </button>
        <div style={{ width: "9px" }}></div>
        {/* <div className={styles.notificationbelldiv}>
          <button className={styles.notificationbellbutton}>
            <svg
              className={styles.notificationbellbuttonsvg}
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path d="M19.1263 28.2c-6.1826 2.1388-11.82761 1.2031-13.03726-2.4062-.40321-1.3368-.26881-2.6735.53762-4.144.40322-.6684.40322-1.7378.13441-2.5398l-.94084-3.0746c-.80643-2.1388-.53762-4.4113.26881-6.28281C6.62666 8.28215 7.5675 7.21273 8.91155 6.277l-.26881-.80206c-.40322-.80206.1344-1.87148.94083-2.13883l1.61283-.53471c.9409-.40103 1.8817.13368 2.1505 1.06942l.2688.80206c1.7473-.13368 3.3601.26735 4.8386 1.20309 1.6129 1.06941 2.8225 2.53985 3.4945 4.54503l1.0753 3.3419c.2688.6684.9408 1.6041 1.7472 1.8715 1.4785.5347 2.5537 1.4704 2.9569 2.8072 1.3441 3.3419-2.4193 7.6195-8.6019 9.7584zm6.0482-8.9564c-.5376-1.4704-4.3009-2.2725-9.4083-.5347s-7.52668 4.8124-6.98906 6.2828c.53762 1.4705 4.30096 2.2725 9.40836.5347s7.5267-4.8123 6.989-6.2828zm-10.0803 5.4808c-1.3441 0-2.4193-.6684-3.2257-1.6041-.1345-.1337-.1345-.4011 0-.5348.9408-.802 2.2848-1.6041 4.4353-2.4061.8064-.2674 1.6129-.5347 2.4193-.6684.2688 0 .4032.1337.4032.2673v.6684c0 1.6041-.9408 3.0746-2.2849 3.743.1344 0-.9408.5347-1.7472.5347z"></path>
            </svg>
            <span style={{ width: "11px", height: "11px" }}></span>
          </button>
          <div role="menu" tabIndex="-1"></div>
        </div>

        <div style={{ width: "6px" }}></div>
        <div className={styles.profilediv}>
          <button className={styles.profiledivbutton}>
            <div className={styles.imgsuperparent}>
              <div className={styles.imgparent}>
                <img
                  className={styles.profileimg}
                  loading="lazy"
                  srcset="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&amp;auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff 1x, https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=2&amp;auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff 2x"
                  src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?auto=format&amp;fit=crop&amp;w=32&amp;h=32&amp;q=60&amp;crop=faces&amp;bg=fff"
                  width="32"
                  height="32"
                  role="presentation"
                  alt="Avatar of user Ani mesh"
                />
              </div>
            </div>
          </button>
          <div role="menu" tabIndex="-1"></div>
        </div> */}
        <div style={{ width: "12px" }}></div>
        <div className={styles.threelineicondiv}>
          <button className={styles.threelineiconbtn}>
            <span className={styles.threeicondivbtnspan}></span>
            <svg
              className={styles.threeicondivbtnsvg}
              viewBox="0 0 32 32"
              version="1.1"
              aria-hidden="false"
            >
              <path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path>
            </svg>
          </button>
          <div role="menu" tabIndex="-1"></div>
        </div>
      </div>
      <Subheader />
    </div>
  );
}

import React from "react";
import styles from "./Subheader.module.css";
export default function Subheader() {
  return (
    <div className={styles.grandparentcontainer}>
      <div className={styles.parentcontainer}>
        <div className={styles.container}>
          <div className={styles.leftcontainer}>
            <ul className={styles.leftcontainerul}>
              <li className={styles.leftcontainerulli}>
                <a
                  className={styles.leftcontainerullia1}
                  style={{ boxShadow: "inset 0 -2px #111" }}
                  href="/#"
                >
                  <span style={{ fontWeight: "500" }}>Editorial</span>
                </a>
              </li>
              <li className={styles.leftcontainerulli}>
                <a className={styles.leftcontainerullia1} href="/#">
                  <span style={{ fontWeight: "500" }}>Following</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.rightcontainer}>
            <div className={styles.rightcontaierspace}></div>
          </div>
          <div className={styles.rightmostcontainerparent}>
            <div className={styles.rightmostcontainer}>
              <div style={{ right: "0" }}>
                <button className={styles.rightcontaiericonbtn}></button>
              </div>
              <div className={styles.rightmostcontainercontent}>
                <div></div>
                <div className={styles.containercontentulparent}>
                  <ul className={styles.leftcontainerul}>
                    <li className={styles.containercontentulli}>
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>
                          Current Events
                        </span>
                      </a>
                    </li>
                    <li className={styles.containercontentulli}>
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Wallpapers</span>
                      </a>
                    </li>
                    <li className={styles.containercontentulli}>
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>3D Renders</span>
                      </a>
                    </li>
                    <li className={styles.containercontentulli}>
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>
                          Texture and Patterns
                        </span>
                      </a>
                    </li>
                    <li className={styles.containercontentulli}>
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Experimental</span>
                      </a>
                    </li>
                    <li className={styles.containercontentulli}>
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Architecture</span>
                      </a>
                    </li>
                    <li className={styles.containercontentulli}>
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Nature</span>
                      </a>
                    </li>
                    <li className={styles.containercontentulli}>
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>
                          Business &amp; Work
                        </span>
                      </a>
                    </li>
                    <li className={styles.containercontentulli}>
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Fashion</span>
                      </a>
                    </li>
                    <li className={styles.containercontentulli}>
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Film</span>
                      </a>
                    </li>
                    <li
                      className={styles.containercontentulli}
                     
                    >
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Food</span>
                      </a>
                    </li>
                    <li
                      className={styles.containercontentulli}
                     
                    >
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Health</span>
                      </a>
                    </li>
                    <li
                      className={styles.containercontentulli}
                      
                    >
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>People</span>
                      </a>
                    </li>
                    <li
                      className={styles.containercontentulli}
                     
                    >
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Interior</span>
                      </a>
                    </li>
                    <li
                      className={styles.containercontentulli}
                    
                    >
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Street Photography</span>
                      </a>
                    </li>
                    <li
                      className={styles.containercontentulli}
                    >
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Travel</span>
                      </a>
                    </li>
                    <li
                      className={styles.containercontentulli}
                      style={{ opacity: "0.3" }}
                    >
                      <a href="/#" className={styles.containercontentullia}>
                        <span style={{ fontWeight: "500" }}>Animal</span>
                      </a>
                    </li>
                    <div className={styles.rbtndiv}>
                      <button className={styles.rbtn}>
                        <svg
                          width="24"
                          height="24"
                          className={styles.rbtnsvg}
                          viewBox="0 0 32 32"
                          version="1.1"
                          aria-hidden="false"
                        >
                          <path d="M11.3333 7.3333l2-2L24 16 13.3333 26.6666l-2-2L20 16l-8.6667-8.6667z"></path>
                        </svg>
                      </button>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

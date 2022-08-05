import React from "react";
import styles from "./Content.module.css";
export default function Content() {
  return (
    <div className={styles.greatgrandparent}>
      <div className={styles.grandparent}>
        <div className={styles.parent}>
          <picture className={styles.picturetag}>
            <source
              srcSet="https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=199&amp;h=230 1x, https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=199&amp;h=230 2x"
              media="(max-width: 199px)"
            />
            <source
              srcSet="https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=399&amp;h=230 1x, https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=399&amp;h=230 2x"
              media="(min-width: 200px) and (max-width: 399px)"
            />
            <source
              srcSet="https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=599&amp;h=310 1x, https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=599&amp;h=310 2x"
              media="(min-width: 400px) and (max-width: 599px)"
            />
            <source
              srcSet="https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=799&amp;h=594 1x, https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=799&amp;h=594 2x"
              media="(min-width: 600px) and (max-width: 799px)"
            />
            <source
              srcSet="https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=999&amp;h=594 1x, https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=999&amp;h=594 2x"
              media="(min-width: 800px) and (max-width: 999px)"
            />
            <source
              srcSet="https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1199&amp;h=594 1x, https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1199&amp;h=594 2x"
              media="(min-width: 1000px) and (max-width: 1199px)"
            />
            <source
              srcSet="https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1399&amp;h=594 1x, https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1399&amp;h=594 2x"
              media="(min-width: 1200px)"
            />

            <img
              alt="hello"
              role="presentation"
              style={{ width: "100%" }}
              src="https://images.unsplash.com/photo-1658563309427-6e703a70203c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1000&amp;h=1000"
            />
          </picture>
        </div>
        <div className={styles.greatgrandparentcontent}>
          <div className={styles.grandparentcontent}>
            <div className={styles.parentcontent}>
              <div className={styles.content}>
                <span className={styles.contentspan}>Unsplash</span>
                <div>
                  <h1 className={styles.contenth1}>
                    The internet’s source of
                    <a href="/#" className={styles.contenth1a}>
                      free-usable images
                    </a>
                    .
                  </h1>
                  <p className={styles.contentp}>
                    Powered by creators everywhere.
                  </p>
                  <div>
                    <div style={{ height: "24px" }}></div>
                    <div className={styles.contentsearchbarcontainerparent}>
                      <div className={styles.contentsearchbarcontainer}>
                        <form action="" className={styles.contentsearchbarform}>
                          <button className={styles.serachiconbtn}>
                            <svg
                              className={styles.serachiconbtnsvg}
                              viewBox="0 0 32 32"
                              version="1.1"
                              aria-hidden="false"
                            >
                              <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
                            </svg>
                          </button>
                          <div className={styles.serachinputcontainer}>
                            <input
                              type="search"
                              name=""
                              id=""
                              className={styles.inputbar}
                              placeholder="Search free high-resolution photos"
                            />
                            <div
                              style={{ display: "grid", rowGap: "8px" }}
                            ></div>
                          </div>
                          <div style={{ display: "inline-block" }}>
                            <button
                              className={styles.serachinputcontainerqrbtn}
                            >
                              <svg
                                className={styles.serachinputcontainerqrbtnsvg}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottombar}>
              <div
                style={{
                  textAlign: "center",
                  background: "#1c1b1b",
                  width: "fit-content",
                }}
              >
                <a href="/#" className={styles.bottombaratag}>
                  Photo
                </a>
                <div style={{ display: "inline-block", width: "3px" }}></div>
                by
                <div style={{ display: "inline-block", width: "3px" }}></div>
                <a href="/#" className={styles.bottombaratag}>
                  Saul Flores
                </a>
                <div style={{ display: "inline-block", width: "3px" }}></div>
              </div>

              <div
                style={{
                  textAlign: "center",
                  background: "#1c1b1b",
                  width: "fit-content",
                }}
              >
                Read more about the
                <div style={{ display: "inline-block", width: "3px" }}></div>
                <a href="/#" className={styles.bottombaratag}>
                  Unsplash License
                </a>
              </div>
              <div className={styles.bottombarwatermark}>
                <a href="/#" className={styles.bottombaratag}>
                  <div className={styles.bottombarnesteddiv}>
                    <img
                      className={styles.bottombarnesteddivimg}
                      alt=""
                      src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image"
                    />
                    <div style={{ height: "4px" }}></div>
                    <div>Create your website today.</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

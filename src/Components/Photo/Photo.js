import React from "react";
import styles from "./Photo.module.css";

export default function Photo({
  photoUrl,
  likes,
  profilePhoto,
  firstName,
  lastName,
  downloadUrl,
}) {
  return (
    <div className={styles.unplashPhtoDiv}>
      <div className={styles.likeDiv}>
        <div className={styles.buttonstyle}>
          <span className={styles.hearticon}>
            <i className="fas fa-heart" />
          </span>{" "}
          {likes}
        </div>
        <div className={styles.buttonstyle} style={{ marginLeft: "8px" }}>
          <i className="fas fa-plus" /> Collect
        </div>
      </div>
      <img src={photoUrl} className={styles.imagestyle} alt="" />
      <div className={styles.footerDiv}>
        <img src={profilePhoto} className={styles.usericon} alt="" />
        <div style={{ marginLeft: "8px" }}>
          <span className={styles.fullName}>{`${firstName} ${lastName}`}</span>
        </div>
      </div>
      <div className={styles.downloadPhoto}>
        <a className={styles.buttonstyle} href={`${downloadUrl}?force=true`}>
          <img src="" className={styles.downloadIcon} alt="" />
        </a>
      </div>
    </div>
  );
}

// const photo = () => {
//   return (
//     <div className={styles.unplashPhtoDiv}>
//       <div className={styles.likeDiv}>
//         <div className={styles.buttonstyle}>
//           <span className={styles.hearticon}>
//             <i className="fas fa-heart" />
//           </span>{" "}
//           {likes}
//         </div>
//         <div className={styles.buttonstyle} style={{ marginLeft: "8px" }}>
//           <i className="fas fa-plus" /> Collect
//         </div>
//       </div>
//       <img src={photoUrl} className={styles.imagestyle} />
//       <div className={styles.footerDiv}>
//         <img src={profilePhoto} className={styles.usericon} />
//         <div style={{ marginLeft: "8px" }}>
//           <span className={styles.fullName}>{`${firstName} ${lastName}`}</span>
//         </div>
//       </div>
//       <div className={styles.downloadPhoto}>
//         <a
//           className={styles.buttonstyle}
//           href={`${downloadUrl}?force=true`}
//           target="_blank"
//         >
//           <img src={download} className={styles.downloadIcon} />
//         </a>
//       </div>
//     </div>
//   );
// };
// export default photo;

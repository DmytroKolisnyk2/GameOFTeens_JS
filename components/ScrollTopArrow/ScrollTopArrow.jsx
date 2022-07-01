import React from "react";
import styles from "./ScrollTopArrow.module.css";
import PropTypes from "prop-types";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function ScrollTopArrow({ color, bgColor, borderRadius }) {
  return (
    <div
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={styles.arrow}
      style={{
        backgroundColor: bgColor,
        borderRadius: borderRadius,
      }}
    >
      <ArrowUpwardIcon className={styles.icon} style={{ color: color, fontSize: "32px" }} />
    </div>
  );
}

ScrollTopArrow.defaultProps = {
  color: "#fff",
  bgColor: "#333",
  borderRadius: "50%",
};

ScrollTopArrow.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  borderRadius: PropTypes.string,
};

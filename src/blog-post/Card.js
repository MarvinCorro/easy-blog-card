import React from "react";
import { Badge } from "@epiphanyzz/easy-badge";
import "./css/style.css";

function Card({
  anchorOnClick = () => {},
  size,
  title,
  img,
  imgAlt = "",
  description,
  linkText = "Read more",
  badges = [],
  anchorHref="#",
  onTagClick,
}) {
  const sanatizedBadges = badges.map((badge) => {
    return (
      <Badge
        key={badge.id}
        bold={badge.bold}
        color={badge.color}
        italic={badge.italic}
        onClick={onTagClick}
        size={badge.size}
        text={badge.text}
      />
    );
  });

  const sanatizeStyles = () => {
    const styles = {};

    if (size === "small") {
      styles.minHeight = "454px";
      styles.minWidth = "240px";
    } else if (size === "medium") {
      styles.minHeight = "504px";
      styles.minWidth = "340px";
    } else if (size === "large") {
      styles.minHeight = "554px";
      styles.minWidth = "390px";
    }

    return styles;
  };

  const styles = sanatizeStyles();

  //TODO: add uni code support for -> symbols
  return (
    <div className="easy-card-container" style={styles}>
      <img className="easy-card-image" src={img} alt={imgAlt} />
      <div className="easy-card-badge-container">{sanatizedBadges}</div>
      <div className="easy-card-content">
        <h1 className="easy-card-title">{title}</h1>
        <p className="easy-card-text">{description}</p>
        {/* <div className="easy-card-link-container"> */}
        <a className="easy-card-link" href={anchorHref} onClick={anchorOnClick}>
          {`${linkText} `}
        </a>
        {/* <img src={arrow} /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Card;

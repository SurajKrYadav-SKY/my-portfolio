import React, { useEffect, useState } from "react";
import "./GoToTop.scss";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollHight = () => {
    let height = 350;
    const scrollInfo =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollInfo > height) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHight);
    return () => window.removeEventListener("scroll", scrollHight);
  }, []);

  return (
    <div className="go-to-top">
      {isVisible && (
        <div className="topBtn" onClick={handleTop}>
          <div className="icon">
            <ArrowUpwardOutlinedIcon className="arrow"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoToTop;

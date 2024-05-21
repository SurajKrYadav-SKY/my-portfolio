import React, { useState } from "react";
import "./Modal.scss";
import ShowModal from "./ShowModal";
import { bios } from "../../store/data";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="buttons">
      <button className="contactButton" onClick={handleModal}>
        Contact Me
      </button>
      {openModal && <ShowModal setOpenModal={setOpenModal} />}
      {bios.map((item, index) => {
        return (
          <div className="bottom" key={index}>
            <button className="contactButton" style={{ marginRight: "10px" }}>
              <a href={item.resume} target="_blank">
                Resume
              </a>
            </button>
            <button className="contactButton">
              <a href={item.linkedIn} target="_blank">
                LinkedIn
              </a>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;

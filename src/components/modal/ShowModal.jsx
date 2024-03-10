import { useEffect } from "react";
import "./ShowModal.scss";
//import "./Modal.css";

const ShowModal = ({ setOpenModal }) => {

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    }
  }, []);

  return (
    <>


    <div className="modal"></div>
      <div className="Modal-container">
        
        <div className="title" style={{color : "black"}}>
          <span>Contact Info.</span>
        </div>
        <div className="body">
          <p>email 1 : syadav@iiitmanipur.ac.in </p>
          <p>email 2 : suraj.mails99@gmail.com</p>
          <p>Mobile No. : +918709083075</p>
        </div>
        <div className="closeBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            OK
          </button>
        </div>
      </div>
      </>
  );
};

export default ShowModal;

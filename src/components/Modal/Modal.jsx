import React from "react";
import FontAwesome from "react-fontawesome";
import { Overlay, Content } from "./styles.js";

const Modal = ({ showModal, handleClose, children }) => {
  const handleCloseButton = (e) => {
    handleClose(e);
  };

  const style = {
    color: "#000000",
    padding: "10px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: 0,
    position: "absolute",
    top: "0.3rem",
    right: "0.5rem",
  };

  return (
    <>
      {showModal && (
        <Overlay >
          <Content>
            <FontAwesome
              name="times"
              style={style}
              onClick={handleCloseButton}
            />
            {children}
          </Content>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

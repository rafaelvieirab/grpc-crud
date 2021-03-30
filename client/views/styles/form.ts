import { CSSProperties } from 'react';

const style: { [key: string]: CSSProperties } = {
  modal: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    fontFamily: "Arial, Helvetica, sans- serif",
    background: "rgba(0, 0, 0, 0.8)",
    zIndex: 99999,
    opacity: 0,
    transition: "opacity 400ms ease -in",
    pointerEvents: "none",
    padding: "10px",
  },
  
  container: {
    width: "400px",
    position: "relative",
    margin: "10% auto",
    padding: "15px 20px",
    background: "#fff",
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: 'flex-end',
  },

  btnClose: {
    position: "absolute",
    width: "30px",
    right: "-15px",
    top: -"20px",
    textAlign: "center",
    lineHeight: "30px",
    marginTop: "5px",
    background: "#ff4545",
    borderRadius: "50%",
    fontSize: "16px",
    color: "#8d0000",
  },

  form: {
    width: "100%",
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  },

  fieldInput: {
    width: "100%",
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
  },

  label: {},

  input: {},

  buttons: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
  },

  btnReset: {
    color: "white",
    borderRadius: "5px",
    backgroundColor: "green",
  },

  btnAction: {
    color: "white",
    borderRadius: "5px",
    backgroundColor: "rgb(231, 73, 94)",
  },
}

export default style;
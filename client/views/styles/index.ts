import { CSSProperties } from 'react';

const style: { [key: string]: CSSProperties } = {
  body : {
    backgroundColor: "gray",
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
  
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    backgroundColor: "rgb(244, 247, 250)",
    margin: 0,
    padding: "20px",
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  table: {
    width: "100%",
    fontSize: 12,
    border: "2px solid rgb(200,200,200)",
    borderCollapse: 'collapse',
    letterSpacing: 1,
  },
  th: {
    backgroundColor: "rgb(235,235,235)",
    border: "1px solid rgb(190,190,190)",
    borderCollapse: "collapse",
    padding: "10px",
    textAlign: "center",
  },
  
  td: {
    textAlign: "center",
    border: "1px solid rgb(190,190,190)",
    borderCollapse: "collapse",
    padding: "10px",
  },
  btnEdit: {
    background: 'none',
  },
  btnDelete: {
    background: 'none',
  },
  icon: {
    width: "5px",
    height: "5px"
  },
  caption: {
    fontSize: "14px",
    fontWeight: 'bold',
    padding: "10px",
  },
  
  footer: {
    width: '100%',
    padding: "10px",
    paddingTop: "10px",
    display: "flex",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  btnCreate: {
    backgroundColor: "green",
    color: "white",
    borderRadius: "5px",
  },
  
  btnDeleteAll: {
    backgroundColor: "rgb(231, 73, 94)",
    color: "white",
    borderRadius: "5px",
  },
}
export default style;
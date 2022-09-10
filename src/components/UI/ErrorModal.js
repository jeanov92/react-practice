import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const OverlayModal = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Accept</Button>
        </footer>
      </div>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverlayModal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        ></OverlayModal>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;

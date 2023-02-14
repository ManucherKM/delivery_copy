import classes from "../styles/Inputs.module.scss";

const Radio = () => {
  const styles = [classes.radio].join(" ");

  return <input className={styles} type="radio" />;
};

export default Radio;

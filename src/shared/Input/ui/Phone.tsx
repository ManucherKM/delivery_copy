import classes from "../styles/Inputs.module.scss";

const Phone = () => {
  const styles = [classes.phone].join(" ");

  return <input type="tel" className={styles} />;
};

export default Phone;

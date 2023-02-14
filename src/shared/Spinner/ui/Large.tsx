import classes from "../styles/Spinners.module.scss";

const Large = () => {
  const styles = [classes.large].join(" ");

  return <div className={styles} />;
};

export default Large;

import classes from "../styles/Spinners.module.scss";

const Small = () => {
  const styles = [classes.small].join(" ");

  return <div className={styles} />;
};

export default Small;

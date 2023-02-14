import classes from "../styles/Inputs.module.scss";

const Text = () => {
  const styles = [classes.text].join(" ");

  return <input className={styles} type="text" />;
};

export default Text;

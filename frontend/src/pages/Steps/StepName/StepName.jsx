import styles from "./StepName.module.css";

const StepName = ({ onNext }) => {
  return (
    <>
      <div>StepName</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepName;

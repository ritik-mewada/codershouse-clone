import styles from "./StepPhoneEmail.module.css";

const StepPhoneEmail = ({ onNext }) => {
  return (
    <>
      <div>StepPhoneEmail</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepPhoneEmail;

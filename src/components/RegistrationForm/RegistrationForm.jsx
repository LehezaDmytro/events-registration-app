import { useNavigate } from "react-router-dom";
import styles from "./RegistrationForm.module.scss";

const RegistrationForm = ({ onHandleSubmit }) => {
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    onHandleSubmit({
      fullName: form.elements.name.value,
      email: form.elements.email.value,
      birthDate: form.elements.date.value,
      source: form.elements.source.value,
    });

    alert("You are successfully registered as a participant in this event!");
    form.reset();
    navigate("/", { replace: true });
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <label htmlFor="name">Full name</label>
      <input type="text" id="name" name="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="date">Date of birth</label>
      <input type="date" id="date" required />
      <p>Where did you hear about this event?</p>
      <label>
        <input type="radio" name="source" value="Social media" defaultChecked />
        Social media
      </label>
      <label>
        <input type="radio" name="source" value="Friends" />
        Friends
      </label>
      <label>
        <input type="radio" name="source" value="Found myself" />
        Found myself
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

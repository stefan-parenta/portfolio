import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactMe.module.scss";
import { TiMail } from "react-icons/ti";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w0ml4lj",
        "template_n07bbnm",
        form.current,
        "0IjdYf2NpdvqqWX2u"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Sent!");
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className={styles.section} id="contactme">
      <TiMail size={100} />
      <div className={styles.container}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <div className={styles["left"]}>
            <h1 className={styles.header}>Say Hello!</h1>
            <label className={styles.label}>Name</label>
            <input
              className={styles["input-name"]}
              type="text"
              name="from_name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input type="hidden" name="to_name" value="Stefan" />
            <label className={styles.label}>Phone Number</label>
            <input
              className={styles["input-phone"]}
              type="text"
              name="phone_number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <label className={styles.label}>Email</label>
            <input
              className={styles["input-email"]}
              type="email"
              name="user_email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles.right}>
            <label className={styles["label-message"]}>Message</label>
            <textarea
              className={styles["input-message"]}
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <input className={styles.button} type="submit" value="Send" />
            <ToastContainer
              theme="dark"
              position={toast.POSITION.BOTTOM_RIGHT}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;

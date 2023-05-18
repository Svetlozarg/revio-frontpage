import styles from "@/styles/Contacts.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={styles.contactsWrapper}>
        <div className={styles.contactsBox}>
          <form
            target="_blank"
            action="https://formsubmit.co/denislav@revio-app.com"
            method="POST"
            data-aos="fade-right"
          >
            <h2>Contact Us</h2>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="Email"
              className="form-control"
              placeholder="Email Address"
              required
            />
            <input
              type="phone"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              required
            />
            <textarea
              placeholder="Your Message"
              className="form-control"
              name="message"
              rows={10}
              required
            ></textarea>
            <button type="submit" className="btn btn-lg btn-dark btn-block">
              Submit
            </button>
          </form>

          <div className={styles.socialBox} data-aos="flip-up">
            <p>Follow us on:</p>
            <a
              href="https://www.linkedin.com/company/revio-app"
              target="_blank"
            >
              <FaFacebook /> Linkedin
            </a>

            <a
              href="https://www.facebook.com/revioappforecommerce"
              target="_blank"
            >
              <FaLinkedin /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

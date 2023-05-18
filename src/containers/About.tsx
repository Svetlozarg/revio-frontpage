import styles from "@/styles/About.module.scss";

export default function About() {
  return (
    <section className={styles.about}>
      <div>
        <h2 data-aos="fade-bottom">
          About <span>Us</span>
        </h2>

        <p data-aos="fade-right">
          At our core, we are on a mission to take customer satisfaction to new
          heights through <span>conversational commerce</span>. We believe that
          e-commerce brands must be closer to their customers, strengthening
          every touchpoint along the way. The future will distinguish strong
          brands from weak ones through{" "}
          <span>AI algorithms and micro-personalization</span>.
        </p>

        <p data-aos="fade-right">
          We created Revio with the idea of{" "}
          <span>increasing customer reviews and user-generated content</span>.
          This is vital for any brand looking to stand out and gain
          people&apos;s trust. Conversational commerce remains an underestimated
          channel for e-commerce in the Western world. It opens up new
          opportunities to create loyalty, better support, and generate
          additional revenue. Be where your customers&apos; friends are. Make
          them feel a sense of belonging and speak about you.
        </p>

        <p className={styles.boldP} data-aos="fade-right">
          Try <span>Revio</span> today and be of the <span>winners</span>{" "}
          tomorrow!
        </p>
      </div>
    </section>
  );
}

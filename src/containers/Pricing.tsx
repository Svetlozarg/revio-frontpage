import styles from "@/styles/Pricing.module.scss";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className={styles.pricing}>
      <div className={styles.main} style={{ paddingBottom: "2rem" }}>
        <table className={styles.priceTable}>
          <tbody>
            <tr>
              <td className={styles.priceBlank}></td>
              <td className={styles.priceBlank}></td>
              <td className={styles.priceTablePopular}>Most popular</td>
              <td className={styles.priceBlank}></td>
              <td className={styles.priceBlank}></td>
            </tr>
            <tr className={styles.priceTableHead}>
              <td></td>
              <td>
                Basic
                <br />
                <small style={{ fontSize: "16px", fontWeight: "400" }}>
                  500 MAC&apos;s
                </small>
              </td>
              <td>
                Growth
                <br />
                <small style={{ fontSize: "16px", fontWeight: "400" }}>
                  2000 MAC&apos;s
                </small>
              </td>
              <td className={styles.greenWidth}>
                Premium
                <br />
                <small style={{ fontSize: "16px", fontWeight: "400" }}>
                  5000 MAC&apos;s
                </small>
              </td>
              <td className={styles.greenWidth}>
                Enterprise
                <br />
                <small style={{ fontSize: "16px", fontWeight: "400" }}>
                  15 000 MAC&apos;s
                </small>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className={styles.price}>
                <br />
                $29
                <br />
                <a
                  href="https://developers.facebook.com/docs/whatsapp/pricing"
                  target="_blank"
                >
                  + Additional WhatsApp <br /> conversations charges
                </a>
              </td>
              <td className={styles.price}>
                <br />
                $119
                <br />
                <a
                  href="https://developers.facebook.com/docs/whatsapp/pricing"
                  target="_blank"
                >
                  + Additional WhatsApp <br /> conversations charges
                </a>
              </td>
              <td className={styles.price}>
                <br />
                $299
                <br />
                <a
                  href="https://developers.facebook.com/docs/whatsapp/pricing"
                  target="_blank"
                >
                  + Additional WhatsApp <br /> conversations charges
                </a>
              </td>
              <td className={styles.price}>
                <br />
                $799+
                <br />
                <a
                  href="https://developers.facebook.com/docs/whatsapp/pricing"
                  target="_blank"
                >
                  + Additional WhatsApp <br /> conversations charges
                </a>
              </td>
            </tr>
            <tr>
              <td>Free WA service conversations</td>
              <td>1000/month</td>
              <td>1000/month</td>
              <td>1000/month</td>
              <td>1000/month</td>
            </tr>
            <tr>
              <td>WhatsApp Inbox</td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  padding: "1rem 1.5rem",
                }}
              >
                WA Automated Messages
              </td>
            </tr>
            <tr>
              <td>Product Review Campaign</td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>Photo & Video reviews</td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>Instant Upsell with Order confirmation</td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>Abandoned Cart Recovery</td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>AI generated WA templates</td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>WhatsApp Broadcast Campaigns</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>Unlimited Custom Segments for Broadcast</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>AI Powered Bot</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  padding: "1rem 1.5rem",
                }}
              >
                Omnichannel Support
              </td>
            </tr>
            <tr>
              <td>Multiple agents</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>Respond to Marketing Campaigns</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>Tags & Attributetes</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>Multilanguage Detection</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>WhatsApp Catalog with Cart Managent</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>Checkout on chat</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  padding: "1rem 1.5rem",
                }}
              >
                Onboarding & Support
              </td>
            </tr>
            <tr>
              <td>Onboarding</td>
              <td>Self-serve</td>
              <td>Self-serve</td>
              <td>Premium</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Chat support</td>
              <td>Standart</td>
              <td>Standart</td>
              <td>Premium</td>
              <td>Premium</td>
            </tr>
            <tr>
              <td>Customer Succcess Manager</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>Video Call support for WABA Migration</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
            <tr>
              <td>Account Manager</td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaTimes className={styles.faTimes} />
              </td>
              <td>
                <FaCheck className={styles.faCheck} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

import Question, { QuestionData } from "@/components/Question";
import styles from "@/styles/FAQ.module.scss";

const questionsData: Array<QuestionData> = [
  {
    question: "Is Revio compliant with GDPR?",
    answer:
      "Yes, Revio is fully compliant GDPR for end users and Revio customers.",
  },
  {
    question:
      "What is WhatsApp Business API (WABA) and How is it different from the WhatsApp Business Mobile App?",
    answer:
      "The WhatsApp Business Application allows users to have a business account and a personal account simultaneously on the same device. Thus segregating business messages and private messages by having a separate application for business use. This Application is useful for small businesses that want to send encrypted messages free of charge, and make use of features such as quick replies, sending greeting messages, away messages, and labeling conversations. On the other hand, the WhatsApp Business API is made for bigger businesses that need automation and CRM features. In other words, it was created for businesses that deal with a large volume of messages that cannot be handled through the use of the WhatsApp Business App. The WhatsApp Business API enables you to connect WhatsApp with E-commerce platforms like Shopify or to automate messages using a chatbot. WABA also comes with other Perks such as supporting multiple users and multiple devices and sending template messages.",
  },
  {
    question: "Can I send review requests for past orders?",
    answer:
      "Do you worried about just missed this opportunity for your past orders? Don’t worry. It can send a review request up to 2 months’ past orders also. You can send review requests to prior customers (fulfilled Shopify orders) from the past 60 days when you first install Revio.",
  },
  {
    question: "How much do WhatsApp business messages cost?",
    answer:
      "Whatsapp cost are different for different country and purpose. Here is more information about Whatsapp pricing - link.",
  },
  {
    question:
      "How it works WhatsApp newsletters? Is it necessary to have an collect audience?",
    answer:
      "WhatsApp newsletters are a way to communicate with a group of people who have subscribed to receive updates and news from your business via WhatsApp. To send newsletters, you need to have a WhatsApp Business Account and use the WhatsApp Business API. To collect an audience, you can add a WhatsApp button on your website or social media pages, which allows people to easily join your newsletter by clicking on the button. It's important to ensure that people have opted-in to receive your newsletters and that you provide them with the option to opt-out at any time. This not only ensures compliance with data protection laws, but it also helps to maintain a positive relationship with your audience by respecting their preferences and privacy.",
  },
  {
    question:
      "Is it possible to export the reviews collected on Revio to Shopify/website?",
    answer:
      "Yes, with Revio you can export all reviews in the right format for your existing review app.",
  },
  {
    question: "I use an sms automation tool. Does this interfere with Revio?",
    answer:
      "No, Revio does not interfere with any SMS automation tools you may be using. It operates independently and can collect reviews from your customers through various channels, including SMS, email, and WhatsApp. However, it's recommended to avoid sending multiple review requests to the same customer to prevent annoyance and potential negative impact on their experience.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.faq}>
      <h2 data-aos="fade-down">Frequently Asked Questions</h2>

      <div className={styles.questionWrapper} data-aos="flip-down">
        {questionsData.map((item: QuestionData, i: number) => {
          return (
            <>
              <Question key={i} question={item.question} answer={item.answer} />
            </>
          );
        })}
      </div>
    </section>
  );
}

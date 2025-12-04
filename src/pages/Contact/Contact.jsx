import ContactForm from "./sections/ContactForm";
import ContactSlider from "./sections/ContactSlider";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
      <ContactForm />
      <ContactSlider />
    </div>
  );
};

export default Contact;

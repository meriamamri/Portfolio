import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Title from "./ui/title";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Title title="Get In Touch" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to create something
            amazing. Fill out the form below and I&apos;ll get back to you as
            soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <ContactInfo
            Icon={Mail}
            contactInfo="meriamamri94@gmail.com"
            hrefInfo="meriamamri94@gmail.com"
            title="Email"
          />
          <ContactInfo
            Icon={Phone}
            contactInfo="+21695772265"
            hrefInfo="tel:+21695772265"
            title="Phone"
          />
          <ContactInfo
            Icon={Github}
            contactInfo="https://github.com/meriamamri"
            hrefInfo="https://github.com/meriamamri"
            title="Github"
          />
          <ContactInfo
            Icon={Linkedin}
            contactInfo="https://www.linkedin.com/in/meriamamri/"
            hrefInfo="https://www.linkedin.com/in/meriamamri/"
            title="Linkedin"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 max-w-4xl mx-auto mt-8.5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

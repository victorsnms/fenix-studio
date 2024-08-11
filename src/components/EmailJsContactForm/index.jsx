import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactForm, FormItem, Input, Label, Select, SubmitButton, Textarea } from "./EmailJsContactFormElements";
import { useTranslation } from "react-i18next";

export const EmailJsContactForm = () => {
  const [contactPreference, setContactPreference] = useState("Email");
  const [contactSubject, setContactSubject] = useState("Orçamento");
  const [t] = useTranslation();

  //fenixtest28@gmail.com
  //Test123
  const form = useRef();
  // const serviceID = "service_wh0dauc";
  // const serviceID = "service_33ge5fl"; // new
  // const templateID = "template_d7sa946";
  // const templateID = "template_urpe3uv"; // new
  // const publicKey = "jKdWbQLwgqGXgUiRq";
  // const publicKey = "OJPgf945P3i3-AC6P"; // new
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  console.log("serviceID"), serviceID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <ContactForm ref={form} onSubmit={sendEmail}>
      <FormItem transitionDelay={0.2}>
        <Label htmlFor="user_name">{t("contactForm.name")}</Label>
        <Input type="text" name="user_name" id="user_name" required />
      </FormItem>

      <FormItem transitionDelay={0.4}>
        <Label htmlFor="phone">{t("contactForm.phone_optional")}</Label>
        <Input type="text" name="phone" id="phone" />
      </FormItem>

      <FormItem transitionDelay={0.6}>
        <Label htmlFor="contact_preference">{t("contactForm.contact_preference")}</Label>
        <Select name="contact_preference" id="contact_preference" onChange={(e) => setContactPreference(e.target.value)}>
          <option value="Email">{t("contactForm.email")}</option>
          <option value="Phone">{t("contactForm.phone")}</option>
        </Select>
        <Input type="hidden" name="contact_preference_value" value={contactPreference} />
      </FormItem>

      <FormItem transitionDelay={0.8}>
        <Label htmlFor="contact_subject">{t("contactForm.contact_subject")}</Label>
        <Select name="contact_subject" id="contact_subject" onChange={(e) => setContactSubject(e.target.value)} required>
          <option value="Orçamento">{t("contactForm.budget")}</option>
          <option value="VFX Academy">{t("contactForm.vfx_academy")}</option>
          <option value="Trabalhe Conosco">{t("contactForm.work_with_us")}</option>
          <option value="Outros">{t("contactForm.others")}</option>
        </Select>
        <Input type="hidden" name="contact_subject_value" value={contactSubject} />
      </FormItem>

      <FormItem transitionDelay={1.0}>
        <Label htmlFor="user_email">{t("contactForm.email")}</Label>
        <Input type="email" name="user_email" id="user_email" required />
      </FormItem>

      <FormItem transitionDelay={1.2}>
        <Label htmlFor="message">{t("contactForm.message")}</Label>
        <Textarea name="message" id="message" required />
      </FormItem>

      <FormItem transitionDelay={1.4}>
        <SubmitButton type="submit">{t("contactForm.send")}</SubmitButton>
      </FormItem>
    </ContactForm>
  );
};

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import {
  FormTitle,
  FormSubtitle,
  ContactForm,
  FormGrid,
  FormField,
  FormFieldFull,
  Label,
  Input,
  Select,
  Textarea,
  SubmitButton,
} from "./EmailJsContactFormElements";

export const EmailJsContactForm = () => {
  const [contactSubject, setContactSubject] = useState("Orçamento");
  const [t] = useTranslation();
  const form = useRef();

  const serviceID = `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`;
  const templateID = `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`;
  const publicKey = `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceID, templateID, form.current, { publicKey })
      .then(() => console.log("SUCCESS!"), (error) => console.log("FAILED...", error.text));
  };

  return (
    <div>
      <FormTitle>{t("contactPage.formTitle")}</FormTitle>
      <FormSubtitle>{t("contactPage.formSubtitle")}</FormSubtitle>

      <ContactForm ref={form} onSubmit={sendEmail}>
        <FormGrid>
          <FormField>
            <Label htmlFor="user_name">{t("contactForm.name")} *</Label>
            <Input type="text" name="user_name" id="user_name" placeholder={t("contactForm.name")} required />
          </FormField>
          <FormField>
            <Label htmlFor="phone">{t("contactForm.phone")} *</Label>
            <Input type="text" name="phone" id="phone" placeholder={t("contactForm.phone")} />
          </FormField>
        </FormGrid>

        <FormGrid>
          <FormField>
            <Label htmlFor="user_email">{t("contactForm.email")} *</Label>
            <Input type="email" name="user_email" id="user_email" placeholder={t("contactForm.email")} required />
          </FormField>
          <FormField>
            <Label htmlFor="contact_subject">{t("contactForm.contact_subject")} *</Label>
            <Select
              name="contact_subject"
              id="contact_subject"
              onChange={(e) => setContactSubject(e.target.value)}
              required
            >
              <option value="Orçamento">{t("contactForm.budget")}</option>
              <option value="VFX Academy">{t("contactForm.vfx_academy")}</option>
              <option value="Trabalhe Conosco">{t("contactForm.work_with_us")}</option>
              <option value="Outros">{t("contactForm.others")}</option>
            </Select>
            <Input type="hidden" name="contact_subject_value" value={contactSubject} />
          </FormField>
        </FormGrid>

        <FormFieldFull>
          <Label htmlFor="message">{t("contactForm.message")}</Label>
          <Textarea name="message" id="message" placeholder={t("contactForm.message")} required />
        </FormFieldFull>

        <SubmitButton type="submit">{t("contactForm.send")}</SubmitButton>
      </ContactForm>
    </div>
  );
};

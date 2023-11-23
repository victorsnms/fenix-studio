import React from "react";
import { ContactInfoSection, TextContent, TextLabel } from "./ContactInfoElements";

const ContactInfo = ({ info }) => {
  return (
    <>
      {info.map((e, i) => (
        <ContactInfoSection key={i} threshold={0.1} transitionDelay={(1 + i) * 0.2}>
          <TextLabel>{e.label}</TextLabel>
          {e.content.map((content, i) => (
            <TextContent key={i}>{content}</TextContent>
          ))}
        </ContactInfoSection>
      ))}
    </>
  );
};

export default ContactInfo;

import styled from "styled-components";
import FadeInAnimation from "../FadeInAnimation";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px var(--color-overlay-30);
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: var(--color-text);
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 16px;
`;

export const Select = styled.select`
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  min-height: 100px;
`;

export const SubmitButton = styled.button`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: var(--color-primary);
  white-space: nowrap;
  padding: 10px 20px;
  color: var(--color-text);
  font-weight: 700;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 0 auto;
  max-width: 120px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--color-text);
    color: var(--color-background);
  }
`;

export const FormItem = styled(FadeInAnimation)`
  display: flex;
  flex-direction: column;
`;

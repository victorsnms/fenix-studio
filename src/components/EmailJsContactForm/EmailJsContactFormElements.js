import styled from "styled-components";

export const FormTitle = styled.h2`
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-heavy);
  font-size: clamp(18px, 2.5vw, 26px);
  text-transform: uppercase;
  color: var(--color-white);
  margin: 0 0 6px;
`;

export const FormSubtitle = styled.p`
  font-family: var(--ds-font-brand);
  font-size: 13px;
  font-weight: var(--ds-font-weight-regular);
  color: rgba(255, 255, 255, 0.6);
  margin: 0 0 28px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FormFieldFull = styled(FormField)`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-family: var(--ds-font-brand);
  font-size: 11px;
  font-weight: var(--ds-font-weight-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.6);
`;

const fieldBase = `
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-size: 14px;
  padding: 12px 14px;
  outline: none;
  transition: border-color 0.2s ease;
  appearance: none;
  -webkit-appearance: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

export const Input = styled.input`${fieldBase}`;

export const Select = styled.select`
  ${fieldBase}
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.5)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;

  option {
    background: #1a1a1a;
    color: var(--color-white);
  }
`;

export const Textarea = styled.textarea`
  ${fieldBase}
  resize: vertical;
  min-height: 120px;
`;

export const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  background: var(--color-primary);
  border: none;
  color: var(--color-white);
  font-family: var(--ds-font-brand);
  font-weight: var(--ds-font-weight-semibold);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 14px 36px;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s ease;

  &:hover {
    background: #c00;
  }
`;

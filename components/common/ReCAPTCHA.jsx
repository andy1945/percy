
"use client"
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCAPTCHAComponent({ onVerify, parentClass }) {
  return (
    <div className={parentClass}>
      <ReCAPTCHA
        sitekey="6LdtaMcrAAAAALBK3r7Wcqy2VIyLXfqBOmqrLebO"
        onChange={onVerify}
      />
    </div>
  );
}

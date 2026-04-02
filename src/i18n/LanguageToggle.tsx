import React from "react";
import { useLanguage } from "./LanguageContext";
import "./languageToggle.css";

const BrazilFlag = () => (
  <svg viewBox="0 0 640 480" width="22" height="16">
    <rect width="640" height="480" fill="#009b3a" />
    <polygon points="320,39 600,240 320,441 40,240" fill="#fedf00" />
    <circle cx="320" cy="240" r="100" fill="#002776" />
    <path d="M196,240 Q320,175 444,240 Q320,210 196,240Z" fill="#fff" />
  </svg>
);

const USAFlag = () => (
  <svg viewBox="0 0 640 480" width="22" height="16">
    <rect width="640" height="480" fill="#fff" />
    <g>
      {[0,1,2,3,4,5,6].map(i => <rect key={i} y={i * 74} width="640" height="37" fill="#b22234" />)}
    </g>
    <rect width="256" height="259" fill="#3c3b6e" />
    {[0,1,2,3,4].map(r =>
      [0,1,2,3,4,5].map(c => <circle key={`${r}-${c}`} cx={21 + c * 42} cy={17 + r * 52} r="8" fill="#fff" />)
    )}
    {[0,1,2,3].map(r =>
      [0,1,2,3,4].map(c => <circle key={`s${r}-${c}`} cx={42 + c * 42} cy={43 + r * 52} r="8" fill="#fff" />)
    )}
  </svg>
);

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggle = () => setLanguage(language === "pt" ? "en" : "pt");

  return (
    <button
      className="lang-toggle"
      onClick={toggle}
      aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      {language === "pt" ? <BrazilFlag /> : <USAFlag />}
    </button>
  );
};

export default LanguageToggle;

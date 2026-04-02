import React from "react";
import { FaBrain, FaWrench, FaChartBar, FaCrosshairs, FaBolt, FaHandshake, FaChartLine, FaDollarSign } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";
import "./differentiators.css";

const comparisonIcons = [<FaCrosshairs />, <FaBrain />, <FaBolt />, <FaHandshake />, <FaChartLine />, <FaDollarSign />];
const cardIcons = [<FaBrain />, <FaWrench />, <FaChartBar />];

const Differentiators: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="differentiators">
      <div className="container">
        <div className="differentiators-header">
          <h2>{t.differentiators.title}</h2>
          <p className="section-lead">{t.differentiators.lead}</p>
        </div>
        <div className="comparison-table">
          <div className="table-header">
            <div className="header-cell header-category">{t.differentiators.tableHeaders.aspect}</div>
            <div className="header-cell header-others">{t.differentiators.tableHeaders.others}</div>
            <div className="header-cell header-prottocode">{t.differentiators.tableHeaders.prottocode}</div>
          </div>
          {t.differentiators.comparisons.map((comparison, index) => (
            <div key={index} className={`table-row ${index % 2 === 0 ? "even" : "odd"}`}>
              <div className="table-cell category-cell">
                <span className="cell-icon">{comparisonIcons[index]}</span>
                <strong>{comparison.category}</strong>
              </div>
              <div className="table-cell others-cell"><p>{comparison.others}</p></div>
              <div className="table-cell prottocode-cell"><p><strong>{comparison.prottocode}</strong></p></div>
            </div>
          ))}
        </div>
        <div className="differentiators-cards">
          {t.differentiators.cards.map((card, index) => (
            <div key={index} className="diff-card">
              <div className="diff-icon">{cardIcons[index]}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul>{card.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="differentiators-cta">
          <h3>{t.differentiators.ctaTitle}</h3>
          <p>{t.differentiators.ctaText}</p>
          <a href="/orcamento" className="btn-primary">{t.differentiators.ctaButton}</a>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;

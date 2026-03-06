import React from "react";
import "./heroChart.css";

const HeroChart: React.FC = () => {
  return (
    <div className="hero-chart">
      {/* Floating particles */}
      <div className="chart-particles">
        <span className="particle p1" />
        <span className="particle p2" />
        <span className="particle p3" />
        <span className="particle p4" />
        <span className="particle p5" />
        <span className="particle p6" />
      </div>

      <svg
        className="chart-svg"
        viewBox="0 0 500 300"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient fill under the main line */}
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(91,141,239,0.35)" />
            <stop offset="100%" stopColor="rgba(91,141,239,0)" />
          </linearGradient>

          {/* Line glow */}
          <filter id="lineGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Dot glow */}
          <filter id="dotGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal grid lines */}
        <g className="chart-grid">
          <line x1="0" y1="60" x2="500" y2="60" />
          <line x1="0" y1="120" x2="500" y2="120" />
          <line x1="0" y1="180" x2="500" y2="180" />
          <line x1="0" y1="240" x2="500" y2="240" />
        </g>

        {/* Vertical grid (subtle) */}
        <g className="chart-grid-v">
          <line x1="100" y1="0" x2="100" y2="300" />
          <line x1="200" y1="0" x2="200" y2="300" />
          <line x1="300" y1="0" x2="300" y2="300" />
          <line x1="400" y1="0" x2="400" y2="300" />
        </g>

        {/* Area fill — main chart (uptrend with oscillations) */}
        <path
          className="chart-area"
          d="M0,260 C30,250 50,245 80,230 C110,215 130,225 160,200 C190,175 210,190 240,160 C270,130 290,150 320,120 C350,90 370,110 400,80 C430,55 460,65 500,40 L500,300 L0,300 Z"
          fill="url(#areaGrad)"
        />

        {/* Main line */}
        <path
          className="chart-line main"
          d="M0,260 C30,250 50,245 80,230 C110,215 130,225 160,200 C190,175 210,190 240,160 C270,130 290,150 320,120 C350,90 370,110 400,80 C430,55 460,65 500,40"
          filter="url(#lineGlow)"
        />

        {/* Secondary line (lighter, less volatile) */}
        <path
          className="chart-line secondary"
          d="M0,240 C40,235 70,230 110,220 C150,210 180,215 220,200 C260,185 290,190 330,175 C370,160 400,165 440,150 C470,140 490,135 500,130"
        />

        {/* Pulsing data points on main line */}
        <g className="chart-dots" filter="url(#dotGlow)">
          <circle className="dot d1" cx="80" cy="230" r="4" />
          <circle className="dot d2" cx="160" cy="200" r="4" />
          <circle className="dot d3" cx="240" cy="160" r="4" />
          <circle className="dot d4" cx="320" cy="120" r="5" />
          <circle className="dot d5" cx="400" cy="80" r="4" />
          <circle className="dot d6" cx="500" cy="40" r="5" />
        </g>

        {/* Candlestick accents */}
        <g className="chart-candles">
          <rect x="78" y="225" width="4" height="20" rx="1" className="candle green" />
          <rect x="158" y="195" width="4" height="18" rx="1" className="candle green" />
          <rect x="238" y="155" width="4" height="22" rx="1" className="candle red" />
          <rect x="318" y="110" width="4" height="25" rx="1" className="candle green" />
          <rect x="398" y="72" width="4" height="20" rx="1" className="candle green" />
        </g>
      </svg>

      {/* Floating value labels */}
      <div className="chart-labels">
        <span className="chart-label l1">+12.4%</span>
        <span className="chart-label l2">+8.7%</span>
        <span className="chart-label l3">+23.1%</span>
      </div>
    </div>
  );
};

export default HeroChart;

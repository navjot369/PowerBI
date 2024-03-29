import './tickStyles.css';

export default function Tick() {
    return(
        <div className="content mb-11">
          <svg width="200" height="200">
            <circle
              fill="none"
              stroke="#3091a4"
              stroke-width="14"
              cx="100"
              cy="100"
              r="90"
              strokeLinecap="round"
              transform="rotate(-45 100 100)"
              className="circle"
            />
            <polyline
              fill="none"
              stroke="#3091a4"
              points="44,107 82,142 152,69"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="tick"
            />
          </svg>
        </div>);
}
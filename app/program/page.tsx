export default function Page() {
  return (
    <div className="w-[100vw] h-[200vh] relative overflow-hidden">
      <div className="w-full h-full absolute top-0 left-0 bg-[#e0dee1]">
        <SVGSides />
        <TransCircle />
        <SVGCircle />
      </div>
    </div>
  );
}

function SVGCircle() {
  return (
    <svg
      className="w-1/2 h-1/2 absolute z-5 top-20 left-1/3"
      viewBox="0 0 972 972"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="972"
        height="972"
      >
        <circle cx="486" cy="486" r="486" fill="url(#paint0_radial)" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="243" cy="285" r="486" fill="#3999d3" />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(486 486) rotate(90) scale(486)"
        >
          <stop stop-color="#e0dee1" />
          <stop offset="1" stop-color="#e0dee1" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function SVGSides() {
  return (
    <div className="w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="1822"
        className="h-full w-full absolute z-3 -top-[10%] left-0"
        viewBox="0 0 1920 1822"
        fill="none"
      >
        <g clip-path="url(#clip0)">
          <g filter="url(#filter0_f)">
            <circle
              cx="2167"
              cy="158"
              r="746"
              transform="rotate(-180 2167 158)"
              fill="#3999d3"
            />
          </g>
          <g filter="url(#filter1_f)">
            <circle
              cx="391"
              cy="848"
              r="640"
              transform="rotate(-180 391 848)"
              fill="#3999d3"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f"
            x="1021"
            y="-988"
            width="2292"
            height="2292"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur stdDeviation="200" />
          </filter>
          <filter
            id="filter1_f"
            x="-489"
            y="-32"
            width="1760"
            height="1760"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur stdDeviation="120" />
          </filter>
          <clipPath id="clip0">
            <rect width="1920" height="1822" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TransCircle() {
  return (
    <div className="overflow-x-hidden">
      <div className="absolute top-0 -left-1/4 w-[140vw] h-[200vh] z-4 bg-gradient-to-r from-transparent via-[#e0dee1] to-transparent"></div>
    </div>
  );
}

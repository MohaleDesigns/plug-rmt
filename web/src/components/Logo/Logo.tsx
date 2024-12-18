const Logo = () => {
  return (
    <>
      {/* <svg
        width="94"
        height="46"
        viewBox="0 0 94 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect width="93.5" height="45.5" fill="url(#pattern0_2861_603)" />
        <defs>
          <pattern
            id="pattern0_2861_603"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_2861_603"
              transform="scale(0.00534759 0.010989)"
            />
          </pattern>
          <image
            id="image0_2861_603"
            width="187"
            height="91"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg> */}

      <svg
        width="200"
        height="45"
        viewBox="0 0 311 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M302.184 35.576C300.456 35.576 298.791 35.192 297.191 34.424C295.591 33.656 294.215 32.36 293.063 30.536L296.855 27.656C297.815 28.808 298.727 29.64 299.591 30.152C300.455 30.664 301.511 30.92 302.759 30.92C303.655 30.92 304.359 30.696 304.871 30.248C305.383 29.8 305.639 29.24 305.639 28.568C305.639 28.12 305.511 27.72 305.255 27.368C304.999 27.016 304.519 26.696 303.815 26.408C303.143 26.088 302.167 25.768 300.887 25.448C298.519 24.84 296.712 24.008 295.464 22.952C294.248 21.896 293.639 20.328 293.639 18.248C293.639 16.936 293.975 15.736 294.647 14.648C295.319 13.528 296.296 12.648 297.576 12.008C298.856 11.336 300.359 11 302.087 11C304.167 11 305.943 11.416 307.415 12.248C308.887 13.08 310.055 14.072 310.919 15.224L307.031 18.296C306.487 17.688 305.751 17.128 304.823 16.616C303.927 16.072 302.839 15.8 301.559 15.8C300.791 15.8 300.103 15.992 299.495 16.376C298.887 16.76 298.583 17.304 298.583 18.008C298.583 18.68 298.887 19.24 299.495 19.688C300.103 20.136 301.255 20.552 302.951 20.936C305.799 21.608 307.831 22.504 309.047 23.624C310.263 24.744 310.871 26.216 310.871 28.04C310.871 29.576 310.471 30.92 309.671 32.072C308.871 33.192 307.815 34.056 306.503 34.664C305.191 35.272 303.752 35.576 302.184 35.576Z"
          fill="#21418D"
        />
        <path
          d="M260.634 35.0002L253.338 11.5762H258.858L263.802 29.1442H262.602L268.218 11.5762H272.97L278.634 29.1442H277.434L282.378 11.5762H287.802L280.506 35.0002H275.658L269.994 17.4802H271.242L265.578 35.0002H260.634Z"
          fill="#21418D"
        />
        <path
          d="M210.78 34.9995L190.812 8.69553L193.596 7.92753V34.9995H188.028V2.31152H192.924L212.316 27.8475L210.108 27.9915V2.31152H215.676V34.9995H210.78Z"
          fill="#21418D"
        />
        <path
          d="M166.178 44.5519C164.866 44.5519 163.587 44.3599 162.339 43.9759C161.123 43.6239 160.003 43.0159 158.979 42.1519C157.955 41.3199 157.075 40.1999 156.339 38.7919L155.954 38.0718L160.227 35.8638C161.027 37.1758 161.874 38.1519 162.77 38.7919C163.666 39.4319 164.819 39.7519 166.227 39.7519C167.987 39.7519 169.395 39.1918 170.451 38.0718C171.539 36.9518 172.083 35.2399 172.083 32.9359V27.4639H172.562V16.6638H172.083L173.426 11.5758H177.65V31.9279C177.65 34.6799 177.154 36.9999 176.162 38.8879C175.202 40.7759 173.858 42.1839 172.13 43.1119C170.434 44.0719 168.45 44.5519 166.178 44.5519ZM165.458 33.6079C163.314 33.6079 161.426 33.1439 159.794 32.2159C158.162 31.2879 156.882 29.9758 155.954 28.2799C155.026 26.5838 154.562 24.6159 154.562 22.3759C154.562 20.1039 155.01 18.1359 155.906 16.4719C156.834 14.7759 158.114 13.4479 159.746 12.4879C161.41 11.5279 163.314 11.0479 165.458 11.0479C167.474 11.0479 169.25 11.5279 170.786 12.4879C172.322 13.4158 173.507 14.7279 174.339 16.4239C175.203 18.1199 175.634 20.1039 175.634 22.3759C175.634 24.6479 175.203 26.6319 174.339 28.3279C173.507 30.0239 172.322 31.3359 170.786 32.2639C169.282 33.1599 167.506 33.6079 165.458 33.6079ZM166.322 28.8078C168.114 28.8078 169.57 28.2158 170.69 27.0318C171.81 25.8158 172.37 24.2478 172.37 22.3279C172.37 20.4079 171.81 18.8559 170.69 17.6719C169.57 16.4559 168.114 15.8479 166.322 15.8479C164.53 15.8479 163.058 16.4559 161.906 17.6719C160.786 18.8559 160.227 20.4239 160.227 22.3759C160.227 24.2639 160.786 25.8158 161.906 27.0318C163.058 28.2158 164.53 28.8078 166.322 28.8078Z"
          fill="black"
        />
        <path
          d="M146.103 35.0004H140.535V11.5764H146.103V35.0004ZM139.815 4.28037C139.815 3.25637 140.119 2.42437 140.727 1.78437C141.367 1.11237 142.231 0.776367 143.319 0.776367C144.343 0.776367 145.175 1.11237 145.815 1.78437C146.455 2.42437 146.775 3.25637 146.775 4.28037C146.775 5.30437 146.455 6.13637 145.815 6.77637C145.175 7.41637 144.343 7.73637 143.319 7.73637C142.231 7.73637 141.367 7.41637 140.727 6.77637C140.119 6.13637 139.815 5.30437 139.815 4.28037Z"
          fill="black"
        />
        <path
          d="M118.584 35.5275C116.472 35.5275 114.6 35.0155 112.968 33.9915C111.336 32.9355 110.056 31.4955 109.128 29.6715C108.232 27.8155 107.784 25.6715 107.784 23.2395C107.784 20.8075 108.232 18.6795 109.128 16.8555C110.056 15.0315 111.336 13.6075 112.968 12.5835C114.6 11.5595 116.488 11.0475 118.632 11.0475C120.712 11.0475 122.52 11.5435 124.056 12.5355C125.624 13.4955 126.84 14.9035 127.704 16.7595C128.568 18.5835 129 20.7435 129 23.2395C129 25.7035 128.568 27.8635 127.704 29.7195C126.84 31.5435 125.624 32.9675 124.056 33.9915C122.488 35.0155 120.664 35.5275 118.584 35.5275ZM119.544 30.5355C121.336 30.5355 122.776 29.8795 123.864 28.5675C124.984 27.2235 125.544 25.4635 125.544 23.2875C125.544 21.1115 124.984 19.3675 123.864 18.0555C122.776 16.7115 121.336 16.0395 119.544 16.0395C117.752 16.0395 116.28 16.7115 115.128 18.0555C114.008 19.3675 113.448 21.0955 113.448 23.2395C113.448 25.4155 114.008 27.1755 115.128 28.5195C116.28 29.8635 117.752 30.5355 119.544 30.5355ZM126.648 34.9995L125.304 29.8635H125.736V17.3355H125.304V2.31152H130.872V34.9995H126.648Z"
          fill="black"
        />
        <path
          d="M92.8623 11.0479C94.5263 11.0479 95.8383 11.3198 96.7983 11.8638C97.7583 12.4078 98.4783 13.1599 98.9583 14.1199C99.4383 15.0479 99.7423 16.1038 99.8703 17.2878C100.03 18.4398 100.11 19.6399 100.11 20.8879V34.9999H94.5423V20.4079C94.5423 18.8399 94.2063 17.7998 93.5343 17.2878C92.8943 16.7438 92.0943 16.4719 91.1343 16.4719C90.2383 16.4719 89.3103 16.6639 88.3503 17.0479C87.4223 17.3999 86.5743 17.8959 85.8063 18.5359C85.0383 19.1439 84.4143 19.8479 83.9343 20.6479L83.5023 17.6238H84.7023V34.9999H79.1343V11.5758H83.3103L84.4623 15.8479L82.8303 15.8958C83.7263 14.9038 84.7023 14.0558 85.7583 13.3518C86.8143 12.6158 87.9343 12.0559 89.1183 11.6719C90.3343 11.2559 91.5823 11.0479 92.8623 11.0479Z"
          fill="black"
        />
        <path
          d="M59.5006 35.4799C57.1966 35.4799 55.1806 34.9839 53.4526 33.9919C51.7246 32.9679 50.3646 31.5439 49.3726 29.7199C48.4126 27.8959 47.9326 25.7678 47.9326 23.3358C47.9326 20.8718 48.4126 18.7278 49.3726 16.9039C50.3646 15.0478 51.7246 13.6079 53.4526 12.5839C55.1806 11.5599 57.1966 11.0479 59.5006 11.0479C61.8366 11.0479 63.8686 11.5759 65.5966 12.6319C67.3566 13.6559 68.7166 15.0959 69.6766 16.9519C70.6366 18.7759 71.1166 20.8878 71.1166 23.2878C71.1166 23.5758 71.1006 23.8639 71.0686 24.1519C71.0686 24.4399 71.0526 24.6958 71.0206 24.9198H52.8286V20.4559H66.8926L65.7406 22.9999C65.7406 20.7919 65.2286 18.9839 64.2046 17.5759C63.1806 16.1679 61.6286 15.4639 59.5486 15.4639C57.6606 15.4639 56.1566 16.0559 55.0366 17.2399C53.9486 18.3919 53.4046 19.9279 53.4046 21.8479V24.3918C53.4046 26.3758 53.9486 27.9599 55.0366 29.1439C56.1566 30.2959 57.6926 30.8719 59.6446 30.8719C61.4046 30.8719 62.7646 30.5039 63.7246 29.7679C64.7166 29.0319 65.5646 28.1198 66.2686 27.0318L70.2526 29.4319C69.1966 31.4159 67.7886 32.9199 66.0286 33.9439C64.2686 34.9679 62.0926 35.4799 59.5006 35.4799Z"
          fill="black"
        />
        <path
          d="M34.24 11.5758L35.632 17.9599V34.9999H30.064V11.5758H34.24ZM34.624 20.5998L33.472 20.0718V15.8958L33.904 15.3199C34.224 14.7759 34.736 14.1678 35.44 13.4958C36.144 12.8238 36.96 12.2478 37.888 11.7678C38.848 11.2878 39.824 11.0479 40.816 11.0479C41.296 11.0479 41.744 11.0799 42.16 11.1439C42.608 11.2078 42.944 11.3198 43.168 11.4799V16.5198H41.632C39.52 16.5198 37.936 16.8559 36.88 17.5279C35.824 18.1679 35.072 19.1918 34.624 20.5998Z"
          fill="black"
        />
        <path
          d="M10.512 34.9995V5.81552H16.08V34.9995H10.512ZM0.47998 7.59153V2.31152H26.496V7.59153H0.47998Z"
          fill="black"
        />
        <path
          d="M240.25 14.375H244.562C244.944 14.375 245.309 14.5265 245.579 14.796C245.849 15.0656 246 15.4313 246 15.8125V23.7187V31.625C246 32.3875 245.697 33.1188 245.158 33.6579C244.619 34.1971 243.887 34.5 243.125 34.5M243.125 34.5C242.363 34.5 241.631 34.1971 241.092 33.6579C240.553 33.1188 240.25 32.3875 240.25 31.625V12.9375C240.25 12.5563 240.099 12.1906 239.829 11.921C239.559 11.6515 239.194 11.5 238.812 11.5H224.437C224.056 11.5 223.691 11.6515 223.421 11.921C223.151 12.1906 223 12.5563 223 12.9375V30.1875C223 31.3312 223.454 32.4281 224.263 33.2369C225.072 34.0456 226.169 34.5 227.312 34.5H243.125ZM228.75 17.25H234.5M228.75 23H234.5M228.75 28.75H234.5"
          stroke="#DD1E26"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  )
}

export default Logo

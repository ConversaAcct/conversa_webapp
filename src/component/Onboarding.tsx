interface OnboardingProps {
  children?: React.ReactNode;
}

import Icons from "../assets/Icons";
import "./styles/style.scss";
const Onboarding = ({ children }: OnboardingProps) => {
  return (
    <div className="onboarding-wrapper">
      <div className="onboarding-box-wrapper">
        <div className="onboarding-logo-box">
          {Icons.logo}
        </div>
        <div className="onboarding-content-box">
          <div className="onboarding-content-top">
            <p className="flex flex-col text-[36px] font-semibold leading-16" >
              Every Patient Call Answered,
              <span>       Every Time,{" "}
              <span className="text-[#5b0aff]">Automatically</span></span>
            </p>
         
            <p className="top-content-body-text">
              Sernio answers, books, and handles patient calls around the
              clock.
            </p>
          </div>
          <div className="onboarding-content-bottom"></div>
        </div>
      </div>
       <div className="onboarding-scroll-container">
      {children}
      </div>
    </div>
  );
};
export default Onboarding;

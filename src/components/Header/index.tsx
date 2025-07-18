import PlayIcon from "@assets/play.svg";
import RecIcon from "@assets/rec.svg";
import StopIcon from "@assets/stop.svg";
import { CButton } from "@coreui/react";

export const Header = () => {
  return (
    <>
      <div className="header_wrap">
        <CButton className="header_button">
          <img src={PlayIcon} />
        </CButton>
        <CButton className="header_button">
          <img src={RecIcon} />
        </CButton>
        <CButton className="header_button">
          <img src={StopIcon} />
        </CButton>
      </div>
    </>
  );
};

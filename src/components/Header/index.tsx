import { IconButton, SvgIcon } from "@mui/material";
import PlayIcon from "@assets/play.svg?react";
import RecIcon from "@assets/rec.svg?react";
import StopIcon from "@assets/stop.svg?react";

export const Header = () => {
  return (
    <>
      <div className="header">
        <IconButton>
          <SvgIcon component={PlayIcon} />
        </IconButton>
        <IconButton>
          <SvgIcon component={RecIcon} />
        </IconButton>
        <IconButton>
          <SvgIcon component={StopIcon} />
        </IconButton>
      </div>
    </>
  );
};

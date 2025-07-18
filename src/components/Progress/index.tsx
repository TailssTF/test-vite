import { CButton, CProgress } from "@coreui/react";
import { useState } from "react";

export const Progress = () => {
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [maxProgress, setMaxProgress] = useState<number>(0);

  function onPressStartAnimation() {
    setCurrentProgress(maxProgress);
  }

  function onPressResetProgress() {
    setCurrentProgress(0);
  }

  function onChangeMaxProgress(value: string) {
    const result = Number(value);

    setCurrentProgress(0);

    if (isNaN(result)) {
      setMaxProgress(0);
    } else {
      setMaxProgress(result > 100 ? 100 : result);
    }
  }

  return (
    <>
      <div className="progress_wrap">
        <CProgress
          color="danger"
          variant="striped"
          animated
          value={currentProgress}
          height={18}
          white
        />
        <div className="progress_input">
          <input
            max={100}
            min={0}
            maxLength={3}
            className="input"
            value={maxProgress}
            onChange={(e) => onChangeMaxProgress(e.target.value)}
          />
        </div>
        <div className="progress_button">
          <CButton
            className="rounded-pill"
            style={{
              color: "white",
              backgroundColor: "#0066FF",
              fontWeight: 500,
            }}
            onClick={
              currentProgress ? onPressResetProgress : onPressStartAnimation
            }
          >
            {currentProgress ? "Reset Progress" : "Start Animation"}
          </CButton>
        </div>
      </div>
    </>
  );
};

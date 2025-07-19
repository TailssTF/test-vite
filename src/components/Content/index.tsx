import { useEffect, useState } from "react";
import { Scale } from "@components/Scale";
import useDeviceDetect from "@hooks/DeviceDetect";

export const Content = () => {
  const array: number[] = new Array(11).fill(0);
  const { isMobile } = useDeviceDetect();
  const [arrayWithoutTail, setArrayWithoutTail] = useState<number[]>([]);

  useEffect(() => {
    const tail = -1 * (isMobile ? array.length % 2 : array.length % 3);
    setArrayWithoutTail(array.slice(0, tail));
  }, [isMobile]);

  return (
    <div className="content">
      {arrayWithoutTail.map((_, index) => (
        <Scale key={index} />
      ))}
    </div>
  );
};

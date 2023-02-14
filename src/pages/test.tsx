import { useState } from "react";
import { Input } from "../shared";

const Test = () => {
  const [isRender, setIsRender] = useState<boolean>(false);

  return (
    <div className="darkMode">
      <Input option="text" />
      <Input option="checkbox" />
      <Input option="date" />
      <Input option="phone" />
    </div>
  );
};

export default Test;

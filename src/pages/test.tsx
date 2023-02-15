import { Button, Clue, Input } from "../shared";

const Test = () => {
  return (
    <div className="darkMode">
      <Input option="radio" />
      <Clue>
        <Button option="attractive">123</Button>
      </Clue>
    </div>
  );
};

export default Test;

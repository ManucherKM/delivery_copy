import { Button } from "../shared";

const test = () => {
  return (
    <>
      <Button
        onClick={() => {
          console.log(123);
        }}
        type="mediocre"
      >
        123
      </Button>
    </>
  );
};

export default test;

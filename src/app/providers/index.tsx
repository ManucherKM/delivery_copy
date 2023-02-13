import Admin from "./Admin/Admin";
import Guest from "./Guest/Guest";
import User from "./User/User";

const Router = () => {
  // Это надо будет доставать из стейта
  const isAdmin = false;
  const isUser = false;
  const isGuest = true;

  return (
    <>
      {isAdmin && <Admin />}
      {isUser && <User />}
      {isGuest && <Guest />}
    </>
  );
};

export default Router;

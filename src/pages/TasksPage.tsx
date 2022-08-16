import { useNavigate } from "react-router-dom";

import { useAuth } from "../hooks";
import { APP_ROUTES } from "../constants";

export const TasksPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const onLogoute = async () => {
    await logout();
    navigate(APP_ROUTES.public.auth.login);
  }

  return (
    <div>
      <div>Task Page</div>
      <button onClick={onLogoute}>Click me to logut</button>
    </div>
  );
};
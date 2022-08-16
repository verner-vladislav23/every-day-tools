import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { APP_ROUTES } from "../constants";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const onLogin = async () => {
    await login({ password: '123', login: 'login' });
    navigate(APP_ROUTES.private.tasks.root);
  }

  return (
    <div>
      Login Page
      <button onClick={onLogin}>Click Me to login</button>
    </div>
  );
};
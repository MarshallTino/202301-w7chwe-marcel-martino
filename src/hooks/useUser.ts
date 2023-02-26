import { useAppDispatch } from "../store/hooks";
import jwt_decode from "jwt-decode";
import { loginUserActionCreator } from "../store/features/user/userSlice";
import { UserCredentials, LoginResponse, CustomTokenPayload } from "../types";

const useUser = () => {
  const apiUrl = "http://localhost:3501";
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}/user/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-type": "application/json" },
    });
    const { token } = (await response.json()) as LoginResponse;

    const tokenPayload: CustomTokenPayload = jwt_decode(token);

    const { username, id } = tokenPayload;

    dispatch(
      loginUserActionCreator({
        username,
        token,
        isLogged: true,
        id,
      })
    );
    localStorage.setItem("token", token);
  };
  return { loginUser };
};

export default useUser;

import { useAppSelector } from "../../../store";

const useAuth = () => useAppSelector((state) => state.authReducer);

export default useAuth;

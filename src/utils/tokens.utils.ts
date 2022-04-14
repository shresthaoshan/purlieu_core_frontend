import jwtDecode from "jwt-decode";
import { AuthTokenPayload } from "../types/auth";

export const decodeAccessToken = (accessToken: string) => {
	const payload = jwtDecode(accessToken);
	return payload as AuthTokenPayload;
};

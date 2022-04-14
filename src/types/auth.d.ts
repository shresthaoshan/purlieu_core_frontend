export interface AuthCredentials {
	email: string;
	password: string;
}

export interface AuthTokenPayload {
	username: string;
	email: string;
	verified: boolean;
	iat: number;
	exp: number;
}

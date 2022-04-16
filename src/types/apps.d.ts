export interface CApp {
	id: string;
	name: string;
	adminId: string;
	registeredOn: string;
	callbackUrl?: any;
}

export interface AppRegisterDetails {
	name: string;
	callbackUrl?: string;
}

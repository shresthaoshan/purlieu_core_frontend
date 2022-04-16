export interface CApp {
	id: string;
	name: string;
	adminId: string;
	registeredOn: Date;
	callbackUrl?: any;
}

export interface AppRegisterDetails {
	name: string;
	callbackUrl?: string;
}

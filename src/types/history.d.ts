export interface History {
	id: string;
	topupId: string;
	transactionId: string;
	value: number;
	remarks: string;
	appId: string;
	type: "TOPUP" | "REDEEM" | "REFUND";
	serviceProvider: "KHALTI" | "ESEWA" | "STRIPE";
	app: {
		name: string;
	};
}
export interface HistoryRedux {
	data: History[];
	status: "IDLE" | "LOADING" | "LOADED" | "FAILED";
	error?: string;
}

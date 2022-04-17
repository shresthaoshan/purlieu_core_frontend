import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import DashboardHeading from "../widgets/DashboardHeading";

interface DataRow {
	id: number;
	transaction_id: number;
	provider: string;
	type: string;
	data: string;
	amount: number | string;
	remarks: string;
}
const columns: TableColumn<DataRow>[] = [
	{
		name: "id",
		selector: (row) => row.id,
	},
	{
		name: "Transaction_id",
		selector: (row) => row.transaction_id,
	},
	{
		name: "Provider",
		selector: (row) => row.provider,
	},
	{
		name: "Type",
		selector: (row) => row.type,
	},
	{
		name: "Data",
		selector: (row) => row.data,
	},
	{
		name: "Amount",
		selector: (row) => row.amount,
	},
	{
		name: "Remarks",
		selector: (row) => row.remarks,
	},
];

const data = [
	{
		id: 1,
		transaction_id: 0,
		provider: "Esewa",
		type: "Top up",
		data: "lorem",
		amount: "RS.50",
		remarks: "canteen topup",
	},
	{
		id: 2,
		transaction_id: 1,
		provider: "Khalti",
		type: "Top up",
		data: "ipsum",
		amount: "RS.500",
		remarks: "ABCD",
	},
	{
		id: 3,
		transaction_id: 2,
		provider: "Esewa",
		type: "Top up",
		data: "dot",
		amount: "RS.210",
		remarks: "canteen topup",
	},
	{
		id: 4,
		transaction_id: 3,
		provider: "Esewa",
		type: "Top up",
		data: "in",
		amount: "RS.2330",
		remarks: "canteen topup",
	},
	{
		id: 5,
		transaction_id: 4,
		provider: "Esewa",
		type: "Top up",
		data: "citadel",
		amount: "RS.532",
		remarks: "canteen topup",
	},
	{
		id: 6,
		transaction_id: 5,
		provider: "Esewa",
		type: "Top up",
		data: "mun",
		amount: "RS.52",
		remarks: "canteen topup",
	},
];

const customStyles = {
	headCells: {
		style: {
			fontWeight: "bold",
		},
	},
};

const Transactions = () => {
	return (
		<div className="transactions">
			<DashboardHeading title="Transactions"></DashboardHeading>
			<DataTable columns={columns} data={data} customStyles={customStyles} />
		</div>
	);
};

export default Transactions;

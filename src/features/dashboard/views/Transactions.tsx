import React, { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import DashboardHeading from "../widgets/DashboardHeading";

import { useApps } from "../hooks/useApps";
import { History } from "../../../types/history";
import { useHistoryApi } from "../../../api/history.api";

import "../styles/transactions.styles.scss";

const columns: TableColumn<History>[] = [
	{
		name: "ID",
		selector: (row) => row.id,
	},
	{
		name: "Transaction ID",
		selector: (row) => row.transactionId,
		center: true,
	},
	{
		name: "Amount",
		cell: (row) => <>Rs. {Number(row.value / 100)}/-</>,
		right: true,
	},
	{
		name: "Provider",
		selector: (row) => row.serviceProvider,
		center: true,
	},
	{
		name: "Type",
		selector: (row) => row.type,
		center: true,
	},
	{
		name: "Receipent",
		selector: (row) => row.topupId,
		center: true,
	},
	{
		name: "Remarks",
		selector: (row) => row.remarks,
	},
];

const Transactions = () => {
	const { apps } = useApps();

	const { fetchByApp, histories } = useHistoryApi();

	const [activeApp, setActiveApp] = useState<string>("");

	useEffect(() => {
		if (activeApp.length) fetchByApp(activeApp);
	}, [activeApp]);

	return (
		<div className="transactions">
			<DashboardHeading
				title="Transactions"
				actions={
					<>
						<select name="apps" id="apps" onChange={(e) => setActiveApp(e.target.value)}>
							<option value="">-- Choose app --</option>
							{apps.map((item) => (
								<option key={item.id} value={item.id}>
									{item.name}
								</option>
							))}
						</select>
					</>
				}
			></DashboardHeading>
			<DataTable columns={columns} data={histories.data ?? []} progressPending={histories.status === "LOADING"} />
		</div>
	);
};

export default Transactions;

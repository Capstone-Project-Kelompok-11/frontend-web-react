import { makeRupiahValue, transformDate } from "../../../utils/helperMethod";
import Badge from "../../atoms/Badge";

export const LIST_COLUMN_ORDERS = [
	{
		Header: "ID",
		accessor: "id",
		Cell: ({ row: { original } }) => (
			<section>#{original.id.slice(0, 5)}</section>
		),
	},
	{
		Header: "Date",
		accessor: "date",
		Cell: ({ row: { original } }) => (
			<section>{transformDate(original.date)}</section>
		),
	},
	{
		Header: "Course",
		accessor: "course",
	},
	{
		Header: "Payment",
		accessor: "payment",
		Cell: ({ row: { original } }) => (
			<Badge variant={original.payment} text={original.payment} />
		),
	},
	{
		Header: "Total",
		accessor: "total",
		Cell: ({ row: { original } }) => {
			const price = makeRupiahValue(original.total);

			return (
				<section className="flex justify-center gap-3 font-bold">
					{price}
				</section>
			);
		},
	},
];

import React from "react";
import { getVariant } from "./constant";

function Badge({ variant, text }) {
	return (
		<div className={`badge ${getVariant(variant)} rounded border-none`}>
			{text}
		</div>
	);
}

export default Badge;

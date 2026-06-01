import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const ApexChart = () => {
	// Current date snapshot to avoid shifting timeline renders
	const now = new Date().getTime();

	// 1. Restructured series: Each role acts as a distinct layer.
	// Matching 'x' names across layers automatically merges them onto a single row.
	const [series] = useState<ApexAxisChartSeries>([
		{
			name: "PI",
			data: [
				{ x: "Tristan Jordan", y: [new Date("2023-01-01").getTime(), now] },
			],
		},
		{
			name: "Staff",
			data: [
				{ x: "Bernie Sentigar", y: [new Date("2023-01-10").getTime(), now] },
				{
					x: "Eve Farrell",
					y: [new Date("2023-03-08").getTime(), new Date("2024-06-01")],
				},
				{ x: "Kevin Huynh", y: [new Date("2023-09-05").getTime(), now] },
				{ x: "Avi Shukla", y: [new Date("2025-06-01").getTime(), now] },
				{ x: "Brandon Duong", y: [new Date("2025-08-01").getTime(), now] },
			],
		},
		{
			name: "Graduate Student",
			data: [
				{ x: "Freya van't Veer", y: [new Date("2024-06-01").getTime(), now] },
				{
					x: "Maria McCavitt-Malvido",
					y: [new Date("2025-06-01").getTime(), now],
				},
				{ x: "Hunter Toyoda", y: [new Date("2025-06-01").getTime(), now] },
			],
		},
		{
			name: "Undergraduate",
			data: [
				{
					x: "Bernie Sentigar",
					y: [
						new Date("2023-01-10").getTime(),
						new Date("2024-06-01").getTime(),
					],
				}, // Student timeline
				{
					x: "Brandon Duong",
					y: [new Date("2025-08-01").getTime(), new Date("2026-04-01")],
				},

				{
					x: "Virginia Lantinga",
					y: [
						new Date("2023-09-05").getTime(),
						new Date("2025-01-01").getTime(),
					],
				},
				{
					x: "Victoria How",
					y: [new Date("2023-10-01"), new Date("2024-06-01")],
				},
				{
					x: "Ryan Voves",
					y: [
						new Date("2024-09-01").getTime(),
						new Date("2025-03-01").getTime(),
					],
				},
				{
					x: "Isabelle Ai",
					y: [
						new Date("2024-04-01").getTime(),
						new Date("2025-06-01").getTime(),
					],
				}, // Student timeline
				{
					x: "Anna Valpiani",
					y: [new Date("2025-04-01").getTime(), new Date("2025-10-31")],
				},
			],
		},
	]);

	// 2. Adjust configurations to bundle matching names together
	const [options] = useState<ApexOptions>({
		chart: {
			type: "rangeBar" as const,
			toolbar: {
				show: true,
			},
		},
		plotOptions: {
			bar: {
				horizontal: true,
				barHeight: "65%",
				rangeBarGroupRows: true, // <-- Crucial: Stitches segmented rows together
			},
		},
		// Sequential colors linking back to our Series array order
		colors: [
			"#bdb0e8", // PI (Purple)
			"#a3b6d9", // Staff (Green)
			"#F5999C", // Graduate Student (Orange)
			"#FFD1DC", // Undergraduate (Blue)
		],
		xaxis: {
			type: "datetime" as const,
		},
		legend: {
			position: "top",
			horizontalAlign: "left",
		},
		tooltip: {
			custom: function ({ seriesIndex, dataPointIndex, w }) {
				const role = w.config.series[seriesIndex].name;
				const name = w.config.series[seriesIndex].data[dataPointIndex].x;
				const start = new Date(
					w.config.series[seriesIndex].data[dataPointIndex].y[0],
				).toLocaleDateString();
				const end = new Date(
					w.config.series[seriesIndex].data[dataPointIndex].y[1],
				).toLocaleDateString();

				return `
                    <div style="padding: 12px; font-family: system-ui, sans-serif; font-size: 13px; line-height: 1.5;">
                        <strong style="font-size: 14px; display: block; margin-bottom: 4px;">${name}</strong>
                        <span style="color: #666;">Role:</span> <strong>${role}</strong><br />
                        <span style="color: #666;">Duration:</span> ${start} - ${end}
                    </div>
                `;
			},
		},
	});

	return (
		<div
			style={{
				width: "100%",
				maxWidth: "900px",
				margin: "20px auto",
				padding: "10px",
				background: "#fff",
				borderRadius: "8px",
			}}
		>
			<Chart options={options} series={series} type="rangeBar" height={450} />
		</div>
	);
};

export default ApexChart;

// import React, { useState } from "react";
// import Chart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";

// export const ApexChart = () => {
// 	const now = new Date().getTime();

// 	// 1. Centralized source of truth
// 	const labMembers = [
// 		{
// 			name: "Tristan Jordan",
// 			roles: [{ name: "PI", start: "2023-01-01", end: "now" }],
// 		},
// 		{
// 			name: "Bernie Sentigar",
// 			roles: [
// 				{ name: "Undergraduate", start: "2023-01-10", end: "2024-06-01" },
// 				{ name: "Staff", start: "2024-06-01", end: "now" },
// 			],
// 		},
// 		{
// 			name: "Eve Farrell",
// 			roles: [{ name: "Staff", start: "2023-03-08", end: "now" }],
// 		},
// 		{
// 			name: "Kevin Huynh",
// 			roles: [{ name: "Staff", start: "2023-09-05", end: "now" }],
// 		},
// 		{
// 			name: "Virginia Lantinga",
// 			roles: [
// 				{ name: "Undergraduate", start: "2023-09-05", end: "2025-01-01" },
// 			],
// 		},
// 		{
// 			name: "Isabelle Ai",
// 			roles: [
// 				{ name: "Undergraduate", start: "2024-04-01", end: "2025-06-01" },
// 			],
// 		},
// 		{
// 			name: "Freya van't Veer",
// 			roles: [{ name: "Graduate Student", start: "2024-06-01", end: "now" }],
// 		},
// 		{
// 			name: "Ryan Voves",
// 			roles: [
// 				{ name: "Undergraduate", start: "2024-09-01", end: "2025-03-01" },
// 			],
// 		},
// 		{
// 			name: "Anna Valpiani",
// 			roles: [
// 				{ name: "Undergraduate", start: "2025-04-01", end: "2025-10-31" },
// 			],
// 		},
// 		{
// 			name: "Maria McCavitt-Malvido",
// 			roles: [{ name: "Graduate Student", start: "2025-06-01", end: "now" }],
// 		},
// 		{
// 			name: "Hunter Toyoda",
// 			roles: [{ name: "Graduate Student", start: "2025-06-01", end: "now" }],
// 		},
// 		{
// 			name: "Victoria How",
// 			roles: [{ name: "Undergraduate", start: "2025-06-01", end: "now" }],
// 		},
// 		{
// 			name: "Avi Shukla",
// 			roles: [{ name: "Staff", start: "2025-06-01", end: "now" }],
// 		},
// 		{
// 			name: "Brandon Duong",
// 			roles: [
// 				{ name: "Undergraduate", start: "2024-08-01", end: "2025-08-01" },
// 				{ name: "Staff", start: "2025-08-01", end: "now" },
// 			],
// 		},
// 	];

// 	// 2. Sort members by their absolute earliest start date (Descending: Newest at top)
// 	const sortedMembers = [...labMembers].sort((a, b) => {
// 		const getEarliestStart = (member: (typeof labMembers)[0]) => {
// 			const timestamps = member.roles.map((r) => new Date(r.start).getTime());
// 			return Math.min(...timestamps);
// 		};
// 		return getEarliestStart(b) - getEarliestStart(a);
// 	});

// 	// 3. Extract just the ordered list of names for the Y-Axis categories
// 	const sortedNames = sortedMembers.map((member) => member.name);

// 	// 4. Rebuild the structured multi-series array for ApexCharts
// 	const rolesOrder = ["PI", "Staff", "Graduate Student", "Undergraduate"];
// 	const seriesData = rolesOrder.map((roleName) => {
// 		const data: any[] = [];

// 		sortedMembers.forEach((member) => {
// 			member.roles.forEach((role) => {
// 				if (role.name === roleName) {
// 					data.push({
// 						x: member.name,
// 						y: [
// 							new Date(role.start).getTime(),
// 							role.end === "now" ? now : new Date(role.end).getTime(),
// 						],
// 					});
// 				}
// 			});
// 		});

// 		return { name: roleName, data };
// 	});

// 	const [series] = useState<ApexAxisChartSeries>(seriesData);

// 	const [options] = useState<ApexOptions>({
// 		chart: {
// 			type: "rangeBar" as const,
// 			toolbar: { show: true },
// 		},
// 		plotOptions: {
// 			bar: {
// 				horizontal: true,
// 				barHeight: "70%",
// 				rangeBarGroupRows: true,
// 			},
// 		},
// 		colors: [
// 			"#775DD0", // PI (Purple)
// 			"#00E396", // Staff (Green)
// 			"#FFB01A", // Graduate Student (Orange)
// 			"#008FFB", // Undergraduate (Blue)
// 		],
// 		xaxis: {
// 			type: "datetime" as const,
// 		},
// 		// 5. CRUCIAL FIX: Force the Y-Axis (which maps to data 'x') to follow our sorted array order
// 		yaxis: {
// 			type: "category" as const,
// 			categories: sortedNames,
// 		},
// 		legend: {
// 			position: "top",
// 			horizontalAlign: "left",
// 		},
// 		tooltip: {
// 			custom: function ({ seriesIndex, dataPointIndex, w }) {
// 				const role = w.config.series[seriesIndex].name;
// 				const name = w.config.series[seriesIndex].data[dataPointIndex].x;
// 				const start = new Date(
// 					w.config.series[seriesIndex].data[dataPointIndex].y[0],
// 				).toLocaleDateString();
// 				const end =
// 					w.config.series[seriesIndex].data[dataPointIndex].y[1] >= now
// 						? "Present"
// 						: new Date(
// 								w.config.series[seriesIndex].data[dataPointIndex].y[1],
// 							).toLocaleDateString();

// 				return `
//                     <div style="padding: 12px; font-family: system-ui, sans-serif; font-size: 13px; line-height: 1.5;">
//                         <strong style="font-size: 14px; display: block; margin-bottom: 4px;">${name}</strong>
//                         <span style="color: #666;">Role:</span> <strong>${role}</strong><br />
//                         <span style="color: #666;">Duration:</span> ${start} - ${end}
//                     </div>
//                 `;
// 			},
// 		},
// 	});

// 	return (
// 		<div
// 			style={{
// 				width: "100%",
// 				maxWidth: "950px",
// 				margin: "20px auto",
// 				padding: "10px",
// 				background: "#fff",
// 				borderRadius: "8px",
// 			}}
// 		>
// 			<Chart options={options} series={series} type="rangeBar" height={500} />
// 		</div>
// 	);
// };

// export default ApexChart;

import AppAreaChart from "@/components/charts/AppAreaChar";
import AppBarChart from "@/components/charts/AppBarChart";
import AppPipChart from "@/components/charts/AppPieChart";

export default function Home() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
			<div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
				<AppBarChart />
			</div>
			<div className="bg-primary-foreground p-4 rounded-lg">
				<AppPipChart />
			</div>
			<div className="bg-primary-foreground p-4 rounded-lg">Test</div>
			<div className="bg-primary-foreground p-4 rounded-lg">Test</div>
			<div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
				<AppAreaChart />
			</div>
			<div className="bg-primary-foreground p-4 rounded-lg">Test</div>
		</div>
	);
}

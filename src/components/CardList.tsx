import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

const popularContent = [
	{
		id: 11,
		title: "Popular Content 1",
		badge: "Jams",
		image: "https://picsum.photos/seed/picsum/300/300?random=1",
		count: 5001,
	},
	{
		id: 12,
		title: "Popular Content 2",
		badge: "toaly",
		image: "https://picsum.photos/seed/picsum/300/300?random=2",
		count: 1001,
	},
	{
		id: 13,
		title: "Popular Content 3",
		badge: "tom",
		image: "https://picsum.photos/seed/picsum/300/300?random=1",
		count: 1101,
	},
	{
		id: 14,
		title: "Popular Content 4",
		badge: "alice",
		image: "https://picsum.photos/seed/picsum/300/300?random=1",
		count: 3001,
	},
];

const latestTransactions = [
	{
		id: 1,
		title: "Transaction 1",
		badge: "New",
		image: "https://picsum.photos/seed/picsum/300/300",
		count: 500,
	},
	{
		id: 2,
		title: "Transaction 2",
		badge: "New",
		image: "https://picsum.photos/seed/picsum/300/300",
		count: 100,
	},
	{
		id: 3,
		title: "Transaction 3",
		badge: "New",
		image: "https://picsum.photos/seed/picsum/300/300",
		count: 110,
	},
	{
		id: 4,
		title: "Transaction 4",
		badge: "New",
		image: "https://picsum.photos/seed/picsum/300/300",
		count: 300,
	},
	{
		id: 5,
		title: "Transaction 5",
		badge: "New",
		image: "https://picsum.photos/seed/picsum/300/300",
		count: 500,
	},
];

const CardList = ({ title }: { title: string }) => {
	const list =
		title === "Popular Content" ? popularContent : latestTransactions;
	return (
		<div className="">
			<h1 className="text-lg font-medium mb-6">{title}</h1>
			<div className="flex flex-col gap-2">
				{list.map((item) => (
					<Card
						key={item.id}
						className="flex-row items-center justify-between gap-4 p-4"
					>
						<div className="w-12 h-12 rounded-sm relative overflow-hidden">
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover"
							/>
						</div>
						<CardContent className="flex-1">
							<CardTitle className="text-sm font-medium">
								{item.title}
							</CardTitle>
							<Badge variant="secondary">{item.badge}</Badge>
						</CardContent>
						<CardFooter>{(item.count / 1000).toFixed(1)}K</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default CardList;

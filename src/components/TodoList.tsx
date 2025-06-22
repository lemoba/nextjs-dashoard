"use client";

import { format } from "date-fns";
import { CalculatorIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";

const TodoList = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className="">
			<h1 className="text-lg font-medium mb-5">Todo List</h1>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button className="w-full justify-start">
						<CalculatorIcon />
						{date ? format(date, "PPP") : <span>Pic a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0 w-auto">
					<Calendar
						mode="single"
						selected={date}
						onSelect={(date) => {
							setDate(date);
							setOpen(false);
						}}
					/>
				</PopoverContent>
			</Popover>
			<ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
				<div className="flex flex-col gap-4">
					{Array.from({ length: 10 }, (_, index) => (
						<Card key={index} className="p-4">
							<div className="flex items-center gap-4">
								<Checkbox />
								<Label
									htmlFor={`todo-${index}`}
									className="text-sm text-muted-foreground"
								>
									Todo Item {index + 1}
								</Label>
							</div>
						</Card>
					))}
				</div>
			</ScrollArea>
		</div>
	);
};
export default TodoList;

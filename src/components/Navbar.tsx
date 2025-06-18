import Link from "next/link";
import { LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
	return (
		<nav className="p-4 flex items-center justify-between">
			{/* LEFT */}
			collapseButton
			{/* RIGHT */}
			<Link href="/">Dashboard</Link>
			<ThemeToggle size={22} />
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent sideOffset={10}>
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<User className="h-[1.2rem] w-[1.2rem]" />
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Settings className="h-[1.2rem] w-[1.2rem]" />
							Settings
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem variant="destructive">
						<LogOut className="h-[1.2rem] w-[1.2rem]" />
						Log out
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</nav>
	);
};
export default Navbar;

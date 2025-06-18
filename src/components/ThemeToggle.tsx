"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
	size?: number; // 单位 px，按钮高度和宽度自动适配
}

export function ThemeToggle({ size = 32 }: ThemeToggleProps) {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const saved = localStorage.getItem("theme");
		if (saved === "dark") {
			document.documentElement.classList.add("dark");
			setIsDark(true);
		} else {
			document.documentElement.classList.remove("dark");
			setIsDark(false);
		}
	}, []);

	const toggleTheme = () => {
		const next = !isDark;
		setIsDark(next);
		if (next) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};

	const trackHeight = size; // e.g. 32px
	const trackWidth = size * 2; // e.g. 64px
	const knobSize = size - 8; // 减 padding
	const slideX = trackWidth - knobSize - 4; // 滑动距离

	return (
		<button
			onClick={toggleTheme}
			className={cn(
				"relative rounded-full transition-colors duration-300",
				isDark ? "bg-gray-700" : "bg-gray-300"
			)}
			style={{
				height: trackHeight,
				width: trackWidth,
			}}
		>
			<motion.div
				className="absolute top-1 left-1 rounded-full bg-white flex items-center justify-center shadow-md"
				animate={{ x: isDark ? slideX : 0 }}
				transition={{ type: "spring", stiffness: 400, damping: 30 }}
				style={{
					width: knobSize,
					height: knobSize,
				}}
			>
				{isDark ? (
					<Moon className="w-3/4 h-3/4 text-gray-800" />
				) : (
					<Sun className="w-3/4 h-3/4 text-yellow-500" />
				)}
			</motion.div>
		</button>
	);
}

export default ThemeToggle;

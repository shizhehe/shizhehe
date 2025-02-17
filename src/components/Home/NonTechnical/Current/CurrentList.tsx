import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		studying CS & International Relations @ <Link text="Stanford" href="" />
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		researching new chips to make AI knowledge retrieval super fast @ <Link text="Brains in Silicon" href="https://web.stanford.edu/group/brainsinsilicon/" />
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		helping out as venture fellow @ <Link text="NEA" href="https://nea.com/" />
	</motion.li>
);

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		pushing myself to be physically, psychologically, and socially uncomfortable
	</motion.li>
);

const CurrentList = [Item1, Item2, Item3, Item4];

export default CurrentList;
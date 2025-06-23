import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		studying CS (ML Systems) & International Relations @ <Link text="Stanford" href="" />
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		helping AI agents collaborate and communicate with each other better @ <Link text="Hazy Research" href="https://hazyresearch.stanford.edu/" />
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		helping out as venture fellow @ <Link text="NEA" href="https://nea.com/" />
	</motion.li>
);

const CurrentList = [Item1, Item2, Item3];

export default CurrentList;
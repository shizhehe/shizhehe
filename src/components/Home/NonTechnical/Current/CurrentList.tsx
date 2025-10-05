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
		researching local/remote paradigms for complex agentic systems @ <Link text="Hazy Research" href="https://hazyresearch.stanford.edu/" />
	</motion.li>
);


const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		trying to do hard things physically, psychologically, and socially
	</motion.li>
);

const CurrentList = [Item1, Item2, Item4];

export default CurrentList;
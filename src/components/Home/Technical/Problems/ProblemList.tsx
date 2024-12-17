import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		built basis for structural/geometric information in foundational model for brain MRIs @ <Link text="STAI Lab Stanford" href="https://stai.stanford.edu/people" />
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		streamlined semiconductor design & verification process @ <Link text="Infineon" href="https://www.infineon.com/" />
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		gave language models memory before RAG existed & when context windows were short af
	</motion.li>
);

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		created better fundraiser representations using text features for one of the largest crowdfunding-platforms @ <Link text="hidwwn" href="" />
	</motion.li>
);

const ProblemList = [Item1, Item2, Item3, ];

export default ProblemList;
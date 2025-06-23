import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		built first RCS platform for text message marketing @ <Link text="Beacon Text" href="https://getbeacon.co" /> as part of <Link text="Keel 1.0" href="https://www.keel.club/" /> (2024) & <Link text="Pear Garage" href="https://pear.vc/garage/" /> (2023)
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		researched knowledge systems on neuromorphic chips @ <Link text="Brains in Silicon" href="https://web.stanford.edu/group/brainsinsilicon/" />
	</motion.li>
);

const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">04</p>
		won <Link text="CodeVsCovid19 Hackathon" href="https://codevscovid19.devpost.com/" /> with <Link text="AI to detect COVID-19 coughs" href="https://devpost.com/software/detect-now" /> (2021)
	</motion.li>
);

const Item5 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">-1</p>
		deployed @ <Link text="Cognition Factory" href="https://cognitionfactory.com/" /> (2020), <Link text="Infineon" href="https://www.infineon.com/" /> (2021), <Link text="Check24" href="https://www.check24.de/" /> (2022), Theros AI (2023), <Link text="QuantCo" href="https://www.quantco.com/" /> (2024)
	</motion.li>
);

const PastList = [Item1, Item2, Item4, Item5];

export default PastList;
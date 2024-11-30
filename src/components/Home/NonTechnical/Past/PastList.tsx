import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">01</p>
		jumpstarted future of text marketing @ <Link text="Keel 1.0" href="https://www.keel.club/" /> (2024) & @ <Link text="Pear Garage" href="https://pear.vc/garage/" /> (2023)
	</motion.li>
);

const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">02</p>
		optimized fundraiser goals for one of the largest crowdfunding-platforms (2024)
	</motion.li>
);

const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
		<p className="text-slate-500">03</p>
		youngest presenter of all time @ <Link text="ISMRM conference" href="https://blog.ismrm.org/2023/06/02/mrm-highlights-magazine-volume-8/" /> (2022)
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

const PastList = [Item1, Item2, Item3, Item4, Item5];

export default PastList;
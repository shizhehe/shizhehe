import React from "react";
import Image from "next/image";
import ScrambleText from "@/components/Global/ScrambleText";
import { links } from "@/assets/links";
import { animations } from "@/assets/animations"
import { motion } from "framer-motion";
import Link from "@/components/Global/Link";

const Personal = () => {
	return (
		<div className="space-y-10">
			<ScrambleText text="building excavators for the future of computing in AI." settings={{ speed: 1 }} />

			<motion.div animate={{ opacity: 1, x: 0 }}>
				<motion.ul variants={animations.containerVariants} initial="hidden" animate="show" className="space-y-10">
					<motion.li variants={animations.itemVariants} className="body">
						<Link text="shizhehe@stanford.edu" href="mailto:shizhehe@stanford.edu" />
					</motion.li>
					<motion.li variants={animations.itemVariants}>
						<Image src="/profile.jpg" alt="Shizhe He - Startup Founder and Developer" height={180} width={180} quality={85} priority={true} itemProp="image" />
					</motion.li>

					<motion.li variants={animations.itemVariants} className="body">
						<ScrambleText className="mb-2" text="LANGUAGES I SPEAK" settings={{ speed: 1 }} />
                        <div>rizz</div>
                        <div>lang</div>
                        <div>ting</div>
                        <div>(french)</div>
					</motion.li>

					<motion.li variants={animations.itemVariants} className="body">
						<ScrambleText className="mb-2" text="MORE LANGUAGES I SPEAK" settings={{ speed: 1 }} />
                        <div>machine learning</div>
                        <div>representation learning</div>
						<div>graph neural networks</div>
						<div>ranking & pricing systems</div>
                        <div>neurmorphic computing</div>
                        <div>OS systems</div>
						<div>AWS</div>
						<ScrambleText text="and more" settings={{ speed: 1 }} />
					</motion.li>

					{/* social links */}
					<div className="space-y-3">
						<motion.li variants={animations.itemVariants} className="body">
							<div>FIND ME</div>
						</motion.li>
						<div className="sm:block sm:-space-y-5 flex flex-wrap">
							{links.map((social, index) => (
								<motion.li variants={animations.itemVariants} key={social.name}>
									<Link text={social.name} href={social.url} className="pr-2 space-x-1" />
									{index < links.length - 1 && <p className="pr-2 sm:pr-0 sm:invisible sm:block inline">•</p>}
								</motion.li>
							))}
						</div>
					</div>
				</motion.ul>
			</motion.div>
		</div>
	);
};

export default Personal;
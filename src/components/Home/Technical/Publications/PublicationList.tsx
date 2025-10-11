import React, { useState } from "react";
import { motion } from "framer-motion";
import { animations } from "@/assets/animations";
import Link from "@/components/Global/Link";

const Item0 = () => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);
  const authors = ["Shizhe He", "Avanika Narayan", "Ishan Khare", "Scott Linderman", "Chris Ré", "Dan Biderman"];

  return (
    <motion.li variants={animations.itemVariants}>
      <p className="text-slate-500">01</p>
      An Information Theoretic Perspective on Agentic System Design @ <Link text="Hazy Research" href="https://hazyresearch.stanford.edu/" /> submitted to ICLR 2026
      <div className="authors mt-3" onClick={() => setShowAllAuthors(!showAllAuthors)}>
        <span>
          {authors.slice(0, 2).join(", ")}
          {authors.length > 2 && (
            <span>
              {" "}
              {showAllAuthors ? (
                <>
                  {authors.slice(2).join(", ")}
                </>
              ) : (
                <>+{authors.length - 2} more authors</>
              )}
            </span>
          )}
        </span>
      </div>
    </motion.li>
  );
};


const Item1 = () => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);
  const authors = ["Shizhe He", "Magdalini Paschali", "Jiahong Ouyang", "Adnan Masood", "Akshay Chaudhari", "Ehsan Adeli"];

  return (
    <motion.li variants={animations.itemVariants}>
      <p className="text-slate-500">02</p>
      <Link text="SOE: SO(3)-Equivariant 3D MRI Encoding" href="https://arxiv.org/abs/2410.12053" /> @ <Link text="STAI Lab Stanford" href="https://stai.stanford.edu/people" />
      <div className="authors mt-3" onClick={() => setShowAllAuthors(!showAllAuthors)}>
        <span>
          {authors.slice(0, 2).join(", ")}
          {authors.length > 2 && (
            <span>
              {" "}
              {showAllAuthors ? (
                <>
                  {authors.slice(2).join(", ")}
                </>
              ) : (
                <>+{authors.length - 2} more authors</>
              )}
            </span>
          )}
        </span>
      </div>
    </motion.li>
  );
};

const Item2 = () => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);
  const authors = ["Shizhe He", "Veronika Zimmer", "Daniel Rueckert", "Kerstin Hammernik"];

  return (
    <motion.li variants={animations.itemVariants}>
      <p className="text-slate-500">03</p>
      <Link text="Understanding Domain Shift in Learned Magnetic Resonance Imaging (MRI) Reconstruction: A Quantitative Analysis on fastMRI Knee and Neuro Sequences" href="https://oar.ptb.de/resources/show/10.7795/320.202401" /> @ <Link text="AIM Lab TUM" href="https://aim-lab.io/" />
      <div className="authors mt-3" onClick={() => setShowAllAuthors(!showAllAuthors)}>
        <span>
          {authors.slice(0, 2).join(", ")}
          {authors.length > 2 && (
            <span>
              {" "}
              {showAllAuthors ? (
                <>
                  {authors.slice(2).join(", ")}
                </>
              ) : (
                <>+{authors.length - 2} more authors</>
              )}
            </span>
          )}
        </span>
      </div>
    </motion.li>
  );
};

const Item3 = () => {
  const [showAllAuthors, setShowAllAuthors] = useState(false);
  const authors = ["Andreas Kofler", "Shizhe He", "Daniel Rueckert", "Tobias Schaeffter", "Sebastian Schmitter", "Christoph Kolbitsch", "Christoph Aigner", "Kerstin Hammernik"];

  return (
    <motion.li variants={animations.itemVariants}>
      <p className="text-slate-500">04</p>
      Learning-based Cardiac Cine MRI Reconstruction at 7T @ <Link text="AIM Lab TUM" href="https://aim-lab.io/" />
      <div className="authors mt-3" onClick={() => setShowAllAuthors(!showAllAuthors)}>
        <span>
          {authors.slice(0, 2).join(", ")}
          {authors.length > 2 && (
            <span>
              {" "}
              {showAllAuthors ? (
                <>
                  {authors.slice(2).join(", ")}
                </>
              ) : (
                <>+{authors.length - 2} more authors</>
              )}
            </span>
          )}
        </span>
      </div>
    </motion.li>
  );
};

const PublicationList = [Item0, Item1, Item2, Item3];

export default PublicationList;
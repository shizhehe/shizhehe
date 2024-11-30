import { motion } from "framer-motion";

import Current from "@/components/Home/Current/Current";
import Personal from "@/components/Home/Personal";
import Problems from "@/components/Home/Problems/Problems";
import Past from "@/components/Home/Past/Past";
import Publications from "./Publications/Publications";

export default function TechnicalContent() {
    return (
        <div>
            <main className="flex min-h-screen flex-col items-center justify-between p-20 sm:p-8">
                <div className="z-10 w-full max-w-7xl items-start justify-between sm:flex">
                    <div className="sm:w-1/5 max-w-xs pb-20">
                        <Personal />
                    </div>
                    {/* divider line that only shows up on xs screens like mobile */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="sm:invisible sm:w-0 sm:mt-0 sm:mb-0 -mt-10 mb-10 w-full border-b border-slate-500"
                    />
                    <div className="grid text-left sm:mb-5 sm:w-1/5 xs:grid-cols-1 gap-5">
                        <Problems />
                        <Publications />
                    </div>
                    <div className="grid text-left sm:mb-0 sm:w-1/5 xs:grid-cols-1 gap-5">
                        <Current />
                        <Past />
                    </div>
                    <div className="grid text-left sm:mb-0 sm:w-1/5 xs:grid-cols-1 gap-5">
                        <Past />
                    </div>
                </div>
            </main>
        </div>
    );
}
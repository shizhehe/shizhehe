import Image from "next/image";
import Link from "@/components/Global/Link";

export default function Footer() {
    return (
        <footer className="absolute inset-x-0 bottom-5 flex flex-col gap-6 items-center justify-center">
            <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="mailto:shizhehe@stanford.edu"
                target="_blank"
                rel="noopener noreferrer"
                >
            text Me
            </a>
            <div className="text-sm text-gray-500">hey <Link text="Tina" href="https://github.com/Tina-Mai" />, I used your template because I loved it so much, hope you don't mind and thank you</div>
        </footer>
    );
}
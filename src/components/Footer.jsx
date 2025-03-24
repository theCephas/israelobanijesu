"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandThreejs,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import { Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("israelobanijesu2@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 700);
        // console.log("Text copied to clipboard successfully!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <footer className="selection max-w-[1440px] mx-auto px-6 2xl:px-0 pb-20 clashDisplay flex flex-col md:flex-row items-center sm:items-start md:items-end md:justify-between gap-4">
      <div className="flex flex-col gap-4 items-center sm:items-start">
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <IconBrandWhatsapp size={20} />
          <span>(+234) 7043863010</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <IconMail size={20} />
          <Link href={"mailto:israelobanijesu2@gmail.com"} target="_blank">
            israelobanijesu2@gmail.com
          </Link>
          <TooltipProvider>
            <Tooltip open={copied}>
              <TooltipTrigger asChild>
                <Copy
                  size={16}
                  className="cursor-pointer"
                  onClick={copyToClipboard}
                />
              </TooltipTrigger>

              <TooltipContent>
                <p>Email Copied</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex flex-col items-center sm:flex-row gap-2 text-sm text-neutral-600">
          <b>Built with:</b>
          <div className="flex gap-2">
            <span className="flex">
              <IconBrandNextjs size={20} /> Nextjs
            </span>
            <span className="flex">
              <IconBrandTailwind size={20} /> Tailwindcss
            </span>
            <span className="flex">
              <IconBrandThreejs size={20} /> Threejs
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-neutral-600">
        Copyright © Isreal Oluwasami {new Date().getFullYear()} All rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;

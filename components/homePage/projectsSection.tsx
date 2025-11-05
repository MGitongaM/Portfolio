'use client'
import { CldImage } from 'next-cloudinary';
import { projectEntries } from "@/constants/portfolioEnteries";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <div className="">
        <div className="max-w-5xl mt-1 md:mt-64 lg:mt-4 mx-auto px-4">
        <div className="c">
            {projectEntries.map((entry) => (
            <div key={entry.id} className="mt-20  md:my-40 px-2 py-8">
                <div className="space-y-2 mb-4">
                <h2 className="text-3xl font-bold">{entry.projectName}</h2>
                <p className="font-light flex pl-4">
                    Site Link:{" "}
                    <Link target="_blank" href={entry.projectWebsiteLink}>
                    <span className="font-normal hover:underline hover:duration-700 hover:ease-in flex">
                        {entry.projectWebsiteLink} <ArrowUpRight size={16} />
                    </span>
                    </Link>{" "}
                </p>
                </div>
                <CldImage
                src={entry.projectImage}
                height={400}
                width={1200}
                alt={`${entry.projectName} screenshot`}
                className="bg-cover rounded-sm"
                />
                <div className="max-w-3xl mx-auto space-y-3 my-4">
                <h3 className="font-semibold">{entry.projectTagLineHeader}</h3>
                <p className="c">{entry.projectIntroduction}</p>
                <p className="font-medium">My Role In The Project:</p>
                <p className="c">{entry.myRoleIntroduction}</p>
                <ul className="list-disc space-y-2">
                    {entry.myProjectContribution.map((contribution, index) => (
                    <li key={index}>{contribution}</li>
                    ))}
                </ul>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
}

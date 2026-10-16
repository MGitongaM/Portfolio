"use client";

import { projectEntries } from "@/constants/portfolioEnteries";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";
import CloudinaryImage from "../mediaAssets/CloudinaryImage";

export default function ProjectsSection() {
  return (
    <div className="">
      <div className="max-w-5xl mt-1 md:mt-64 lg:mt- mx-auto px-4">
        <div className="pt-4">
          {projectEntries.map((entry) => (
            <div key={entry.id} className="mt-20  md:my-40 px-2 py-8">
              <div className="space-y-2 mb-4">
                <h2 className="text-3xl font-bold">{entry.projectName}</h2>
                <p className="font-light flex pl-0">
                  Site Link:{" "}
                  <Link target="_blank" href={entry.projectWebsiteLink}>
                    <span className="font-normal hover:underline hover:duration-700 hover:ease-in flex">
                      {entry.projectWebsiteLink} <ArrowUpRight size={16} />
                    </span>
                  </Link>{" "}
                </p>
              </div>

              <CloudinaryImage
                imgSrc={entry.projectImage}
                height={400}
                width={1200}
                alt={`${entry.projectName} screenshot`}
                classNames="bg-cover rounded-sm"
              />
              <div className="max-w-3xl mx-auto space-y-6 my-4">
                <h3 className="font-semibold text-2xl">
                  {entry.projectTagLineHeader}
                </h3>
                <p className="text-sm leading-6">{entry.projectIntroduction}</p>
                <p className="font-medium text-xl mb-2 mt-8">
                  My Role In The Project:
                </p>
                <p className="text-sm leading-6">{entry.myRoleIntroduction}</p>
                <ul className="list-disc space-y-4 mt-8 leading-7">
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

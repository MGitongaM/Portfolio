"use client";

import CloudinaryImage from "../mediaAssets/CloudinaryImage";

export default function HeadShotSection() {
  return (
    <section className=" ">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="relative">
          <CloudinaryImage
            imgSrc={`Michael`}
            height={400}
            width={1200}
            alt={`Michael Gitonga Mbae`}
            classNames="h-auto w-48 bg-cover rounded-md -mt-20"
          />
        </div>
        <div className="relative md:absolute top-10 md:top-96 lg:top-72 md:ml-56 lg:ml-72 my-20">
          <div className="space-y-20">
            <h1 className="text-xl font-semibold">
              Hi there, I am Michael Gitonga. <br />{" "}
            </h1>
            <p className="text-5xl max-w-3xl font-semibold">
              {/* Let&apos;s bring your website to life and connect you with your
              target audience. */}
              Let&apos;s elevate your website presence and connect your brand
              with the right audience.
            </p>
            <div className="mt-8 space-y-2">
              <p className="text-sm">
                Email:
                <span className="font-semibold">
                  {" "}
                  michaelgitonga588@gmail.com
                </span>
              </p>
              <p className="text-sm">
                Phone:<span className="font-semibold"> 0724 090 518</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

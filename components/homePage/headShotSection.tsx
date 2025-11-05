'use client'
import { CldImage } from 'next-cloudinary';

export default function HeadShotSection() {
  return (
    <section className=" ">
        <div className="max-w-5xl mx-auto px-4">
            <div className="relative">
               
                <CldImage
                src={"Michael_head_shot_enbefw"}
                height={150}
                width={150}
                alt="Michael Gitonga Mbae"
                className=" bg-gray-500 bg-contain rounded-md -mt-20"
                />
            
            </div>
            <div className="relative md:absolute top-10 md:top-96 lg:top-72 md:ml-56 lg:ml-72">
                <div className="space-y-3">
                    <h1 className="text-4xl font-semibold">Hi there, I Am Michael Gitonga. <br/> </h1>
                    <p className="text-xl font-semibold">Let&apos;s bring your website to life and connect you with your target audience.</p>

                </div>
                    <div className="mt-8 space-y-2">
                    <p className="text-sm">
                        Email:
                        <span className="font-semibold"> gitonga1993@gmail.com</span>
                    </p>
                    <p className="text-sm">
                        Phone:<span className="font-semibold"> 0724 090 518</span>
                    </p>
                    </div>

                </div>

        </div>
    </section>
  );
}

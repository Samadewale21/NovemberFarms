"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./WobbleCard";

export function WobbleCardDemo() {
  return (
    (<div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-green-700 min-h-[500px] lg:min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
             Eggs
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Every morning, the farmer collects fresh, organic eggs from his hens, ready to sell at the local market.
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-yellow-500">
        <h2
          className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Cattle
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        The farmer raises a herd of cattle, focusing on sustainable practices to provide high-quality beef to his community
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-yellow-500 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Birds
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          The farmer carefully tends to his flock of hens, ensuring they are healthy and free-range for optimal egg production
          </p>
        </div>
        <Image
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
    </div>)
  );
}

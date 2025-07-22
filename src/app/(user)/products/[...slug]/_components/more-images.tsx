"use client";
import { Carousel } from "@/app/_components/ui/carousel";
import { Dialog } from "@/app/_components/ui/dialog";
import { imageUrl } from "@/utils/product";
import { More } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

export default function MoreImages({
  images,
}: {
  images: { id: number; image: { name: string } }[];
}) {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="flex cursor-pointer items-center justify-center border border-gray-400 bg-gray-200 blur-[1px]"
      >
        <More color="gray" size={32} />
      </button>
      {show && (
        <Dialog maxWidth="6xl" isOpen={show} toggle={() => setShow(!show)}>
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <Image
              className="select-none"
              src={imageUrl(images[currentImage].image.name)}
              alt={images[currentImage].image.name}
              width={512}
              height={512}
            />
            <Carousel>
              {images.map((image, index) => (
                <Image
                  className="cursor-pointer rounded-lg border border-gray-300 p-1 select-none"
                  key={index}
                  src={imageUrl(image.image.name)}
                  alt={image.image.name}
                  onClick={() => setCurrentImage(index)}
                  width={128}
                  height={128}
                />
              ))}
            </Carousel>
          </div>
        </Dialog>
      )}
    </>
  );
}

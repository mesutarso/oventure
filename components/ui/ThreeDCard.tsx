"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  slug: string;
}


export function ThreeDCard({ title, description, image,slug }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold  text-pink"
        >
          {title}
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm  mt-2 line-clamp-2"

        >
            <div dangerouslySetInnerHTML={
                {
                    __html: description
                }
            } />



        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
            <AspectRatio ratio={16 / 9}>
                <Image
                src={image}
                width={400}
                height={400}
                className="object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                />
            </AspectRatio>

        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal text-pink dark:text-white"
          >
              <Link href={'/reservation'}>
                  Reserver →
              </Link>

          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-pink dark:bg-white dark:text-black text-white text-xs font-bold"
          >
              <Link href={`/services/${slug}`}>
                    Visiter
              </Link>

          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}


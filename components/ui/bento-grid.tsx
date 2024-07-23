import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-3 gap-4 w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
    slug,
    ...props
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image: string;
  slug:string

}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl hover:border-0  transition duration-200 shadow-input  border-1 border-neutral-100 p-4  bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      {...props}
    >
      <div>

        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <Image
            src={image}
            width={300}
            height={300}
            alt="image"
            className={'w-full rounded-2xl'}
          />
        </div>
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">

        <div className="font-sans font-bold text-primary  mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs mb-8 " dangerouslySetInnerHTML={{
            __html: description as string,
        }}/>
        <div>

            <Button className={'bg-primary text-white hover:bg-blueDark'}>
                <Link href={`/blog/${slug}`}>
                    Lire la suite
                </Link>
            </Button>
        </div>

      </div>
    </div>
  );
};

import { cn } from "@/lib/cn";
import {Button} from "@/components/ui/button";
import Link from "next/link";

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
  header,
  icon,
    ...props
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl hover:border-0 borderCustomCard transition duration-200 shadow-input  border-1 p-4  bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      {...props}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-primary dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs mb-8 " dangerouslySetInnerHTML={{
            __html: description as string,
        }}/>
        <div className="postuler">
            <Button>
                <Link href="/contact">
                    Postuler
                </Link>
            </Button>
        </div>


      </div>
    </div>
  );
};

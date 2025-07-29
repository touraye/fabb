import { motion as m, type MotionProps } from "framer-motion";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typoVariants = cva("overflow-wrap overflow-hidden leading-normal", {
  variants: {
    typo: {
      //display typo classnames
      "display-large-bold": "text-[95px] leading-[133px] font-bold",
      "display-large-medium": "text-[95px] leading-[133px] font-medium",
      "display-large-semibold": "text-[95px] leading-[133px] font-semibold",
      "display-small-bold": "text-[76px] leading-[91px] font-bold",
      "display-small-medium": "text-[76px] leading-[91px] font-medium",
      "display-small-semibold": "text-[76px] leading-[91px] font-semibold",

      //header typo classnames
      "header-1-regular": "text-[61px] leading-[85px] font-normal",
      "header-1-medium": "text-[61px] leading-[85px] font-medium",
      "header-1-semibold": "text-[61px] leading-[85px] font-semibold",
      "header-2-light": "xl:text-[49px] sm:text-[40px] sm:text-[35px] xs:text-[30px] text-[30px] xs:leading-[64px] leading-[45px] font-light",
      "header-2-regular": "xl:text-[49px] sm:text-[40px] sm:text-[35px] xs:text-[30px] text-[30px] xl:leading-[64px] sm:leading-[50px] leading-[40px] font-normal",
      "header-2-medium": "xl:text-[49px] sm:text-[40px] sm:text-[35px] xs:text-[30px] text-[30px] xl:leading-[64px] sm:leading-[50px] leading-[40px] font-medium",
      "header-2-semibold": "xl:text-[49px] sm:text-[40px] sm:text-[35px] xs:text-[30px] text-[30px] xl:leading-[64px] sm:leading-[50px] leading-[40px] font-semibold",
      "header-3-light": "xl:text-[39px] lg:text-[35px] sm:text-[30px] text-[25px] xl:leading-[47px] md:leading-[45px] xs:leading-[35px] leading-[30px] font-light",
      "header-3-regular": "xl:text-[39px] lg:text-[35px] sm:text-[30px] text-[25px] xl:leading-[47px] md:leading-[45px] xs:leading-[35px] leading-[30px] font-normal",
      "header-3-medium": "xl:text-[39px] lg:text-[35px] sm:text-[30px] text-[25px] xl:leading-[47px] md:leading-[45px] xs:leading-[35px] leading-[30px] font-medium",
      "header-3-semibold": "xl:text-[39px] lg:text-[35px] sm:text-[30px] text-[25px] xl:leading-[47px] md:leading-[45px] xs:leading-[35px] leading-[30px] font-semibold",
      "header-4-light": "lg:text-[31px] sm:text-[28px] xs:text-[25px] text-[18px] leading-[40px] font-light",
      "header-4-regular": "lg:text-[31px] sm:text-[28px] xs:text-[25px] text-[18px] leading-[40px] font-normal",
      "header-4-medium": "lg:text-[31px] sm:text-[28px] xs:text-[25px] text-[18px] leading-[40px] font-medium",
      "header-4-semibold": "lg:text-[31px] sm:text-[28px] xs:text-[25px] text-[18px] lg:leading-[40px] leading-[37px] font-semibold",
      "header-5-regular": "xl:text-[25px] lg:text-[20px] xs:text-[18px] text-[16px] xl:leading-[30px] leading-[25px] font-normal",
      "header-5-medium": "xl:text-[25px] lg:text-[20px] xs:text-[18px] text-[16px] xl:leading-[30px] leading-[25px] font-medium",
      "header-5-semibold": "xl:text-[25px] lg:text-[20px] xs:text-[18px] text-[16px] xl:leading-[30px] leading-[25px] font-semibold",
      "header-6-regular": "xl:text-[20px] md:text-[18px] text-[20px] xl:leading-[24px] leading-[23px] font-normal",
      "header-6-medium": "xl:text-[20px] md:text-[18px] text-[20px] xl:leading-[24px] leading-[23px] font-medium",
      "header-6-semibold": "xl:text-[20px] md:text-[18px] text-[20px] xl:leading-normal leading-[23px] font-semibold",

      //body typo classnames
      "body-large-regular": "xl:text-[18px] md:text-[15px] sm:text-[15px] text-[16px] leading-normal font-normal",
      "body-large-medium": "xl:text-[18px] md:text-[15px] sm:text-[15px] text-[16px] leading-normal font-medium",
      "body-large-semibold": "xl:text-[18px] md:text-[15px] sm:text-[15px] text-[16px] leading-normal font-semibold",
      "body-large-underline": "",
      "body-medium-regular": "sm:text-[16px] text-[14px] leading-[24px] font-normal",
      "body-medium-medium": "sm:text-[16px] text-[14px] leading-[24px] font-medium",
      "body-medium-semibold": "sm:text-[16px] text-[14px] leading-[24px] font-semibold",
      "body-medium-underline": "",
      "body-small-small": "text-[10px] leading-[16px] font-normal",
      "body-small-regular": "text-[14px] leading-[16px] font-normal",
      "body-small-medium": "text-[13px] leading-[16px] font-medium",
      "body-small-semibold": "text-[13px] leading-[16px] font-semibold",
      "body-small-underline": "",
      "caption-regular": "text-[10px] leading-[12px] font-normal",
      "caption-medium": "text-[10px] leading-[12px] font-medium",
      "caption-semibold": "text-[10px] leading-[12px] font-semibold",
      "caption-underline": "",
      "tag-regular": "text-[8px] leading-[10px] font-normal",
      "tag-medium": "text-[8px] leading-[10px] font-medium",
      "tag-semibold": "text-[8px] leading-[10px] font-semibold",
      "tag-underline": "",
    },
    family: {
      "hk-grotesk": "font-hk-grotesk",
    },
    appearance: {
      move: "hover:ml-1.5 transition-all duration-300",
      underline: "hover:underline transition-all duration-300",
    },
  },
  defaultVariants: {
    typo: "body-medium-regular",
    family: "hk-grotesk",
  },
});

interface TypographyProps
  extends VariantProps<typeof typoVariants>,
    MotionProps {
  mDelay?: number;
  children: React.ReactNode;
  className?: string;
  maxLines?: number;
  disableSelect?: boolean;
}

export default function Typography({
  typo,
  appearance,
  children,
  className,
  mDelay = 0,
  maxLines = 0,
  disableSelect = false,
  ...props
}: Readonly<TypographyProps>) {
  const lineClampClass =
    maxLines > 0 ? `line-clamp-${maxLines}` : "whitespace-normal";

  return (
    <m.span
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, ease: "easeIn", delay: mDelay }}
      viewport={{ once: true }}
      className={cn(
        typoVariants({ typo, appearance }),
        lineClampClass,
        disableSelect ? "select-none" : "select-auto",
        className,
      )}
      {...props}
    >
      {children}
    </m.span>
  );
}

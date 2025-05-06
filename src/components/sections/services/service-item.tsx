import Image from "next/image";
import * as motion from "motion/react-client";

interface ServiceItemProps {
  item: {
    icon: string;
    title: string;
    description: string;
  };
}
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const variants = {
  down: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  top: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
  },
};

export function ServiceItem({
  item: { icon, description, title },
}: ServiceItemProps) {
  return (
    <motion.div
      className="flex gap-8 items-start"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.figure variants={variants.top} className="w-full max-w-12">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="w-full"
        />
      </motion.figure>
      <div className="flex-col gap-2 text-neutral-950 hidden sm:flex">
        <h3 className="font-martel font-bold text-base lg:text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex-col gap-2 text-neutral-950 flex sm:hidden">
        <motion.h3
          className="font-martel font-bold text-base lg:text-lg"
          variants={variants.down}
        >
          {title}
        </motion.h3>
        <motion.p className="text-sm" variants={variants.down}>
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}

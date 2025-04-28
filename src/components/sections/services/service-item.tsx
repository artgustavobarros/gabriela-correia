import Image from "next/image";

interface ServiceItemProps {
  item: {
    icon: string;
    title: string;
    description: string;
  };
}

export function ServiceItem({
  item: { icon, description, title },
}: ServiceItemProps) {
  return (
    <div className="flex gap-8 items-start">
      <Image src={icon} alt={title} width={48} height={48} className="" />
      <div className="flex flex-col gap-2 text-neutral-950">
        <h3 className="font-martel font-bold text-base lg:text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

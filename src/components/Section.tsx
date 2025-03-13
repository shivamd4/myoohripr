import { cn } from "@/lib/utils";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("flex flex-col items-center mt-12", className)}>
      {children}
    </section>
  );
};

export default Section;

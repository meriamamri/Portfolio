interface DescriptionProps {
  description: string;
  className?: string;
}

const Description = ({ description, className }: DescriptionProps) => {
  return (
    <p className={className ?? "text-muted-foreground max-w-2xl mx-auto"}>
      {description}
    </p>
  );
};

export default Description;

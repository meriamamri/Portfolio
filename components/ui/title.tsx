interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
      {title}
    </h2>
  );
};

export default Title;

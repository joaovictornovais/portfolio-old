const TextSection = ({ title, size, text }) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={`font-bold ${size} text-zinc-900`}>{title}</h2>
      <p className="text-gray-800">{text}</p>
    </div>
  );
};

export default TextSection;

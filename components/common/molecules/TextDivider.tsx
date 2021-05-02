interface TextDividerProps {
  text: string;
}

const TextDivider = ({ text }: TextDividerProps): JSX.Element => (
  <div className="flex justify-center items-center relative">
    <div className="absolute h-1 inset-0 my-auto bg-green" />
    <p className="relative px-4 bg-white text-green">{text}</p>
  </div>
);

export default TextDivider;

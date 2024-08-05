interface Props {
  text: string;
}

const parseTextToHtml = (text: string): JSX.Element => {
  let parsedText = text.split('\n\n').join('<br/><br/>');

  parsedText = parsedText.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold">$1</span>');

  parsedText = parsedText
    .split('\n')
    .map(line => (line.trim().startsWith('<span>') ? line : `<p>${line}</p>`))
    .join('');

  return <div dangerouslySetInnerHTML={{ __html: parsedText }} />;
};

const TextParser: React.FC<Props> = ({ text }) => {
  return <>{parseTextToHtml(text)}</>;
};

export default TextParser;
import clsx from 'clsx';

type Props = {
  text: string;
  variant?:
    | 'pinkToGray'
    | 'whitePinkToGray'
    | 'whiteBlackToPinkText'
    | 'whitePinkToGrayWhite';
  size?: 'lg' | 'md';
};

export const Button = ({
  text,
  variant = 'pinkToGray',
  size = 'md',
}: Props) => {
  const variants: Record<typeof variant, string> = {
    pinkToGray: 'bg-RoseRed hover:bg-NewGrey text-white',
    whitePinkToGray: 'bg-white text-RoseRed hover:text-black',
    whiteBlackToPinkText: 'bg-white text-black hover:text-RoseRed',
    whitePinkToGrayWhite:
      'bg-white text-RoseRed hover:text-white hover:bg-NewGrey',
  };

  const classes = clsx(
    {
      'py-2 px-4': size === 'lg',
      'p-2': size === 'md',
    },
    `${variants[variant]} uppercase font-CoreRinho75 rounded-lg transition ease-in-out duration-300 w-fit`
  );

  return <button className={classes}>{text}</button>;
};
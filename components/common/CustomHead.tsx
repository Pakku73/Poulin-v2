import Head from 'next/head';

type Props = {
  canonicalLink: string;
};

export const CustomHead = ({ canonicalLink }: Props) => {
  return (
    <Head>
      <link rel="canonical" href={canonicalLink} />
    </Head>
  );
};

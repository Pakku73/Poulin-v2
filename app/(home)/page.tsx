import { Metadata } from 'next';
import Herobanner from '@/containers/Home/HeroBanner';
import Slider from '@/containers/Home/Slider';
import Experts from '@/components/common/Experts';
import Engagement from '@/containers/Home/Engagement';
import Feuillage from '@/containers/Home/Feuillage';
import Carte from '@/components/common/Carte';
import Form from '@/components/common/Form';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Herobanner />
  <Slider />
  <Experts />
  <Engagement />
  <Feuillage />
  <Carte />
  <Form />
  </>
}

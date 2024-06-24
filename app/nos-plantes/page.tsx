import { Metadata } from 'next';
import Herobanner from '@/containers/Nos-plantes/HeroBanner';
import Slider from '@/containers/Nos-plantes/Slider';
import Experts from '@/components/common/Experts';
import Feuillage from '@/containers/Home/Feuillage';
import Carte from '@/components/common/Carte';
import Form from '@/components/common/Form';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function HomePage() {
  return <>
  <Herobanner></Herobanner>
  <Slider></Slider>
  <Experts></Experts>
  <Feuillage></Feuillage>
  <Carte></Carte>
  <Form></Form>
  </>;
}

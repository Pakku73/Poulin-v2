import { Metadata } from 'next';
import Herobanner from '@/containers/Nos-engagements/HeroBanner';
import ProductionLocale from '@/containers/Nos-engagements/production-locale';
import Engagement from '@/containers/Nos-engagements/Engagements'
import CultureRaisonee from '@/containers/Nos-engagements/Culture-raisonee'
import Experts from '@/components/common/Experts';
import Baniere from '@/containers/Nos-engagements/Baniere';
import Avis from '@/containers/common/Avis';

export default function NosEngagements() {
  return <>
  <Herobanner />
  <ProductionLocale />
  <Experts />
  <Engagement />
  <CultureRaisonee />
  <Baniere />
  <Avis />
  </>;
}

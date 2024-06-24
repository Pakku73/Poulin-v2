import Herobanner from '@/containers/Contact/HeroBaneer';
import Experts from '@/components/common/Experts';
import Form from '@/components/common/Form';
import Baniere from '@/containers/Nos-engagements/Baniere';
import Avis from '@/containers/common/Avis';
import Carte from '@/components/common/Carte';

export default function Contact() {
  return <>
  <Herobanner />
  <Experts />
  <Form />
  <Baniere />
  <Avis />
  <Carte />
  </>
}
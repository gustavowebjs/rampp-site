import Pricing from '@/content/home/Pricing';
import SectionFeatures from '@/content/home/SectionFeatures';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, TextColumn } from '../styles/HomeStyles';

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <TextColumn>
            <h1>Um CRM simples e robusto para escalar suas vendas</h1>
            <div />
            <p>O rampp CRM ajuda empresas na gestão de times de vendas.</p>
            <br />
            <Link href="/">Registre Agora</Link>
          </TextColumn>
          <Image
            src="/abstract_rampp.png"
            alt="Developer"
            width={900}
            height={600}
          />
        </Row>
      </Container>

      {/* SECTION CARDS FEATURES */}
      <SectionFeatures />

      {/* PRICING CARDS FEATURES */}
      <Pricing />
    </>
  );
}

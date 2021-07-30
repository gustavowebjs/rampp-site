import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, TextColumn } from '../styles/HomeStyles';

export default function Home() {
  return (
    <Container>
      <Row>
        <TextColumn>
          <h1>Um CRM Robusto para sua empresa!</h1>
          <p>
            O rampp CRM vem para ajudar pequenas e médias empresas na gestão de
            times de vendas.
          </p>
          <br />
          <Link href="/">Registre Agora</Link>
        </TextColumn>
        <Image
          src="/svg/developer.svg"
          alt="Developer"
          width={900}
          height={600}
        />
      </Row>
    </Container>
  );
}

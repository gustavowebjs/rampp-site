import React from 'react';
import Image from 'next/image';
import { Container, Row } from './FooterStyles';

const Footer: React.FC = () => (
  <Container>
    <Row>
      <Image
        alt="Logo Rampp negative"
        src="/ramppwhite.png"
        width={190}
        height={50}
      />
    </Row>
  </Container>
);

export default Footer;

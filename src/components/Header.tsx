import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/rampplogo.png';
import { Container, Nav, NavigationContainer, LoginLink } from './HeaderStyles';

const Header: React.FC = () => (
  <>
    <Head>
      <title>Rampp WebSite</title>
      <meta
        name="description"
        content="TypeScript starter for Next.js that includes all you need to build amazing apps"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Container>
      <Nav>
        <Image src={Logo} alt="Rampp CRM logo" />

        <NavigationContainer>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/About">Sobre</Link>
            </li>
            <li>
              <Link href="/Contact">Contato</Link>
            </li>
            <LoginLink href="/">Acesso</LoginLink>
          </ul>
        </NavigationContainer>
      </Nav>
    </Container>
  </>
);

export default Header;

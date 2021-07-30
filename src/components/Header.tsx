import Head from 'next/head';
import React, { useState } from 'react';
import Image from 'next/image';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Link from 'next/link';
import Logo from '../../public/rampplogo.png';
import {
  Container,
  Nav,
  NavigationContainer,
  LoginLink,
  NavMobile,
  ButtonNavMobile,
} from './HeaderStyles';

const Header: React.FC = () => {
  const [navMobile, setNavMobile] = useState<boolean>(false);
  const [links] = useState<Array<string>>([`Home`, `About`, `Contact`]);

  function toggleNavMobile() {
    setNavMobile(!navMobile);
  }
  return (
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
          <Link href="/" passHref>
            <Image width={150} height={40} src={Logo} alt="Rampp CRM logo" />
          </Link>

          <NavigationContainer>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <Link href={link === `Home` ? `/` : `/${link}`}>{link}</Link>
                </li>
              ))}
              <LoginLink href="/">Login</LoginLink>
            </ul>

            <ButtonNavMobile onClick={toggleNavMobile}>
              <MenuIcon />
            </ButtonNavMobile>
          </NavigationContainer>

          {/* NAVIGATION MOBILE */}
          <NavMobile style={{ display: navMobile ? `flex` : `none` }}>
            <div>
              <button onClick={toggleNavMobile} type="button">
                <CloseIcon />
              </button>
            </div>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <Link href={link === `Home` ? `/` : link}>{link}</Link>
                </li>
              ))}
              <hr />
              <li>
                <Link href="/register">Registre-se</Link>
              </li>
            </ul>
          </NavMobile>
        </Nav>
      </Container>
    </>
  );
};

export default Header;

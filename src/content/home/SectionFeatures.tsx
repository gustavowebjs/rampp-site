/* eslint-disable jsx-a11y/anchor-is-valid */
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
import LoyaltyTwoToneIcon from '@material-ui/icons/LoyaltyTwoTone';
import React from 'react';

import {
  Container,
  Title,
  Row,
  ColumnServices,
  SmallText,
} from './FeaturesStyles';

const SectionFeatures: React.FC = () => (
  <Container>
    <Title>
      <div /> Por que escolher o Rampp?
    </Title>
    <SmallText>
      Escolher um CRM para sua empresa é um passo muito importante para escalar
      as vendas. Veja algumas vantagens de utilizar o Rampp CRM na sua equipe.
    </SmallText>
    <Row>
      <ColumnServices>
        <div>
          <ul>
            <li>
              <BallotTwoToneIcon />
              Pipeline de Negócios para melhor visualização do Gestor:
            </li>
            <li>
              <BuildTwoToneIcon />
              Integrações com sistemas de ligações e captação de Leads:
            </li>
            <li>
              <LoyaltyTwoToneIcon />
              Venda B2B ou B2C prelo Rampp:
            </li>
          </ul>
        </div>
      </ColumnServices>
      <ColumnServices>
        <div>
          <ul>
            <li>
              <BallotTwoToneIcon />
              Pipeline de Negócios para melhor visualização do Gestor:
            </li>
            <li>
              <BuildTwoToneIcon />
              Integrações com sistemas de ligações e captação de Leads:
            </li>
            <li>
              <LoyaltyTwoToneIcon />
              Venda B2B ou B2C prelo Rampp:
            </li>
          </ul>
        </div>
      </ColumnServices>
    </Row>
  </Container>
);

export default SectionFeatures;

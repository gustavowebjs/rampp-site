import React from 'react';
import { Container, CardRow, Card, CardGrid, Heading } from './PricingStyles';

const Pricing: React.FC = () => {
  type CardsProps = {
    title: string;
  }[];

  const Cards: CardsProps = [
    {
      title: 'Hobby',
    },
    {
      title: 'Starter',
    },
    {
      title: 'Premium',
    },
  ];

  return (
    <Container>
      <Heading>
        <div />
        Investimento
      </Heading>
      <br />
      <CardRow>
        <CardGrid>
          {Cards.map((card) => (
            <Card key={card.title}>
              <p>{card.title}</p>
            </Card>
          ))}
        </CardGrid>
      </CardRow>
    </Container>
  );
};

export default Pricing;

import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';
import getColor from '../../js/randomRGBColor.js';

//------------------ Styles ----------------------

const Section = styled.section`
  width: 300px;
  border-radius: 10px;
  margin: auto;
  text-align: center;
  background-color: white;

  margin-bottom: 25px;
`;

const Title = styled.h2`
  padding: 20px;
  font-family: 'Druk Wide Bold';
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  flex-grow: 1;
  font-family: 'Noteworthy';
  padding: 5px;
  width: 20px;
  background-color: ${props => props.color};

  &:last-child {
    border-bottom-right-radius: 10px;
  }

  &:first-child {
    border-bottom-left-radius: 10px;
  }
`;

const Txt = styled.span`
  display: block;
  color: white;
`;

const LabelTxt = styled(Txt)`
  margin-bottom: 4px;
`;

const PercentTxt = styled(Txt)`
  font-size: 21px;
`;

//------------------ Component --------------------

const Statistic = ({ title, stats }) => (
  <Section>
    {title && <Title>Upload stats</Title>}

    <List>
      {stats.map(stat => (
        <ListItem key={stat.id} color={getColor()}>
          <LabelTxt>{stat.label}</LabelTxt>
          <PercentTxt>{stat.percentage}%</PercentTxt>
        </ListItem>
      ))}
    </List>
  </Section>
);

//-------------------- Props -------------------------

Statistic.defaultProps = {
  stats: [],
};

Statistic.propTypes = {
  title: propTypes.string,
  stats: propTypes.array,
};

export default Statistic;

import React from 'react';
import propTypes from 'prop-types';
import ListItemStatistic from './ListItemStatistic';

import styled from 'styled-components';

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

//------------------ Component --------------------

const Statistic = ({ title, stats }) => (
  <Section>
    {title && <Title>Upload stats</Title>}

    <List>
      {stats.map(stat => (
        <ListItemStatistic
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        />
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
  stats: propTypes.objectOf(
    propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired,
      }),
    ),
  ),
};

export default Statistic;

import React from 'react';

import styled from 'styled-components';
import getColor from '../../js/randomRGBColor.js';

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

export default function ListItemStatistic({ label, percentage }) {
  return (
    <ListItem color={getColor()}>
      <LabelTxt>{label}</LabelTxt>
      <PercentTxt>{percentage}%</PercentTxt>
    </ListItem>
  );
}

import React from 'react';
import propTypes from 'prop-types';

import styled from 'styled-components';

//-------------------- Styles ---------------------

const Table = styled.table`
  margin: 0 auto;
  background-color: white;
  width: 500px;
`;

const THead = styled.thead`
  background-color: seagreen;
  font-size: 20px;

  border-radius: 5px;

  & tr th {
    padding: 5px;
    color: white;
  }
`;

const TBody = styled.tbody`
  text-align: center;

  & tr td {
    padding: 10px;
  }

  & :not(td):nth-child(even) {
    background-color: grey;
  }

  & tr :first-child {
    text-transform: capitalize;
  }
`;

const TransactionHistory = ({ transactions }) => (
  <Table>
    <THead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </THead>

    <TBody>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      ))}
    </TBody>
  </Table>
);

TransactionHistory.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;

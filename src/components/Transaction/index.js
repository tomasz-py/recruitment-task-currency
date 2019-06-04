import React from "react";
import { connect } from "react-redux";

const Transaction = props => {
  function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  const renderList = () => {
    return props.transactions.map((transaction, index) => {
      let amountPL = transaction.amount * props.euroRate;
      amountPL = roundToTwo(amountPL);

      return (
        <tr key={index}>
          <td data-label="Name">{transaction.name}</td>
          <td data-label="AmountEUR">{transaction.amount} EUR</td>
          <td data-label="AmountPLN">{amountPL} PLN</td>
          <td data-label="delete" className="right aligned">
            <button className="ui button">Delete</button>
          </td>
        </tr>
      );
    });
  };

  return renderList();
};

const mapStateToProps = state => ({
  euroRate: state.euroRate,
  transactions: state.transactions
});

export default connect(mapStateToProps)(Transaction);

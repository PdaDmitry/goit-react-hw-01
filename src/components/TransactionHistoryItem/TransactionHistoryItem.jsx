import './TransactionHistoryItem.module.css';

export default function TransactionHistoryItem({ transaction: { type, amount, currency } }) {
  type = type[0].toUpperCase() + type.slice(1);
  return (
    <>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </>
  );
}

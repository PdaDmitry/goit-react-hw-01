import css from './TransactionHistory.module.css';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.contTable}>
      <thead className={css.contHhead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.contTbody}>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <TransactionHistoryItem transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

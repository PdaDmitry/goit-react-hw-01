import friends from '../friends.json';
import FriendList from './FriendList';

//export const App = ()=>{};
function App() {
  return (
    <div>
      <FriendList items={friends} />
    </div>
  );
}

export default App; //change export to named

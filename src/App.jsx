
// import "./styles.css";


import { StoreProvider, createStore } from "easy-peasy";
import store from "./Store";
import NotesForm  from './components/NotesForm'
import Notes from './components/Notes'

const Store = createStore(store);
function App() {
 
  return (
    <StoreProvider store={Store}>
      <div className="container">
        <NotesForm/>
        <Notes/>
      </div>
    </StoreProvider>
  );
}
export default App
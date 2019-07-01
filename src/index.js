import React from 'react';
import ReactDOM from 'react-dom';

// import components
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/UserList';

// set constants
const dataProvider = jsonServerProvider( 'http://jsonplaceholder.typicode.com' );
//const dataProvider = jsonServerProvider( 'https://58c8058a939d711200e9d1f5.mockapi.io/api/v1/' );

// const App = () => <Admin dataProvider={dataProvider} />;
//
// export default App;

export class App extends React.Component {

  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
      </Admin>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
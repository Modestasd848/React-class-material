import './App.css';
import VisibilityToggleWrapper from './components/VisibilityToggleWrapper/VisibilityToggleWrapper';
import Paragraph from './components/Paragraph/Paragraph';
import Card from './components/Card/Card';
import List from './components/List/List';

const people = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Dave' },
  { id: 5, name: 'Eve' },
];

function App() {
  return (
    <div>
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return <Paragraph isVisible={isVisible} toggle={toggle} />;
        }}
      />
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return (
            <Card
              isVisible={isVisible}
              toggle={toggle}
              source={
                'https://img-dotcom-media.s3.us-east-2.amazonaws.com/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=36'
              }
              header={'This is a header'}
              bodyText={'This is a body text'}
            />
          );
        }}
      />
      <VisibilityToggleWrapper
        render={(isVisible, toggle) => {
          return <List isVisible={isVisible} toggle={toggle} people={people} />;
        }}
      />
    </div>
  );
}

export default App;

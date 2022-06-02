import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

const MockApp = () => {
  <Router>
    <App />
  </Router>;
};
it('should match snapshot', () => {
  const tree = renderer.create(<MockApp />).toJSON();
  expect(tree).toMatchSnapshot();
});

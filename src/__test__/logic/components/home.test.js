import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../../components/home';

it('it should match the snapshot', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

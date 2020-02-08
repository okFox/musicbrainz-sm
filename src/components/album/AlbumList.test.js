import React from 'react';
import { shallow } from 'enzyme';
import AlbumList from './AlbumList';

describe('AlbumList component', () => {
  it('renders AlbumList', () => {
    const wrapper = shallow(<AlbumList albumArray={[1, 2]} artistName = "name" />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import AlbumList from './AlbumList';

describe('AlbumList component', () => {
  it('renders AlbumList', () => {
    const wrapper = shallow(<AlbumList albumArray={[{ albumId: '1', albumTitle: 'title'}, { albumId: '2', albumTitle: 'title2'}]} artistName = "name" />);
    expect(wrapper).toMatchSnapshot();
  });
});

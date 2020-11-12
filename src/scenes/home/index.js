import React, { useState, useEffect } from 'react';
import { FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addHeroes, setCurrentPage } from '../../redux/actions';

import Header from '../../components/Header';
import Item from '../../components/Item';
import * as service from '../../services';

function Home() {
  const { heroes, currentPage } = useSelector((state) => state.heroes);
  const dispatch = useDispatch();
  const limit = 10;
  const [totalHeroes, setTotalHeroes] = useState(0);

  useEffect(() => {
    const offset = currentPage * limit;
    async function loadHeros() {
      const { data: response } = await service.heros(
        limit,
        offset,
      );
      dispatch(addHeroes(response.results));
      setTotalHeroes(response.total);
    }
    loadHeros();
  }, [currentPage]);

  function loadMore() {
    if (heroes.length == 0 || currentPage < Math.ceil(totalHeroes / limit)) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  }

  const renderItem = ({ item: { id, thumbnail, name }}) => (
    <Item id={id} thumbnail={thumbnail} name={name} />
  );

  return (
    <>
      <Header title="Marvel Heroes" />
      <FlatList
        data={heroes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
      />
    </>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../service/FetchAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const planetsData = await fetchAPI();
      setData(planetsData);
    };
    fetch();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
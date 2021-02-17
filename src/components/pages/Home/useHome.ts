/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';

import { CartContext } from '../../../context/CartProvider';
import data from '../../../api/data.json';

const useHome = (): IUseHome => {
  const { dispatch } = useContext(CartContext);
  const [selectedMattress, selectMattress] = useState<IMattress | null>(null);
  const [mattresses, setMattresses] = useState<IMattress[]>([]);

  useEffect(() => {
    const mattressessArray = Object.entries(data.mattresses).map(([key, value]) => ({
      id: key,
      ...value,
      quantity: 0,
    }));

    setMattresses(mattressessArray);
  }, []);

  useEffect(() => {
    if (mattresses) {
      selectMattress(mattresses[0]);
    }
  }, [mattresses]);

  const handleAddToCart = () => {
    if (selectedMattress) {
      dispatch({
        type: 'ADD',
        payload: selectedMattress,
      });
    }
  };

  const handleSelectMattress = (id: string) => {
    const mattress = mattresses.find(m => m.id === id) ?? null;
    selectMattress(mattress);
  };

  return {
    mattresses,
    onAddToCart: handleAddToCart,
    onSelectMattress: handleSelectMattress,
    selectedMattress,
  };
};

export interface IUseHome {
  mattresses: IMattress[];
  onAddToCart: () => void;
  onSelectMattress: (id: string) => void;
  selectedMattress: IMattress | null;
}

export default useHome;

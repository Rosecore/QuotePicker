import React from 'react';
import { useState, useEffect } from 'react';
const UsefetchingQuoute = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();
    useEffect(() => {
      fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
};

export default UsefetchingQuoute;
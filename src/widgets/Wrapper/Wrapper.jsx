import React from 'react';
import Button from '../../components/Button/Button';
import Quote from '../../components/Quote/Quote';
import './Wrapper.scss'
import ButtonFooter from '../ButtonFooter/ButtonFooter';
import { useState, useEffect } from 'react';
const Wrapper = ({idx}) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();
    const fetchData = () =>{
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
    }
    useEffect(() => {
      fetchData();
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
    return (
        <div className = "quote-box" id = {idx} >
            <Quote idx ={"quote-text"} text={items.content}/>
            <Quote idx ={"quote-author" } text={items.author}/>
            <ButtonFooter func={fetchData} />

        </div>
    );
    };
};

export default Wrapper;
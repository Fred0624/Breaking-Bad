import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const urlBase = 'https://www.breakingbadapi.com/api/characters/'

const CharacterDetail = () => {
    const [items, setItems] = useState([])
    const { char_id } = useParams()

useEffect (() => {
    const url = `${urlBase}${char_id}`

    fetch(url)
    .then(res => 
        res.json()
    )
    .then(res => 
        setItems(res)
    )
    .catch((err) => {
        console.log(err)
    })
}, [])

    return (
        
        <div className='detailInfo'>
            {items.length > 0 && <>
            <img className='detailPic' src={items[0].img} alt={items[0].name}></img>
            <div className='description'>
            <h1>{items[0].name}</h1>
            <p>Nickname: {items[0].nickname}</p>
            <p>Birthday: {items[0].birthday}</p>
            <p>Occupation: {items[0].occupation[0]}</p>
            <p>Status: {items[0].status}</p>
            <p>Portrayed: {items[0].portrayed}</p>
            </div>
            </>
            }
        </div>
        
    );
};

export default CharacterDetail;
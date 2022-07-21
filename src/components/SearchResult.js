import React from 'react';

const SearchResult = ({searchCharacter}) => {

    return (
        <div className='detailInfo'>
            {searchCharacter.length > 0 && <>
            <img className='detailPic' src={searchCharacter[0].img} alt={searchCharacter[0].name}></img>
            <div className='description'>
            <h1>{searchCharacter[0].name}</h1>
            <p>Nickname: {searchCharacter[0].nickname}</p>
            <p>Birthday: {searchCharacter[0].birthday}</p>
            <p>Occupation: {searchCharacter[0].occupation[0]}</p>
            <p>Status: {searchCharacter[0].status}</p>
            <p>Portrayed: {searchCharacter[0].portrayed}</p>
            </div>
            </>
            }
        </div>
    );
};

export default SearchResult;
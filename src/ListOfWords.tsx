import React from 'react';

interface Item {
    keyValue: number,
    value: string
}

interface ListOfWordsProps {
    items: Item[];
}

function ListOfWords(props: ListOfWordsProps) {
    return (
       <ul>
           {
               props.items.map((item) => <li value={item.keyValue}>{item.value}</li>)
           }
       </ul>
    );
}

export default ListOfWords;

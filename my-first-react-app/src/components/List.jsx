import React from 'react';

const List = ({ renderItems }) => {
    return (
        <ul>
            {renderItems()}
        </ul>
    );
};

export default List;
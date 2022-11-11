import React, { useEffect } from 'react';

const UseTitle = (title) => {
   useEffect(()=> {
    document.title = `${title}-Travels Zoone`;
   })
};

export default UseTitle;
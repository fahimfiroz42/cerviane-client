import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title=` ${title} | PRODASK `

    },[title])
    
};

export default useTitle;
import { useLocation } from 'react-router-dom';

const useQueryString = () => {
    return useLocation().search;
};

export default useQueryString;
import { useState,useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
    const [numbers,setNumbers] = useState(0);

    useEffect(() => {
        setNumbers(Math.ceil(totalPosts / postsPerPage))
    }, [postsPerPage, totalPosts])
  
    return (
        <Stack spacing={2}>
            <Pagination count={numbers-1} color="primary" onClick = {(e) => paginate(Number(e.target.innerText))} hidePrevButton hideNextButton />
        </Stack>
    );
  };
  
  export default Paginations;
import React from 'react';
import {useParams} from "react-router-dom";

const BlogDetailPage = () => {
    const {id} = useParams();

    return (
        <div>
            <p>Blog detail pagina nummer: {id}</p>
        </div>
    );
};

export default BlogDetailPage;
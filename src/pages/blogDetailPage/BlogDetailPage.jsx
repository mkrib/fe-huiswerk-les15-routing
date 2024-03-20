import React, {useEffect, useState} from 'react';
import {Link, Navigate, useParams} from "react-router-dom";
import convertToShortDate from "../../helpers/convertToShortDate.jsx";
import './BlogDetailPage.css';
import axios from "axios";

const BlogDetailPage = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState({});
    const [error, setError] = useState(null);
    const [isDeleted, setIsDeleted] = useState(false);

    // const specificBlogpost = blogposts.find((specificBlogpost) => {
    //     return specificBlogpost.id.toString() === id;
    // });

    async function fetchBlogpost() {
        try {
            const result = await axios.get(`http://localhost:3000/posts/${id}`);
            setBlog(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchBlogpost();
    }, []);

    async function deleteBlogpost() {
        try {
            const result = await axios.delete(`http://localhost:3000/posts/${id}`);
            console.log(result);
            setIsDeleted(true);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        }
    }

    return (
        <>
            {!isDeleted &&
                <>
                    <article className="article-specific-blog">
                        {blog.content &&
                            <>
                                <h2>{`${blog.title} (${blog.readTime} minuten)`}</h2>
                                <p className="p-subtitle">{blog.subtitle}</p>
                                <p>{`Geschreven door ${blog.author} op ${convertToShortDate(blog.created)}`}</p>
                                <p>{blog.content}</p>
                                <p>{`${blog.comments} reacties - ${blog.shares} keer gedeeld`}</p>
                                <Link to="/blogs">Terug naar de overzichtspagina</Link>

                                <button className="button-delete" type="button" onClick={deleteBlogpost}>Verwijder
                                </button>
                            </>}

                        {error &&
                            <p className="p-error">Oeps, er ging iets mis. Ga <Link to="/blogs">hier</Link> terug
                                naar
                                de
                                overzichtspagina.</p>}
                    </article>
                </>
            }

            {isDeleted &&
                <p className="p-isDeleted">De blog is succesvol verwijderd! Ga <Link to="/blogs">hier</Link> terug naar de overzichtpagina. </p>
            }

        </>
    );
};

export default BlogDetailPage;
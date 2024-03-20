import './BlogsOverview.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

const BlogsOverview = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    async function fetchBlogposts() {
        try {
            const result = await axios.get('http://localhost:3000/posts');
            setBlogs(result.data);
            console.log(result.data);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchBlogposts();
    }, []);

    return (
        <>
            <h2>Alle posts</h2>

            <ul className="ul-blogs-overview">
                {blogs && blogs.map((blogpost) => {
                    // if (blogpost.id < 18) {
                    return (
                        <li key={blogpost.id}>
                            <article>
                                <h3>{`${blogpost.title} (${blogpost.author})`}</h3>
                                <p>{`${blogpost.comments} reacties - ${blogpost.shares} keer gedeeld`}</p>
                                <Link to={`/blog/${blogpost.id}`}>Lees meer...</Link>
                            </article>
                        </li>
                    )
                    // }
                })}
            </ul>

            {error && <div>{error}</div>}

        </>
    );
};

export default BlogsOverview;
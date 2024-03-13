import blogposts from '../../constants/data.json';
import './BlogsOverview.css';

const BlogsOverview = () => {

    console.log(blogposts);

    return (
        <>
            <ul className="ul-blogs-overview">
                {blogposts.map((blogpost) => {
                    // console.log(blogpost)
                    return (
                        <li key={blogpost.id}>
                            <article>
                                <h3>{`${blogpost.title} (${blogpost.author})`}</h3>
                                <p>{`${blogpost.comments} reacties - ${blogpost.shares} keer gedeeld`}</p>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default BlogsOverview;
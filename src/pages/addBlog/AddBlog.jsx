import {useState} from "react";
import './AddBlog.css';
import axios from "axios";
import {Link} from "react-router-dom";

const AddBlog = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [newBlogId, setNewBlogId] = useState(null);
    const [formValues, setFormValues] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });

    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormValues({
            ...formValues,
            [changedFieldName]: newValue,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const result = await axios.post('http://localhost:3000/posts', {
                ...formValues,
                shares: 0,
                comments: 0,
                created: new Date(),
                readTime: 0,
            })
            console.log(result.data);
            setNewBlogId(result.data.id);
            console.log("De post is succesvol verstuurd!");
            setIsSubmitted(true);
        } catch (error) {
            console.error(error.message);
            setError(error.message);
        }
        // console.log(
        //     `Titel: ${formValues.title}
        //     Subtitel: ${formValues.subtitle}
        //     Author: ${formValues.author}
        //     Content: ${formValues.content}`
        // );
    }

    return (
        <>
            <h2>Nieuwe post</h2>

            {!isSubmitted &&
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Titel</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={formValues.title}
                        onChange={handleFormChange}
                    />

                    <label htmlFor="subtitle">Subtitel</label>
                    <input
                        id="subtitle"
                        type="text"
                        name="subtitle"
                        value={formValues.subtitle}
                        onChange={handleFormChange}
                    />

                    <label htmlFor="author">Auteur</label>
                    <input
                        id="author"
                        type="text"
                        name="author"
                        value={formValues.author}
                        onChange={handleFormChange}
                    />

                    <label htmlFor="content">Bericht</label>
                    <input
                        id="content"
                        type="textarea"
                        minLength="100"
                        maxLength="2000"
                        name="content"
                        value={formValues.content}
                        onChange={handleFormChange}
                    />
                    <button type="submit"
                    >Verzenden
                    </button>
                </form>
            }

            {isSubmitted && <p className="p-succes">De post is succesvol verstuurd! Bekijk deze <Link to={`/blog/${newBlogId}`}>hier</Link>.</p>}

            {error && <p className="p-error">Oeps, er ging iets mis. Probeer het opnieuw.</p>}
        </>
    );
};

export default AddBlog;
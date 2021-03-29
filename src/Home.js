import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My First Website', body: 'Lorem Ipsum', author: 'mario', id: 1 },
        { title: 'Welcome', body: 'Lorem Ipsum', author: 'luigi', id: 2 },
        { title: 'Okay', body: 'Lorem Ipsum', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;
import blog from "../../images/images/home/blog.jpg"

export const Blog = () => {
    return (
        <article>
            <img src={blog} alt="Cup of tea" />
            <p>April 16 2020</p>
            <h3>Blog Post One</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
            <button>Read Our Blog</button>
        </article>
    );
};
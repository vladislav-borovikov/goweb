import blog from "../../../images/images/home/blog.jpg"
import styles from "./Blog.module.scss"

export const Blog = () => {
    return (
        <article className={styles.blog} id="blog">
            <div >
                <img src={blog} alt="Cup of tea" className={styles.blog_img} />
            </div>
            <div className={styles.blog_container}>
                <p className={styles.blog_paragraph}>April 16 2020</p>
                <h3 className={styles.blog_title}>Blog Post One</h3>
                <p className={styles.blog_paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button type="button" className={styles.blog_button}>Read Our Blog</button>
            </div>

        </article>
    );
};
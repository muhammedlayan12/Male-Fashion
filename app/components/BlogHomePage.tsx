import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar as faCalendarRegular } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/Blog.module.css';
import Image from 'next/image';
import blogImg1 from "../images/blog/blog-1.jpg";
import blogImg2 from "../images/blog/blog-2.jpg";
import blogImg3 from "../images/blog/blog-3.jpg";

function Blog() {
  return (
    <div>
        <section className={styles.blogSection}>
            <span>Latest News</span>
            <h1>Fashion New Trends</h1>
            <div className={styles.blogs}>
            <div className={styles.blog}>
                    <Image src={blogImg1} alt="" />
                    <div className={styles.content}>
                        <span> <FontAwesomeIcon className={styles.icon} icon={faCalendarRegular} /> 16 February 2020</span>
                        <h3>What Curling Irons Are The Best Ones</h3>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div className={styles.blog}>
                    <Image src={blogImg2} alt="" />
                    <div className={styles.content}>
                        <span> <FontAwesomeIcon className={styles.icon} icon={faCalendarRegular} /> 16 February 2020</span>
                        <h3>What Curling Irons Are The Best Ones</h3>
                        <a href="">Read More</a>
                    </div>
                </div>
                <div className={styles.blog}>
                    <Image src={blogImg3} alt="" />
                    <div className={styles.content}>
                        <span> <FontAwesomeIcon className={styles.icon} icon={faCalendarRegular} /> 16 February 2020</span>
                        <h3>What Curling Irons Are The Best Ones</h3>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Blog;

import styles from '../styles/SocialPost.module.css';
import Image from 'next/image';
import img1 from '../images/instagram/instagram-1.jpg';
import img2 from '../images/instagram/instagram-2.jpg';
import img3 from '../images/instagram/instagram-3.jpg';
import img4 from '../images/instagram/instagram-4.jpg';
import img5 from '../images/instagram/instagram-5.jpg';
import img6 from '../images/instagram/instagram-6.jpg';
function SocialPost() {
  return (
    <div>
        <section className={styles.instagram}>
            <div className={styles.images}>
                <Image src={img1} alt=""  />
                <Image src={img2} alt=""  />
                <Image src={img3} alt=""  />
                <Image src={img4} alt=""  />
                <Image src={img5} alt=""  />
                <Image src={img6} alt=""  />
            </div>
            <div className={styles.content}>
            <h1>Instagram</h1>
            <span>Explore the latest trends in fashion, discover inspiring outfits<br/>, and stay connected with your favorite brands and influencers.<br/> Follow the styles that match your personality and create a hello<br/> wardrobe that speaks for you.</span>
            <h3>#Male_Fashion</h3>

            </div>
        </section>
    </div>
  );
}

export default SocialPost;



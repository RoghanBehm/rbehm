import placeholderPic from './assets/gorilla boat 2.jpg';
import styles from "./home.module.css";
function Home() {
    return (
        <div className={styles.outer}>
            <div className={styles.profile}>
                <div className={styles.left}>
                    <img src={placeholderPic} className={styles.profilePic} alt="A picture of Roghan Behm [currently primatised" />
                </div>
                <div className={styles.right}>
                    <h1>Roghan Behm</h1>
                    <p>Computer Science student and aspiring software developer who enjoys solving problems and building software. Looking for a role where I can learn, improve, and contribute to meaningful projects.</p>
                </div>
            </div>

        </div>
    )
}

export default Home;
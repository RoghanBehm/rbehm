import placeholderPic from './assets/gorilla boat 2.jpg';
import styles from "./home.module.css";
function Home() {
    return (
        <div className={styles.outer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={placeholderPic} className={styles.profilePic} alt="A picture of Roghan Behm [currently primatised]" />
                </div>
                <div className={styles.right}>
                    <h1>Roghan Behm</h1>
                    <p>Computer Science student and aspiring software developer who enjoys solving problems and building software. Looking for a role where I can learn, improve, and contribute to meaningful projects.</p>
                </div>
            </div>

            <div className={styles.divider} />


            <div className={styles.education}>
                <h2 className={styles.sectionTitle}>Education</h2>
                <div className={styles.educationContainer}>
                    <h3 className={styles.sectionTitle}>Currently studying</h3>
                    <div className={styles.row}>
                        <div className={styles.yearContent}>
                            <span className={styles.year}>2023 - 2025</span>
                            <p>Grad. Spring</p>
                        </div>

                        <div className={styles.degreeContent}>
                            <span className={styles.degree}>Bachelor of Information Technology (Computer Science)</span>
                            <p>Queensland University of Technology</p>
                        </div>

                    </div>
                    <h3 className={styles.sectionTitle}>Completed</h3>
                    <div className={styles.row}>
                        <div className={styles.yearContent}>
                            <span className={styles.year}>2018 - 2022</span>
                        </div>
                        <div className={styles.degreeContent}>
                            <span className={styles.degree}>Bachelor of Arts (History and Political Science)</span>
                            <p>University of Queensland</p>

                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.divider} />

        </div>

    )
}

export default Home;
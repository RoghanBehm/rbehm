import placeholderPic from './assets/gorilla boat 2.jpg';
import styles from "./home.module.css";
function Home() {
    return (
        <div className={styles.outer}>

            {/* Profile */}
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

            {/* Education */}
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

             {/* Projects */}
             <div className={styles.projects}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <div className={styles.projectsContainer}>

                    {/* Project 1 */}
                    <div className={styles.projectItem}>
                        <div className={styles.projectImage}>
                            <img src="./assets/minesweeper.png" alt="Minesweeper Multiplayer Game" />
                        </div>
                        <div className={styles.projectContent}>
                            <span className={styles.projectTitle}>Networked Multiplayer Minesweeper</span>
                            <p>
                                Developed a real-time 1v1 multiplayer Minesweeper game using Boost.Asio for networking and SDL2 for rendering.
                                Features an interactive UI, custom game logic, and synchronized state updates.
                            </p>
                            <ul>
                                <li>Implemented efficient asynchronous networking using Boost.Asio.</li>
                                <li>Designed and rendered a custom game interface with SDL2.</li>
                                <li>Handled game state synchronization between two players.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className={styles.projectItem}>
                        <div className={styles.projectImage}>
                            <img src="./assets/fuel-tracker.png" alt="Fuel Price Tracker App" />
                        </div>
                        <div className={styles.projectContent}>
                            <span className={styles.projectTitle}>Fuel Price Tracker</span>
                            <p>
                                Collaborated in a team-based agile development environment to create a JavaFX application for tracking and comparing fuel prices.
                                We followed Scrum principles, holding weekly stand-ups, working in sprints, and using Trello for task management.
                            </p>
                            <ul>
                                <li>Developed the fuel price data retrieval and filtering system.</li>
                                <li>Implemented a multithreaded API handler to dynamically update fuel prices.</li>
                                <li>Worked closely with teammates to design an interactive UI for fuel price trends.</li>
                                <li>Participated in code reviews, sprint planning, and retrospectives.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.divider} />

                        {/* Work Experience */}
                        <div className={styles.experience}>
                <h2 className={styles.sectionTitle}>Work Experience</h2>
                <div className={styles.experienceContainer}>

                    {/* Job 1 */}
                    <div className={styles.experienceItem}>
                        <div className={styles.jobTitle}>Junior Web Developer (Wordpress)</div>
                        <div className={styles.company}>Sol Technology</div>
                        <ul>
                            <li>Took full ownership of web development operations for three months in the absence of the Lead Developer, making independent technical and design decisions.</li>
                            <li>Built, updated, and maintained custom WordPress websites, tailoring solutions to meet client needs.</li>
                            <li>Developed interactive site features using PHP, JavaScript, and jQuery, ensuring dynamic and functional user experiences.</li>
                        </ul>
                    </div>

                </div>
            </div>


        </div>

    )
}

export default Home;
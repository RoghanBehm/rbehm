import profilePic from './assets/IMG20250303145411.jpg';
import minesweeperGif from './assets/minesweeper_demo.gif';
import fueltoolGif from './assets/fuel_tool_demo.gif';
import styles from "./home.module.css";
function Home() {
    return (
        <div className={styles.outer}>

            {/* Profile */}
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src={profilePic} className={styles.profilePic} alt="A picture of Roghan Behm" />
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
                            <p className={styles.year}>2023 - 2025</p>
                            <p className={styles.year}>Grad. Spring</p>
                        </div>

                        <div className={styles.degreeContent}>
                            <p className={styles.degree}>Bachelor of Information Technology (Computer Science)</p>
                            <p>Queensland University of Technology</p>
                        </div>

                    </div>
                    <h3 className={styles.sectionTitle}>Completed</h3>
                    <div className={styles.row}>
                        <div className={styles.yearContent}>
                            <p className={styles.year}>2018 - 2022</p>
                        </div>
                        <div className={styles.degreeContent}>
                            <p className={styles.degree}>Bachelor of Arts (History and Political Science)</p>
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
                            <img src={minesweeperGif} alt="Minesweeper Multiplayer Game" />
                        </div>
                        <div className={styles.projectContent}>
                            <a href="https://github.com/RoghanBehm/minesweeper"><p className={styles.projectTitle}>Networked Multiplayer Minesweeper</p></a>
                            <p>
                                Developed a real-time 1v1 multiplayer Minesweeper game using Boost.Asio for networking and SDL2 for rendering.
                                Features an interactive UI, custom game logic, and synchronized state updates.
                            </p>
                            <ul>
                                <li>Implemented efficient asynchronous networking using Boost.Asio.</li>
                                <li>Designed and rendered a custom game interface with SDL2.</li>
                                <li>Handled game state synchronization between two players.</li>
                                <li>Reverse engineerined Minesweeper gameplay mechanics, including mine placement, win/loss detection, cascading reveals, and state management.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className={styles.projectItem}>
                        <div className={styles.projectImage}>
                            <img src={fueltoolGif} alt="Fuel Price Tracker App" />
                        </div>
                        <div className={styles.projectContent}>
                            <p className={styles.projectTitle}>Fuel Price Tracker</p>
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
                        <div className={styles.company}>April 2024 - October 2024</div>
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
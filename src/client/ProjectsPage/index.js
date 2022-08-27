/* global React */

import ProjectCard from "./ProjectCard";

export default class ProjectsPage extends React.PureComponent {
    render() {
        return <ul className="ProjectsPage">
            <li>
                <ProjectCard
                    imageSource="public/images/projects/calculator.png"
                    title="Calculator"
                    githubUrl="https://github.com/chrisstreamingcode/calculator"
                    twitchUrl="https://www.twitch.tv/videos/1572775927"
                    youtubeUrl={undefined}
                >
                    Learn to design a build a basic calculator with JavaScript.
                </ProjectCard>
            </li>
            <li>
                <ProjectCard
                    imageSource="public/images/projects/pong.png"
                    title="Pong"
                    githubUrl="https://github.com/chrisstreamingcode/pong"
                    twitchUrl="https://www.twitch.tv/videos/1573584005"
                    youtubeUrl={undefined}
                >
                    Learn to build your own clone of the class game Pong.
                </ProjectCard>
            </li>
        </ul>
    }
}
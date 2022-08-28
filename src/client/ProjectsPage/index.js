/* global React */

import ProjectCard from "./ProjectCard";
import getTitle from "../getTitle";

export default class ProjectsPage extends React.PureComponent {
    componentDidMount() {
        document.title = getTitle('Projects');
    }

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
            <li>
                <ProjectCard
                    imageSource="public/images/projects/space-shooter.png"
                    title="Pong"
                    githubUrl="https://github.com/chrisstreamingcode/space-shooter"
                    twitchUrl="https://www.twitch.tv/videos/1574590832"
                    youtubeUrl={undefined}
                >
                    Learn to build your own space shooter.
                </ProjectCard>
            </li>
        </ul>
    }
}
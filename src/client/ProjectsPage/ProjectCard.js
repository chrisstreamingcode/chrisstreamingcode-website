/* global React */

export default class ProjectCard extends React.PureComponent {
    static defaultProps = {
        imageSource: null,
        title: null,
        githubUrl: null,
        twitchUrl: null,
        youtubeUrl: null
    };

    render() {
        const { imageSource, title, children, githubUrl, twitchUrl, youtubeUrl } = this.props;

        return <div className="ProjectCard">
            <div className="image">
                <img src={imageSource} width="300" height="226" />
            </div>
            <div className="title">
                { title }
            </div>
            { youtubeUrl && <div className="youtube icon">
                <a href={youtubeUrl}>Watch Video on YouTube</a>
            </div>}
            <div className="twitch icon">
                <a href={twitchUrl}>Watch Stream on Twitch</a>
            </div>
            <div className="github icon">
                <a href={githubUrl}>Get Code from GitHub</a>
            </div>
            <div className="body">
                {children}
            </div>
        </div>;
    }
}
/* global React */
import SocialPanel from './SocialPanel';
import getTitle from "../getTitle";

export default class SocialPage extends React.PureComponent {
    componentDidMount() {
        document.title = getTitle('Social');
    }

    render() {
        return <div className="SocialPage">
            <div className="row">
                <div className="col">
                    <img src="/public/images/logo-large.png" width="800" height="589" />
                    <h1>on</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <SocialPanel
                        url="https://www.twitch.tv/chrisstreamingcode"
                        title="Twitch"
                        imageSource="/public/images/twitch-white.svg"
                        activeImageSource="/public/images/twitch-purple.svg"
                    >
                        View Live Streams
                    </SocialPanel>
                    <SocialPanel
                        url="https://twitter.com/ChrisStreamCode"
                        title="Twitter"
                        imageSource="/public/images/twitter-white.svg"
                        activeImageSource="/public/images/twitter-blue.svg"
                    >
                        Connect
                    </SocialPanel>
                    <SocialPanel
                        url="https://github.com/chrisstreamingcode"
                        title="GitHub"
                        imageSource="/public/images/github-white.png"
                        activeImageSource="/public/images/github-dark.png"
                    >
                        Checkout Code
                    </SocialPanel>
                    <SocialPanel
                      url="https://discord.gg/cVhnRjdx3Y"
                      title="Discord"
                      imageSource="/public/images/discord-white.svg"
                      activeImageSource="/public/images/discord-color.svg"
                    >
                        Chat
                    </SocialPanel>
                    <SocialPanel
                      url="https://www.youtube.com/channel/UCAVGepRORPE9XR8pbp8As0g"
                      title="YouTube"
                      imageSource="/public/images/youtube-white.png"
                      activeImageSource="/public/images/youtube-red.png"
                    >
                        View Video Archive
                    </SocialPanel>
                    <SocialPanel
                        url="https://www.reddit.com/user/ChrisStreamingCode"
                        title="Reddit"
                        imageSource="/public/images/reddit-white.png"
                        activeImageSource="/public/images/reddit-color.png"
                    >
                        Chat and Follow
                    </SocialPanel>
                </div>
            </div>
        </div>;
    }
}
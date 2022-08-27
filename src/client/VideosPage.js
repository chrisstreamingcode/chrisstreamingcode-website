/* global React */

import getTitle from "./getTitle";

export default class VideosPage extends React.PureComponent {
    componentDidMount() {
        document.title = getTitle('Abridged Videos');
    }

    render() {
        return <div>Abridged videos coming soon. In the meantime, you can checkout out all of my videos
            on <a href="https://www.youtube.com/channel/UCAVGepRORPE9XR8pbp8As0g">Youtube</a>.</div>;
    }
}
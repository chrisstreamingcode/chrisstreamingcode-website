/* global React, ReactRouterDOM */

import getTitle from "./getTitle";

const { NavLink } = ReactRouterDOM;

export default class HomePage extends React.PureComponent {
    componentDidMount() {
        document.title = getTitle('Home');
    }

    render() {
        return <div className="HomePage">
            <h1>Chris Streaming Code</h1>
            <div className="row">
                <div className="col">
                    <p>
                        Welcome to the site of Chris Streaming Code. Check
                        out <NavLink to="/social">Social</NavLink> to connect with me and check out streams
                        and videos or check out <NavLink to="/projects">Projects</NavLink> to check out
                        projects we've built in past streams.
                    </p>
                    <p>
                        My primary focus with my streams is to help other learn to code. In particular, I focus
                        on helping bridge that difficult gap between "I understand the syntax" and "I'm a developer"
                        where you have to learn how to design your own programs, instead of just following tutorials.
                    </p>
                    <p>
                        If you have a topic you'd like me to cover, or you have a project idea for us to work on in
                        a stream, connect via <NavLink to="/social">Social</NavLink> and let me know.
                    </p>
                    <p>
                        If you have programming questions, pop in during a stream
                        on <a target="_blank" href="https://www.twitch.tv/chrisstreamingcode">Twitch</a> or
                        hit me up on <a target="_blank" href="https://discord.gg/A2h4CsWE">Discord</a>.
                    </p>
                </div>
            </div>
        </div>;
    }
}
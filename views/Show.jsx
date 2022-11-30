const React = require("react");
const DefaultLayout = require("./layout/Default")

class Show extends React.Component {
    render() {
        const { title, entry, shipIsBroken } = this.props.log
        return (
            <DefaultLayout title={`${title}`}><br />
                {entry}
                <div>
                    <nav>
                        <a href="/logs/">Home Page</a>
                    </nav>
                </div>
            </DefaultLayout>
        )
    }
}
// We can write javascript code within the curly brackets

module.exports = Show
const React = require("react")
const DefaultLayout = require("./layout/Default")

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <DefaultLayout title="Logs Index Page">
                <nav>
                    <a href="/logs/new">Create Log</a>
                </nav>
                <ul>
                    {
                        logs.map((log, i) => {
                            return (
                                <li key={i}>
                                    <a href={`/logs/${log._id}`}>{log.title}</a> <br />
                                    <a href={`/logs/${log._id}/edit`}>Edit This Log</a>
                                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="DELETE" />
                                    </form><br />
                                </li>
                            )
                        })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}

module.exports = Index
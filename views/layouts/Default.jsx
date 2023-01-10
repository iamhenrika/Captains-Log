const React = require("react");

class Default extends React.Component {
  render() {
    const { log, title } = this.props;
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/css/app.css" />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href="/logs">Logs Home</a>
            <br />
            <a href="/logs/new">New Log</a>
            <br />
            {this.props.log ? (
              <a href={`/logs/${log._id}/edit`}> {log.title} Edit </a>
            ) : (
              ""
            )}
            <br />
            {this.props.log ? (
              <a href={`/logs/${log._id}`}>{log.title} Show</a>
            ) : (
              ""
            )}
          </nav>
          <h1>{title}</h1>

          {this.props.children}
        </body>
      </html>
    );
  }
}
module.exports = Default;

const React = require("react")
const DefaultLayout = require("./layout/Default")

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="">
                <form action="/logs" method="POST">
                    Title: <input type="text" name="title" /><br />
                    Entry: <input type="textarea" name="entry" /><br />
                    Is Ship Broken: <input type="checkbox" name="shipIsBroken" /><br />
                    <input type="submit" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New
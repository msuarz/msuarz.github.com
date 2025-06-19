import Layout from '../../components/Layout'

export default function Movies() {
  return (
    <Layout title="Movies - msuarz">
      <table className="table table-striped" id="rhtable">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Watched</th>
          </tr>
          <tr>
            <td className="firstcol">
              <span className="title">
                <a href="http://dvd.netflix.com/Movie/Too-Big-to-Fail/70184894?trkid=496751" className="mdpLink">
                  Too Big to Fail
                </a>
              </span>
            </td>
            <td>03/29/13</td>
          </tr>
          <tr>
            <td className="firstcol">
              <span className="title">
                <a href="http://dvd.netflix.com/Movie/Argo/70231922?trkid=496751" className="mdpLink">
                  Argo
                </a>
              </span>
            </td>
            <td>03/26/13</td>
          </tr>
          <tr>
            <td className="firstcol">
              <span className="title">
                <a href="http://dvd.netflix.com/Movie/Seven-Psychopaths/70241756?trkid=496751" className="mdpLink">
                  Seven Psychopaths
                </a>
              </span>
            </td>
            <td>03/26/13</td>
          </tr>
          <tr>
            <td colSpan={2} className="text-center text-muted">
              <em>... and many more movies (truncated for demo)</em>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}
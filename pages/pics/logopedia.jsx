import Layout from '../../components/Layout'

export default function Logopedia() {
  return (
    <Layout title="Logopedia - msuarz">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td width="40%" rowSpan={2} colSpan={3} style={{ verticalAlign: 'middle' }}>
              <img width="100%" src="/img/logos/limadelic.png" alt="Limadelic" />
            </td>
            <td></td>
            <td width="25%" rowSpan={2} colSpan={2}>
              <img width="100%" src="/img/logos/decaf.png" alt="Decaf" />
            </td>
            <td width="25%" colSpan={2}>
              <img style={{ float: 'right' }} width="75%" src="/img/logos/espare.png" alt="Espare" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td width="12%">
              <img width="100%" src="/img/logos/bookworms.png" alt="Bookworms" />
            </td>
            <td></td>
            <td width="12%">
              <img width="100%" src="/img/logos/zunzun.png" alt="Zunzun" />
            </td>
            <td></td>
            <td width="25%" colSpan={3}>
              <img width="100%" src="/img/logos/fluentspec.png" alt="FluentSpec" />
            </td>
          </tr>
          <tr>
            <td width="25%" rowSpan={2} colSpan={2}>
              <img width="100%" src="/img/logos/droolzzz.png" alt="Droolzzz" />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td width="12%" rowSpan={2}>
              <img width="80%" src="/img/logos/breeze.png" alt="Breeze" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td width="40%" rowSpan={2} colSpan={3}>
              <img width="100%" src="/img/logos/frankendoc.png" alt="Frankendoc" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td width="25%" colSpan={2} rowSpan={2} style={{ textAlign: 'center' }}>
              <img width="60%" src="/img/logos/clawmall.png" alt="Clawmall" />
            </td>
            <td></td>
            <td width="40%" colSpan={3} rowSpan={3} style={{ verticalAlign: 'middle' }}>
              <img width="100%" src="/img/logos/raconteur.png" alt="Raconteur" />
            </td>
          </tr>
          <tr>
            <td width="25%" rowSpan={2} colSpan={2}>
              <img width="100%" src="/img/logos/figaro.png" alt="Figaro" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}
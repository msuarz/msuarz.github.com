import Layout from '../../components/Layout'

export default function Resume() {
  return (
    <Layout title="Resume - msuarz">
      <h3> 
        Maykel Suarez &nbsp;
        <a href="/resume_msuarz.pdf" className="btn btn-sm btn-primary"> 
          📄 PDF 
        </a>
        <a href="/resume_msuarz.doc" className="btn btn-sm btn-primary"> 
          📄 DOC 
        </a>
      </h3>

      <p>1200 Brickell Bay Dr PH4202, Miami, FL 33131<br />
      (786) 797-3547 mikemps@gmail.com</p>

      <hr />

      <h3>Experience</h3>

      <p><code>2008-present</code> <a href="http://www.ukg.com">UKG:</a> Principal Software Engineer in Recruiting.<br />
      (C#, NodeJS, Ruby, NetCore, Angular, React, RabbitMQ, Kafka, MongoDB, MSSQL, K8)</p>

      <ul>
        <li>Delivered Indeed's integration on time constrain applying Lean Startup principles.</li>
        <li>Containerized REC by migrating it to NetCore and deploying to K8.</li>
        <li>Simplified services integration by publishing fat events on Kafka Streams.</li>
        <li>Founded rCloud, allowing teams to deploy UKGPro in ESX, Openstack and GCP.</li>
        <li>Designed HALO, the Angular reactive SPA frontend for rCloud.</li>
        <li>Migrated rCloud from VMs with Chef into Docker and Kubernetes.</li>
        <li>Refactored a Rails monolith into multiple microservices with REST APIs.</li>
        <li>Switched inter-services restful communication to event driven with RabbitMQ.</li>
        <li>Applied DDD, distilling the business rules by discovering a DSL called Corals.</li>
        <li>Enhanced remote team collaboration with BDD, pair and mob programming.</li>
        <li>Created, wrapped or improved mock frameworks in C#, Ruby and Delphi.</li>
        <li>Automated all things via TeamCity pipelines in Kotlin, achieving CI/CD.</li>
        <li>Converted TeamCity pipelines into Github Actions.</li>
        <li>Evolved beyond TDD by adopting and evangelizing TCR.</li>
        <li>Coached and facilitated XP, SCRUM, Kanban and SAFE adoptions.</li>
      </ul>

      <p><code>2004-2008</code> <a href="http://www.alienware.com">Alienware:</a> Software Engineer in Alienlabs.<br />
      (C#, C++, ASP.Net, WPF, MSSQL)</p>

      <ul>
        <li>Optimized the PC provisioning process reducing the installation time by 25%.</li>
        <li>Reengineered a legacy C++ account manager system into C# in four months.</li>
        <li>Lead the team to deliver simultaneously WinForm and ASP.NET clients.</li>
        <li>Defined the team's methodology mixing XP, Scrum and Crystal Clear.</li>
        <li>Successfully introduced TDD with MSTest in the company.</li>
      </ul>

      <p><code>2002-2003</code> <a href="http://www.miami.edu">University of Miami:</a> Developed a budget tracking app in VB for the Admission Office.</p>
      <p><code>2001-2002</code> <a href="http://www.grocerytaxi.com">Grocerytaxi:</a> Migrated the website from HTML to classic ASP.</p>
      <p><code>1998-2000</code> <a href="http://www.transturcarrental.com">Panautos:</a> Created the app used to rent the cars Delphi/MSSQL.</p>

      <h3>Open Source</h3>

      <p><code>2018</code> <a href="https://github.com/limadelic/corals">Corals:</a> Sentient data structures.</p>
      <p><code>2015</code> <a href="http://www.doble9.com">Doble9:</a> Proper dominoes.</p>
      <p><code>2013</code> <a href="https://github.com/limadelic/frankendoc">Frankendoc:</a> Brings documents alive.</p>
      <p><code>2012</code> <a href="https://github.com/limadelic/datomicjs">Datomicjs:</a> Javascript driver for Datomic.</p>
      <p><code>2011</code> <a href="https://github.com/limadelic/decaf">Decaf:</a> Official Fitnesse/Slim port to CoffeeScript.</p>
      <p><code>2010</code> <a href="http://raconteur.github.com/">Raconteur:</a> Acceptance test framework for C#.</p>
      <p><code>2008</code> <a href="http://fluentspec.codeplex.com/">FluentSpec:</a> C# mock framework with BDD flavor.</p>

      <h3>Education</h3>

      <p><code>2001-2003</code> University of Miami, FL – BS Computer Science.</p>
      <p><code>1994-2000</code> University of Havana, Cuba – BS Computer Science.</p>
    </Layout>
  )
}
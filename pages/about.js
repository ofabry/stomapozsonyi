import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Stoma Pozsonyi</h1>

        <p className="description">
          <strong>tel. č.:</strong> 031/7878106<br>
          <strong>email:</strong> stomavp@gmail.com<br>
        </p>

        <p>
          <b>Adresa:</b><br>
          Školská 1565<br>
          925 22 Veľké Úľany
        </p>

        <p>
          <strong>instagram:</strong> stomavp<br>
          <strong>facebook:</strong> ?<br>
        </p>
      </Layout>
    </>
  )
}

export default About

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

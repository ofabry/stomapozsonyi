import Layout from '@components/Layout'

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1 className="title">Stoma Pozsonyi</h1>

        <p className="description">
          tel. č.: 031/7878106
          email: stomavp@gmail.com
        </p>

        <p>
          Adresa:
          Školská 1565
          925 22 Veľké Úľany
        </p>

        <p>
          instagram: stomavp
          facebook: ?
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

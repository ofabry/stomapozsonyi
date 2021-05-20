import Layout from '@components/Layout'
import PostList from '@components/PostList'

import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Stoma Pozsonyi</h1>
        
        <p className="description">
          Vaša zubná ambulancia vo Veľkých Úľanoch
        </p>
        <main>
          <PostList posts={posts} />
        </main>
        <p>
          Naše kontaktné údaje najdete 
          <a href="https://github.com/cassidoo/next-netlify-blog-starter">
            tu
          </a>.
        </p>
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

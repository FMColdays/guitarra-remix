import PropTypes from 'prop-types'
import Post from './post'

const ListadoPost = ({ posts }) => {
  return (
    <>
      <h2 className='heading'>Blog</h2>
      <section className='blog'>
        {posts.map((post) => (
          <Post key={post.id} post={post.attributes} />
        ))}
      </section>
    </>
  )
}

ListadoPost.propTypes = {
  posts: PropTypes.array
}

export default ListadoPost

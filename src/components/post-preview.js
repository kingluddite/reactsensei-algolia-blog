import React from 'react'
import { Highlight } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const PostPreview = ({ hit }) => {
  return (
    <article>
      <header>
        <h3
          style={{
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: `none` }} to={hit.slug}>
            <Highlight hit={hit} attribute="title" tagName="mark" />
          </Link>
        </h3>
        <small>{new Date(hit.date).toLocaleDateString()}</small>
      </header>
      <section>
        {/* <p */}
        {/*   dangerouslySetInnerHTML={{ */}
        {/*     __html: hit.description || hit.excerpt, */}
        {/*   }} */}
        {/* /> */}
        <p>
          <Highlight hit={hit} attribute="excerpt" tagName="mark" />
        </p>
      </section>
    </article>
  )
}

export default PostPreview

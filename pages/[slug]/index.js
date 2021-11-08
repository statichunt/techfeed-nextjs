import fs from 'fs'
import Image from 'next/image'
import path from 'path'
import styles from '../../styles/Post.module.css'
import marked from 'marked'
import { IconData } from '../../component/IconData'
import FilterData from '../../component/FilterData'



const matter = require('gray-matter')


const SinglePost = ({ posts, frontmatter, content, slug }) => {
    const filter = posts.filter(data => data.frontmatter.category == frontmatter.category)
    const remainData = posts.filter(el => !filter.includes(el))
    console.log('remain', remainData)
    const filterDataById = filter.filter(data => data.frontmatter.id != frontmatter.id)

    const sortBySlug = [...filterDataById, ...remainData]
    return (
        <div className={styles.post} >

            <div key={slug} className={styles.dataPost}>
                <div className={styles.dataImage}>
                    <Image
                        alt="abc"
                        src={frontmatter.image}
                        width={1200}
                        height={700}
                        layout="responsive"
                    />
                </div>
                <div className={styles.dataTitle}>
                    <a className={styles.title}>{frontmatter.title}</a>
                </div>
                <h1
                    onClick={() => {
                        router.push(
                            {
                                pathname: '/[slug]',
                                query: { slug: data.slug }
                            }
                        )
                    }}
                    className={styles.heading}
                >{frontmatter.heading}</h1>

                <div className={styles.dataSubHeading}>
                    <p>Posted on {frontmatter.date} by <span className={styles.author}>{frontmatter.author}</span></p>
                </div>

                <div dangerouslySetInnerHTML={{ __html: marked(content) }} className={styles.content}></div>

                <div className={styles.link}>
                    <div className={styles.socialLink}>
                        {
                            IconData.slice(0, 3).map(data => <div key={data.class} className={`${styles.mediaIcon} ${styles[data.class]}`}><a href="#" className={styles.icon} >{data.icon}</a></div>)
                        }

                    </div>
                </div>

                <FilterData value={sortBySlug.slice(0, 3)}></FilterData>
            </div>
        </div>
    )
}

export default SinglePost

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
    console.log(files)

    const paths = files.map((path) => ({
        params: {
            slug: path.replace('.md', '')
        }
    }))
    console.log(paths)
    return {
        paths,
        fallback: false

    }
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params
    const singleMetaDataWithFrontMatter = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
    const { data: frontmatter, content } = matter(singleMetaDataWithFrontMatter)

    const files = fs.readdirSync(path.join('posts'))

    const posts = files.map((filename) => {
        const slug = filename.replace('.md', '')


        const metaDataWithFrontMatter = fs.readFileSync(path.join('posts', filename), 'utf-8')

        const { data: frontmatter, content } = matter(metaDataWithFrontMatter)
        return {
            slug,
            content,
            frontmatter
        }
    })

    return {
        props: {
            posts,
            frontmatter,
            slug,
            content
        }

    }

}
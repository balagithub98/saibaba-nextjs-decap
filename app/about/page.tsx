import { getPageContent } from '@/lib/content'
import Image from 'next/image'

export default async function About() {
  const content = await getPageContent('about')

  return (
    <div className="page-content">
      <div className="container">
        <h1>
          {(content as any)?.title || 'About Our Temple'}
        </h1>
        
        {(content as any)?.image && (
          <div className="featured-image">
            <Image
              src={(content as any).image}
              alt="Temple"
              width={800}
              height={400}
            />
          </div>
        )}

        <div className="content-body">
          <div dangerouslySetInnerHTML={{ __html: content?.body || '' }} />
        </div>
      </div>
    </div>
  )
}

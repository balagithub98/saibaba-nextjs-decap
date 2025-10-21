import { getPageContent, getEvents } from '@/lib/content'
import Image from 'next/image'

export default async function Events() {
  const content = await getPageContent('events')
  const events = await getEvents()

  return (
    <div className="page-content">
      <div className="container">
        <h1>
          {(content as any)?.title || 'Events & Programs'}
        </h1>
        
        {(content as any)?.image && (
          <div className="featured-image">
            <Image
              src={(content as any).image}
              alt="Events"
              width={800}
              height={400}
            />
          </div>
        )}

        <div className="content-body">
          <div dangerouslySetInnerHTML={{ __html: content?.body || '' }} />
        </div>

        {/* Events List */}
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              {(event as any).image && (
                <Image
                  src={(event as any).image}
                  alt={(event as any).title}
                  width={400}
                  height={200}
                />
              )}
              <div className="card-content">
                <h3>{(event as any).title}</h3>
                <p className="event-date">
                  {new Date((event as any).date).toLocaleDateString()} at {(event as any).time}
                </p>
                <div 
                  className="event-description"
                  dangerouslySetInnerHTML={{ __html: event.body }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

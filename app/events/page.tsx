import { getPageContent, getEvents } from '@/lib/content'
import Image from 'next/image'

export default async function Events() {
  const content = await getPageContent('events')
  const events = await getEvents()

  return (
    <div className="page-content">
      <div className="container">
        <h1>
          {content?.title || 'Events & Programs'}
        </h1>
        
        {content?.image && (
          <div className="featured-image">
            <Image
              src={content.image}
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
              {event.image && (
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={200}
                />
              )}
              <div className="card-content">
                <h3>{event.title}</h3>
                <p className="event-date">
                  {new Date(event.date).toLocaleDateString()} at {event.time}
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

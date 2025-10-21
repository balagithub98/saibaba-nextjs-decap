import { getPageContent } from '@/lib/content'

export default async function Contact() {
  const content = await getPageContent('contact')

  return (
    <div className="page-content">
      <div className="container">
        <h1>
          {content?.title || 'Contact Us'}
        </h1>
        
        <div className="content-body">
          <div dangerouslySetInnerHTML={{ __html: content?.body || '' }} />
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              
              {content?.address && (
                <div className="info-item">
                  <h4>Address:</h4>
                  <p>{content.address}</p>
                </div>
              )}
              
              {content?.phone && (
                <div className="info-item">
                  <h4>Phone:</h4>
                  <p>{content.phone}</p>
                </div>
              )}
              
              {content?.email && (
                <div className="info-item">
                  <h4>Email:</h4>
                  <p>{content.email}</p>
                </div>
              )}
            </div>
          </div>

          <div>
            {content?.mapEmbed && (
              <div 
                className="contact-info"
                dangerouslySetInnerHTML={{ __html: content.mapEmbed }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

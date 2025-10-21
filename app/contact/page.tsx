import { getPageContent } from '@/lib/content'

export default async function Contact() {
  const content = await getPageContent('contact')

  return (
    <div className="page-content">
      <div className="container">
        <h1>
          {(content as any)?.title || 'Contact Us'}
        </h1>
        
        <div className="content-body">
          <div dangerouslySetInnerHTML={{ __html: content?.body || '' }} />
        </div>

        <div className="contact-grid">
          <div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              
              {(content as any)?.address && (
                <div className="info-item">
                  <h4>Address:</h4>
                  <p>{(content as any).address}</p>
                </div>
              )}
              
              {(content as any)?.phone && (
                <div className="info-item">
                  <h4>Phone:</h4>
                  <p>{(content as any).phone}</p>
                </div>
              )}
              
              {(content as any)?.email && (
                <div className="info-item">
                  <h4>Email:</h4>
                  <p>{(content as any).email}</p>
                </div>
              )}
            </div>
          </div>

          <div>
            {(content as any)?.mapEmbed && (
              <div 
                className="contact-info"
                dangerouslySetInnerHTML={{ __html: (content as any).mapEmbed }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

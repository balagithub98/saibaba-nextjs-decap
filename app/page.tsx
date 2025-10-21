import { getHomepageContent } from '@/lib/content'
import Image from 'next/image'

export default async function Home() {
  const content = await getHomepageContent()

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>
            {content?.title || 'Welcome to Our Sacred Temple'}
          </h1>
          
          {content?.heroImage ? (
            <div className="hero-image">
              <Image
                src={content.heroImage}
                alt="Temple Hero"
                width={800}
                height={400}
              />
            </div>
          ) : (
            <div className="image-placeholder">
              <div className="icon">🕉️</div>
              <p>Sacred Temple Image</p>
            </div>
          )}

          {content?.functionName ? (
            <div className="function-card">
              <h2>
                Today's Function: {content.functionName}
              </h2>
              {content.functionDate && (
                <p className="function-details">
                  📅 Date: {new Date(content.functionDate).toLocaleDateString()}
                </p>
              )}
              {content.functionTime && (
                <p className="function-time">
                  ⏰ Time: {content.functionTime}
                </p>
              )}
              {content.specialMessage && (
                <p className="special-message">
                  💫 {content.specialMessage}
                </p>
              )}
            </div>
          ) : (
            <div className="default-activities">
              <h2>
                Daily Temple Activities
              </h2>
              <p>
                Join us for our regular spiritual activities and community gatherings.
              </p>
              <div className="activities-grid">
                <div className="activity-item">
                  <h3>🌅 Morning Aarti</h3>
                  <p>6:00 AM - 6:30 AM</p>
                </div>
                <div className="activity-item">
                  <h3>🌙 Evening Aarti</h3>
                  <p>6:00 PM - 6:30 PM</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          <div className="cards-grid">
            <div className="card">
              <div className="icon">🕉️</div>
              <h3>Daily Prayers</h3>
              <p>
                Join us for daily prayers and spiritual guidance in our peaceful temple environment. Experience the divine connection through our sacred rituals.
              </p>
            </div>
            
            <div className="card">
              <div className="icon">🙏</div>
              <h3>Community Events</h3>
              <p>
                Participate in our regular community events and spiritual gatherings. Connect with fellow devotees and strengthen your spiritual journey.
              </p>
            </div>
            
            <div className="card">
              <div className="icon">🌟</div>
              <h3>Spiritual Guidance</h3>
              <p>
                Seek spiritual guidance and connect with our community of devotees. Our experienced spiritual leaders are here to guide your path.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

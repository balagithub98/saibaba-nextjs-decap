import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'content')

export async function getHomepageContent() {
  try {
    const fullPath = path.join(contentDirectory, 'homepage')
    const files = fs.readdirSync(fullPath)
    const latestFile = files
      .filter(name => name.endsWith('.md'))
      .sort()
      .pop()
    
    if (!latestFile) return null

    const fileContents = fs.readFileSync(path.join(fullPath, latestFile), 'utf8')
    const { data } = matter(fileContents)
    
    return data
  } catch (error) {
    console.error('Error loading homepage content:', error)
    return null
  }
}

export async function getPageContent(slug: string) {
  try {
    const fullPath = path.join(contentDirectory, 'pages', `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()
    
    return {
      ...data,
      body: contentHtml
    }
  } catch (error) {
    console.error(`Error loading page content for ${slug}:`, error)
    return null
  }
}

export async function getEvents() {
  try {
    const fullPath = path.join(contentDirectory, 'events')
    const files = fs.readdirSync(fullPath)
    
    const events = files
      .filter(name => name.endsWith('.md'))
      .map(name => {
        const fileContents = fs.readFileSync(path.join(fullPath, name), 'utf8')
        const { data, content } = matter(fileContents)
        return { ...data, body: content }
      })
      .filter(event => (event as any).published !== false)
      .sort((a, b) => new Date((b as any).date).getTime() - new Date((a as any).date).getTime())
    
    return events
  } catch (error) {
    console.error('Error loading events:', error)
    return []
  }
}

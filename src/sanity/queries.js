// GROQ queries for fetching portfolio data from Sanity

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc, _createdAt asc) {
  name,
  "slug": slug.current,
  description,
  category,
  image,
  tags,
  metrics,
  source_code_link,
  link
}`

export const CASE_STUDIES_QUERY = `*[_type == "caseStudy"] | order(order asc, _createdAt asc) {
  name,
  "slug": slug.current,
  category,
  description,
  image,
  role,
  responsibilities,
  challenges,
  techStack,
  patterns,
  link
}`

export const PRODUCTS_QUERY = `*[_type == "product"] | order(order asc, _createdAt asc) {
  _id,
  name,
  "slug": slug.current,
  category,
  status,
  description,
  image,
  features,
  techStack,
  link,
  github
}`

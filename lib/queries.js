import { groq } from 'next-sanity';

export const getPaginatedPosts = groq`
  *[_type == "post" && (
    $category == "ALL" || 
    lower(category) == lower($category) || 
    lower(filter) == lower($category)
  )] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    category,
    filter,
    ref
  }
`;

export const getPostsCount = groq`
  count(*[_type == "post" && (
    $category == "ALL" || 
    lower(category) == lower($category) || 
    lower(filter) == lower($category)
  )])
`;

export const getAllPosts = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    category,
    ref
  }
`;

export const getPostBySlug = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    category,
    tags,
    ref,
    content,
    faqs,
    seo,
    author-> {
      name,
      image,
      bio
    }
  }
`;

export const getAllJobs = groq`
  *[_type == "job"] | order(postedAt desc) {
    _id,
    title,
    location,
    type,
    postedAt,
    description
  }
`;

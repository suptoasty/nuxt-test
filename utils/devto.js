export const toPost = (article) => {
  let data = {}

  data.title = article.title
  data.description = article.description
  data.id = article.id
  data.slug = article.slug
  data.url = article.url
  data.createdAt = article.created_at
  data.updatedAt = article.edited_at
  data.body_markdown = article.body_markdown

  data.author = {
    name: article.user.name,
    bio: null,
    image: article.user.profile_image,
  }

  return data
}

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en', options)
}

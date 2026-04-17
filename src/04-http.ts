/**
 * Типізація HTTP-запитів з Axios
 *
 * https://dummyjson.com/docs/posts
 */

import axios from 'axios'

interface Reaction {
  likes: number
  dislikes: number
}
// interface Post {
//   id: number
//   title: string
//   body: string
//   reactions: Reaction
// }
interface Post {
  id: number
  title: string
  body: string
  reactions: Reaction
  // reactions2: Reaction
  // reactions3: Reaction
  // reactions4: Reaction
  // reactions5: Reaction
  // reactions6: Reaction
  // reactions7: Reaction
}
interface CreatePost {
  title: string
  body: string
}
// black list
// type CreatePost = Omit<Post, 'id' | 'reactions'>
// white list
// type CreatePost = Pick<Post, 'title' | 'body'>

interface GetPostsResponse {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

const getAllPosts = async () => {
  const response = await axios.get<GetPostsResponse>('https://dummyjson.com/posts')
  return response.data
}
getAllPosts().then((res) => res.posts.map((p) => p.body))

const getPostById = async (postId: number) => {
  const response = await axios.get<Post>(`https://dummyjson.com/posts/${postId}`)
  return response.data
}
getPostById(42).then((post) => post.reactions)

const createPost = async (newPost: CreatePost) => {
  const response = await axios.post<Post>('https://dummyjson.com/posts/add', newPost)
  return response.data
}

const newPost: CreatePost = { body: 'some body', title: 'Some Title' }

createPost(newPost).then((responsePost) => responsePost.body)

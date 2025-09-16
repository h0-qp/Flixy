import Navbar from '@/components/Navbar'
import PostCard from '@/components/PostCard'

export default function Home() {
  const posts = [
    { id: 1, username: 'user1', content: 'أول منشور على Flixy 🚀', likes: 10, views: 120 },
    { id: 2, username: 'user2', content: 'أهلاً بالعالم! 🌍', likes: 5, views: 80 },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="p-4 space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}


import { useQuery } from "@tanstack/react-query";

type Post = {
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function Posts() {
  const { data, isLoading, error } = useQuery<Post[]>({
    queryKey: ["posts"], 
    queryFn: fetchPosts, 
  });

  if (isLoading) return <p>⏳ Loading...</p>;
  if (error) return <p>❌ Error: {(error as Error).message}</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">📄 Posts</h1>
      <ul className="space-y-2">
        {data?.slice(0, 5).map((post) => (
          <li key={post.id} className="p-2 border rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

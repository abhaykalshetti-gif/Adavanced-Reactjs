
import Posts from "./Posts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function App() {

    const queryClient = new QueryClient();
  
    return (
    <QueryClientProvider client={queryClient}>
     <div className="p-6">
      <h1 className="text-2xl font-bold">🚀 React Query Example</h1>
      <Posts />
    </div>
    </QueryClientProvider>
  );
}

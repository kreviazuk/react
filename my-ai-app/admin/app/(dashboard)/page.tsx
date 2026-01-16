export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Create Next App</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-gray-500 text-sm font-medium">Total Books</h3>
          <p className="text-3xl font-bold mt-2">124</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-gray-500 text-sm font-medium">Active Loans</h3>
          <p className="text-3xl font-bold mt-2 text-blue-600">42</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border">
          <h3 className="text-gray-500 text-sm font-medium">Pending Returns</h3>
          <p className="text-3xl font-bold mt-2 text-orange-500">8</p>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-lg shadow border">
         <h2 className="text-lg font-semibold mb-4">Welcome to Library Admin</h2>
         <p className="text-gray-600">Select "Books" from the sidebar to manage your library inventory.</p>
      </div>
    </div>
  );
}

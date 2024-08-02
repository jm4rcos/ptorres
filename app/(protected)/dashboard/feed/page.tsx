export default function ProtectedPage() {
  return (
    <main className="flex flex-col min-h-screen gap-8 items-center p-2">
      <div className="flex bg-teal-100 p-4 rounded-lg items-center gap-2">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img src="https://via.placeholder.com/300" alt="profile pic" />
        </div>
        <h3 className="text-slate-800">My Name</h3>
      </div>
      <h3 className="text-3xl font-bold">Feed Page</h3>
    </main>
  );
}

import { Sidebar } from "./dashboard/_components/side-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex p-2 gap-4 w-full min-h-screen">
      <Sidebar />
      <div className="flex flex-col p-4 w-full h-full gap-2">
        <div className="flex bg-teal-100 p-4 rounded-lg items-center gap-2">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img src="https://via.placeholder.com/300" alt="profile pic" />
          </div>
          <h3 className="text-slate-800">My Name</h3>
        </div>
        {children}
      </div>
    </div>
  );
}

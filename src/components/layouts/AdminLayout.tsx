import { useAdminAuth } from "@/hooks/useAdminAuth";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "../admin/Sidebar";

export const AdminLayout = () => {
  const { isAdmin, loading } = useAdminAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

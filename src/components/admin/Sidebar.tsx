import { Link } from "react-router-dom";
import { Package, Settings, Users, MessageSquare, LogOut, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { icon: Package, label: "Products", href: "/admin/products" },
    { icon: FileText, label: "Blog", href: "/admin/blog" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: MessageSquare, label: "Messages", href: "/admin/messages" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  return (
    <div className="w-64 bg-secondary h-full p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="flex items-center gap-2 p-2 rounded hover:bg-accent"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 p-2 rounded hover:bg-accent w-full text-left"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};
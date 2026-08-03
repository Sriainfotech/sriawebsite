import { Outlet, useNavigate, Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clearAdminSession, getAdminUsername } from "@/lib/adminAuth";

const AdminLayout = () => {
  const navigate = useNavigate();
  const username = getAdminUsername();

  const handleLogout = () => {
    clearAdminSession();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500" />
      <header className="bg-slate-950 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/admin/blogs" className="flex items-center gap-3">
            <img
              src="https://ik.imagekit.io/hps6th7vy/sria/logo.png?tr=f-auto,q-auto,w-160"
              alt="Sria Infotech logo"
              className="h-8 w-auto"
              width={64}
              height={32}
            />
            <span className="font-heading font-bold text-white text-lg hidden sm:inline">Sria Infotech</span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-orange-400 border border-orange-500/30 bg-orange-500/10 rounded-full px-2.5 py-1">
              Admin
            </span>
          </Link>
          <div className="flex items-center gap-4">
            {username && (
              <span className="text-sm text-white/60 hidden sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {username}
              </span>
            )}
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white/70 hover:text-white hover:bg-white/10">
              <LogOut className="w-4 h-4" />
              Log out
            </Button>
          </div>
        </div>
      </header>
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

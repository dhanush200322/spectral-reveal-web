import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Code, Mail, FileText, Contact } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
   { path: "/About",icon: Contact,label: "About"},
  { path: "/projects", icon: Briefcase, label: "Projects" },
  { path: "/skills", icon: Code, label: "Skills" },
  { path: "/resume", icon: FileText, label: "Resume" },
   { path: "/contact", icon: Mail, label: "Contact" },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-card/80 backdrop-blur-xl border border-border rounded-full px-8 py-3 flex items-center justify-between">

          {/* ✅ LOGO WITH CIRCLE AROUND D */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center border border-gray-700">
              <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                D
              </span>
            </div>

           
          </motion.div>

          {/* ✅ NAV ITEMS */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-full transition-colors ${
                      isActive
                        ? "bg-[#00D4FF] text-black"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span className="hidden md:inline text-sm font-medium">
                        {item.label}
                      </span>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-[#00D4FF] rounded-full -z-10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

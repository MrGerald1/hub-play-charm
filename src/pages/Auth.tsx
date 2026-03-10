import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="px-5 py-6 min-h-[70vh] flex flex-col">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-muted-foreground text-sm mb-8">
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex-1 flex flex-col items-center justify-center space-y-6 max-w-xs mx-auto w-full">
        <div className="text-center space-y-2">
          <h1 className="font-display font-bold text-2xl text-foreground">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {mode === "login" ? "Sign in to sync your progress" : "Join PlayHub and save your decks"}
          </p>
        </div>

        {/* Google OAuth */}
        <Button variant="outline" className="w-full h-12 border-border text-foreground font-medium">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5 mr-2" />
          Continue with Google
        </Button>

        <div className="flex items-center gap-3 w-full">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Email form */}
        <div className="w-full space-y-3">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-muted border-border"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-muted border-border"
          />
          <Button className="w-full h-12 bg-gradient-primary text-primary-foreground font-display font-bold">
            {mode === "login" ? "Sign In" : "Create Account"}
          </Button>
        </div>

        <p className="text-xs text-muted-foreground">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-primary font-medium"
          >
            {mode === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;

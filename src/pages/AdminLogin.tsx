import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { seedProducts } from "@/lib/seed-products";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (email !== "phastorgroup@gmail.com") {
      toast({
        title: "Access Denied",
        description: "Only the admin email can login.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Login Successful",
        description: "Welcome, admin!",
      });
      navigate("/admin");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <Input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          className="w-full"
          onClick={async () => {
            try {
              await seedProducts();
              toast({
                title: "Products Seeded",
                description: "Sample products have been added successfully!",
              });
            } catch (error) {
              toast({
                title: "Error",
                description: "Failed to seed products. Check console for details.",
                variant: "destructive",
              });
            }
          }}
        >
          Seed Sample Products
        </Button>
      </form>
    </div>
  );
}

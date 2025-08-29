import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import PromoBanner from "@/components/layout/PromoBanner";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";
import UserRoleManager from "@/components/admin/UserRoleManager";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, Users, Ticket } from "lucide-react";

const Admin = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [supportStats, setSupportStats] = useState({ total: 0, open: 0, closed: 0 });

  useEffect(() => {
    checkUserRole();
    loadSupportStats();
  }, []);

  const checkUserRole = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        setLoading(false);
        return;
      }

      // Check if user has admin role
      const { data: roleData } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .single();

      setUserRole(roleData?.role || null);
    } catch (error) {
      console.error('Error checking user role:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadSupportStats = async () => {
    try {
      const { data: tickets } = await supabase
        .from('support_tickets')
        .select('status');

      if (tickets) {
        const total = tickets.length;
        const open = tickets.filter(t => t.status === 'open').length;
        const closed = tickets.filter(t => t.status === 'closed').length;
        setSupportStats({ total, open, closed });
      }
    } catch (error) {
      console.error('Error loading support stats:', error);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Admin Dashboard - Moonshot AI",
    "description": "Administrative dashboard for managing users and support tickets.",
    "publisher": {
      "@type": "Organization",
      "name": "Moonshot AI"
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (userRole !== 'admin') {
    return (
      <>
        <SEOHead 
          title="Access Denied - Moonshot AI"
          description="Admin access required"
          structuredData={structuredData}
        />
        <div className="min-h-screen flex flex-col bg-background">
          <PromoBanner />
          <Header />
          <main className="flex-1 container mx-auto px-6 py-20">
            <Alert className="max-w-md mx-auto">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Access denied. Admin privileges required to view this page.
              </AlertDescription>
            </Alert>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title="Admin Dashboard - Moonshot AI"
        description="Administrative dashboard for managing users and support system"
        keywords="admin, dashboard, user management, support tickets"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <PromoBanner />
        <Header />
        <main className="flex-1 container mx-auto px-6 py-8" role="main">
          <div className="space-y-8">
            <header>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-primary" />
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              </div>
              <p className="text-muted-foreground">
                Manage users, roles, and monitor support system health
              </p>
            </header>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Tickets</CardTitle>
                  <Ticket className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{supportStats.total}</div>
                  <p className="text-xs text-muted-foreground">
                    All support requests
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Open Tickets</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-warning" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-warning">{supportStats.open}</div>
                  <p className="text-xs text-muted-foreground">
                    Require attention
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Resolved</CardTitle>
                  <Users className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{supportStats.closed}</div>
                  <p className="text-xs text-muted-foreground">
                    Successfully resolved
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* User Role Management */}
            <UserRoleManager />

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    ✅ Support System: Operational
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    ✅ User Roles: Configured
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    ✅ RLS Policies: Active
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Admin;
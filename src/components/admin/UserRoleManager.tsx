import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Shield, User, Crown, Settings } from "lucide-react";

type AppRole = 'admin' | 'moderator' | 'user';

interface UserWithRole {
  id: string;
  email: string;
  role?: AppRole;
}

const UserRoleManager = () => {
  const [users, setUsers] = useState<UserWithRole[]>([]);
  const [selectedRole, setSelectedRole] = useState<AppRole>('user');
  const [loading, setLoading] = useState(false);

  const roleIcons = {
    admin: <Crown className="w-4 h-4" />,
    moderator: <Shield className="w-4 h-4" />,
    user: <User className="w-4 h-4" />
  };

  const roleColors = {
    admin: "bg-red-100 text-red-800 hover:bg-red-200",
    moderator: "bg-blue-100 text-blue-800 hover:bg-blue-200", 
    user: "bg-gray-100 text-gray-800 hover:bg-gray-200"
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      // Get current user's roles
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return;

      const { data: userRoles, error } = await supabase
        .from('user_roles')
        .select('user_id, role')
        .eq('user_id', user.id);

      if (error) throw error;

      const usersWithRoles = userRoles?.map(ur => ({
        id: ur.user_id,
        email: user.email || 'Current User',
        role: ur.role as AppRole
      })) || [];

      setUsers(usersWithRoles);
    } catch (error) {
      console.error('Error loading users:', error);
      toast.error("Failed to load users");
    }
  };

  const assignRole = async () => {
    if (!selectedRole) {
      toast.error("Please select a role");
      return;
    }

    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error("You must be logged in to assign roles");
        return;
      }

      // Insert or update role for current user
      const { error: roleError } = await supabase
        .from('user_roles')
        .upsert({
          user_id: user.id,
          role: selectedRole
        });

      if (roleError) throw roleError;

      toast.success(`Role ${selectedRole} assigned to your account`);
      setSelectedRole('user');
      loadUsers();
    } catch (error) {
      console.error('Error assigning role:', error);
      toast.error("Failed to assign role.");
    } finally {
      setLoading(false);
    }
  };

  const removeRole = async (userId: string, role: AppRole) => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId)
        .eq('role', role);

      if (error) throw error;

      toast.success("Role removed successfully");
      loadUsers();
    } catch (error) {
      console.error('Error removing role:', error);
      toast.error("Failed to remove role");
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            User Role Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="w-40">
              <Select value={selectedRole} onValueChange={(value: AppRole) => setSelectedRole(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">
                    <div className="flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      Admin
                    </div>
                  </SelectItem>
                  <SelectItem value="moderator">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Moderator
                    </div>
                  </SelectItem>
                  <SelectItem value="user">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      User
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={assignRole} disabled={loading}>
              {loading ? "Assigning..." : "Assign to Current User"}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            This assigns the selected role to your current account. In production, implement proper user management.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current User Roles</CardTitle>
        </CardHeader>
        <CardContent>
          {users.length === 0 ? (
            <p className="text-muted-foreground">No users with assigned roles</p>
          ) : (
            <div className="space-y-3">
              {users.map((user) => (
                <div key={`${user.id}-${user.role}`} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium">{user.email}</div>
                    <Badge className={roleColors[user.role || 'user']}>
                      <div className="flex items-center gap-1">
                        {roleIcons[user.role || 'user']}
                        {user.role}
                      </div>
                    </Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeRole(user.id, user.role!)}
                  >
                    Remove Role
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserRoleManager;
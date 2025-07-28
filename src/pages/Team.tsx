import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, UserPlus, Shield, CheckCircle, Clock, GraduationCap } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      email: "john.smith@company.com",
      role: "CISO",
      department: "Security",
      permissions: ["Admin", "All Modules"],
      lastActive: "5 minutes ago",
      trainingStatus: "current",
      trainingScore: 95
    },
    {
      name: "Sarah Johnson", 
      email: "sarah.johnson@company.com",
      role: "Security Analyst",
      department: "Security",
      permissions: ["Detect", "Respond", "Reports"],
      lastActive: "2 hours ago",
      trainingStatus: "current",
      trainingScore: 88
    },
    {
      name: "Mike Davis",
      email: "mike.davis@company.com", 
      role: "IT Manager",
      department: "IT",
      permissions: ["Protect", "Recover"],
      lastActive: "1 day ago",
      trainingStatus: "overdue",
      trainingScore: 72
    },
    {
      name: "Anna Wilson",
      email: "anna.wilson@company.com",
      role: "Compliance Officer",
      department: "Legal",
      permissions: ["Govern", "Reports"],
      lastActive: "3 hours ago",
      trainingStatus: "in-progress",
      trainingScore: 78
    },
    {
      name: "David Brown",
      email: "david.brown@company.com",
      role: "Risk Manager", 
      department: "Risk",
      permissions: ["Identify", "Assess", "Reports"],
      lastActive: "6 hours ago",
      trainingStatus: "current",
      trainingScore: 92
    }
  ];

  const roles = [
    { name: "CISO", count: 1, description: "Chief Information Security Officer" },
    { name: "Security Analyst", count: 3, description: "Security monitoring and analysis" },
    { name: "IT Manager", count: 2, description: "IT infrastructure management" },
    { name: "Compliance Officer", count: 1, description: "Regulatory compliance oversight" },
    { name: "Risk Manager", count: 1, description: "Risk assessment and management" },
  ];

  const permissionGroups = [
    { name: "Admin", users: 1, modules: "All Modules" },
    { name: "Security Team", users: 3, modules: "Detect, Respond, Identify" },
    { name: "IT Team", users: 2, modules: "Protect, Recover" },
    { name: "Compliance Team", users: 1, modules: "Govern, Reports" },
    { name: "Risk Team", users: 1, modules: "Identify, Assessment" },
  ];

  const trainingModules = [
    { name: "NIST CSF Fundamentals", completion: 92, required: true },
    { name: "Incident Response Procedures", completion: 85, required: true },
    { name: "Risk Assessment Methodology", completion: 78, required: false },
    { name: "Compliance Requirements", completion: 88, required: true },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Team Management</h1>
            <p className="text-muted-foreground">Manage users, roles, and permissions</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Shield className="w-4 h-4 mr-2" />
              Manage Roles
            </Button>
            <Button>
              <UserPlus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold text-foreground">156</p>
                </div>
                <Users className="w-10 h-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-foreground">143</p>
                </div>
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Training Current</p>
                  <p className="text-2xl font-bold text-foreground">89%</p>
                </div>
                <GraduationCap className="w-10 h-10 text-accent" />
              </div>
              <Progress value={89} className="mt-4" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Security Roles</p>
                  <p className="text-2xl font-bold text-foreground">8</p>
                </div>
                <Shield className="w-10 h-10 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Security Team Members
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                      <p className="text-sm text-muted-foreground">
                        {member.role} • {member.department}
                      </p>
                    </div>
                    <Badge variant={
                      member.trainingStatus === "current" ? "default" :
                      member.trainingStatus === "in-progress" ? "secondary" : "destructive"
                    }>
                      {member.trainingStatus === "current" ? "Trained" :
                       member.trainingStatus === "in-progress" ? "Training" : "Overdue"}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Permissions: </span>
                      <span>{member.permissions.join(", ")}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Training Score: {member.trainingScore}%</span>
                      <span className="text-muted-foreground">Last active: {member.lastActive}</span>
                    </div>
                    <Progress value={member.trainingScore} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Role Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {roles.map((role, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">{role.name}</h4>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary">{role.count} users</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Permission Groups
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {permissionGroups.map((group, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">{group.name}</h4>
                    <p className="text-sm text-muted-foreground">{group.modules}</p>
                  </div>
                  <Badge variant="outline">{group.users} users</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Training Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trainingModules.map((module, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-foreground">{module.name}</h4>
                      {module.required && (
                        <Badge variant="destructive" className="text-xs">Required</Badge>
                      )}
                    </div>
                    <span className="text-sm font-medium">{module.completion}%</span>
                  </div>
                  <Progress value={module.completion} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Team;
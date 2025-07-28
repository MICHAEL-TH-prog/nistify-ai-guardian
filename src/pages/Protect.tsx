import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Lock, Users, GraduationCap, Shield, CheckCircle, AlertCircle, Plus, Key } from "lucide-react";

const Protect = () => {
  const accessControls = [
    { user: "john.smith@company.com", role: "Admin", lastLogin: "2024-01-28", status: "active" },
    { user: "sarah.johnson@company.com", role: "User", lastLogin: "2024-01-27", status: "active" },
    { user: "mike.davis@company.com", role: "Manager", lastLogin: "2024-01-26", status: "suspended" },
    { user: "anna.wilson@company.com", role: "User", lastLogin: "2024-01-25", status: "active" },
  ];

  const trainingModules = [
    { name: "Phishing Awareness", completion: 85, users: 156, status: "ongoing" },
    { name: "Password Security", completion: 92, users: 156, status: "completed" },
    { name: "Data Protection", completion: 67, users: 156, status: "ongoing" },
    { name: "Incident Reporting", completion: 78, users: 156, status: "ongoing" },
  ];

  const protectionMetrics = [
    { name: "Multi-Factor Authentication", coverage: 95, target: 100 },
    { name: "Endpoint Protection", coverage: 88, target: 95 },
    { name: "Network Segmentation", coverage: 72, target: 85 },
    { name: "Data Encryption", coverage: 84, target: 90 },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Protect Module</h1>
            <p className="text-muted-foreground">Access control, training, and protective measures</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-nist-protect text-white">NIST PR</Badge>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Control
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Access Control</p>
                  <p className="text-2xl font-bold text-foreground">95%</p>
                </div>
                <Lock className="w-10 h-10 text-nist-protect" />
              </div>
              <Progress value={95} className="mt-4" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Training Complete</p>
                  <p className="text-2xl font-bold text-foreground">81%</p>
                </div>
                <GraduationCap className="w-10 h-10 text-nist-protect" />
              </div>
              <Progress value={81} className="mt-4" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold text-foreground">143</p>
                </div>
                <Users className="w-10 h-10 text-nist-protect" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Protection Score</p>
                  <p className="text-2xl font-bold text-foreground">87%</p>
                </div>
                <Shield className="w-10 h-10 text-nist-protect" />
              </div>
              <Progress value={87} className="mt-4" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Key className="w-5 h-5 mr-2" />
                Access Control Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {accessControls.map((control, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{control.user}</p>
                      <p className="text-sm text-muted-foreground">
                        {control.role} • Last login: {control.lastLogin}
                      </p>
                    </div>
                  </div>
                  <Badge variant={control.status === "active" ? "default" : "destructive"}>
                    {control.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Security Training Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trainingModules.map((training, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{training.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {Math.round((training.completion / 100) * training.users)} of {training.users} users
                        </p>
                      </div>
                    </div>
                    <Badge variant={training.completion >= 90 ? "default" : "secondary"}>
                      {training.completion}%
                    </Badge>
                  </div>
                  <Progress value={training.completion} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Protection Measures Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {protectionMetrics.map((metric, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{metric.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {metric.coverage}% / {metric.target}%
                      </span>
                      {metric.coverage >= metric.target ? (
                        <CheckCircle className="w-4 h-4 text-success" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-warning" />
                      )}
                    </div>
                  </div>
                  <Progress value={metric.coverage} className="h-2" />
                  <Progress value={metric.target} className="h-1 opacity-30" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Protect;
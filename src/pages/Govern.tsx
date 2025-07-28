import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, FileText, Users, Target, CheckCircle, AlertCircle, Plus } from "lucide-react";

const Govern = () => {
  const policies = [
    { name: "Information Security Policy", status: "approved", lastReview: "2024-01-15", nextReview: "2024-07-15" },
    { name: "Access Control Policy", status: "draft", lastReview: "2024-02-01", nextReview: "2024-08-01" },
    { name: "Incident Response Policy", status: "approved", lastReview: "2024-01-10", nextReview: "2024-07-10" },
    { name: "Business Continuity Policy", status: "review", lastReview: "2023-12-01", nextReview: "2024-06-01" },
  ];

  const roles = [
    { name: "CISO", assignee: "John Smith", responsibilities: "Overall cybersecurity strategy", status: "assigned" },
    { name: "Security Analyst", assignee: "Sarah Johnson", responsibilities: "Daily security monitoring", status: "assigned" },
    { name: "Compliance Officer", assignee: "Unassigned", responsibilities: "Regulatory compliance", status: "vacant" },
    { name: "Incident Response Lead", assignee: "Mike Davis", responsibilities: "Incident coordination", status: "assigned" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Governance Module</h1>
            <p className="text-muted-foreground">Policies, roles, and organizational oversight</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-nist-govern text-white">NIST GV</Badge>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Policy
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Policy Coverage</p>
                  <p className="text-2xl font-bold text-foreground">85%</p>
                </div>
                <FileText className="w-10 h-10 text-nist-govern" />
              </div>
              <Progress value={85} className="mt-4" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Role Assignment</p>
                  <p className="text-2xl font-bold text-foreground">75%</p>
                </div>
                <Users className="w-10 h-10 text-nist-govern" />
              </div>
              <Progress value={75} className="mt-4" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Governance Score</p>
                  <p className="text-2xl font-bold text-foreground">82%</p>
                </div>
                <Shield className="w-10 h-10 text-nist-govern" />
              </div>
              <Progress value={82} className="mt-4" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Security Policies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {policies.map((policy, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {policy.status === "approved" ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-warning" />
                    )}
                    <div>
                      <p className="font-medium text-foreground">{policy.name}</p>
                      <p className="text-sm text-muted-foreground">
                        Next review: {policy.nextReview}
                      </p>
                    </div>
                  </div>
                  <Badge variant={
                    policy.status === "approved" ? "default" :
                    policy.status === "draft" ? "secondary" : "destructive"
                  }>
                    {policy.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Roles & Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {roles.map((role, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{role.name}</p>
                      <p className="text-sm text-muted-foreground">{role.responsibilities}</p>
                      <p className="text-xs text-muted-foreground">
                        {role.status === "assigned" ? `Assigned to: ${role.assignee}` : "Unassigned"}
                      </p>
                    </div>
                  </div>
                  <Badge variant={role.status === "assigned" ? "default" : "destructive"}>
                    {role.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Govern;
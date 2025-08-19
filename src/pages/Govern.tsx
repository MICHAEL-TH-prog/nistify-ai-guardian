import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, FileText, Users, Target, CheckCircle, AlertCircle, Plus, 
  Download, Building, TrendingUp, UserCheck, BookOpen, Eye,
  Link, ShoppingCart, BarChart3, Settings, AlertTriangle
} from "lucide-react";

const Govern = () => {
  const { toast } = useToast();
  const [policies, setPolicies] = useState([
    { id: 1, name: "Information Security Policy", status: "approved", lastReview: "2024-01-15", nextReview: "2024-07-15", description: "Core security policy framework" },
    { id: 2, name: "Access Control Policy", status: "draft", lastReview: "2024-02-01", nextReview: "2024-08-01", description: "User access and authorization controls" },
    { id: 3, name: "Incident Response Policy", status: "approved", lastReview: "2024-01-10", nextReview: "2024-07-10", description: "Security incident handling procedures" },
    { id: 4, name: "Business Continuity Policy", status: "review", lastReview: "2023-12-01", nextReview: "2024-06-01", description: "Business continuity and disaster recovery" },
    { id: 5, name: "Risk Management Policy", status: "approved", lastReview: "2024-01-20", nextReview: "2024-07-20", description: "Enterprise risk management framework" },
    { id: 6, name: "Data Classification Policy", status: "draft", lastReview: "2024-02-15", nextReview: "2024-08-15", description: "Data handling and classification standards" },
  ]);

  const [roles, setRoles] = useState([
    { id: 1, name: "CISO", assignee: "John Smith", responsibilities: "Overall cybersecurity strategy and leadership", status: "assigned" },
    { id: 2, name: "Security Analyst", assignee: "Sarah Johnson", responsibilities: "Daily security monitoring and threat analysis", status: "assigned" },
    { id: 3, name: "Compliance Officer", assignee: "", responsibilities: "Regulatory compliance and audit coordination", status: "vacant" },
    { id: 4, name: "Incident Response Lead", assignee: "Mike Davis", responsibilities: "Security incident coordination and response", status: "assigned" },
    { id: 5, name: "Risk Manager", assignee: "Emily Chen", responsibilities: "Enterprise risk assessment and management", status: "assigned" },
    { id: 6, name: "Privacy Officer", assignee: "", responsibilities: "Data privacy and protection oversight", status: "vacant" },
  ]);

  const [showNewPolicyDialog, setShowNewPolicyDialog] = useState(false);
  const [showAssignRoleDialog, setShowAssignRoleDialog] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  // Calculate metrics
  const policyMetrics = {
    coverage: Math.round((policies.filter(p => p.status === "approved").length / policies.length) * 100),
    roleAssignment: Math.round((roles.filter(r => r.status === "assigned").length / roles.length) * 100),
    governanceScore: Math.round(((policies.filter(p => p.status === "approved").length / policies.length) * 0.4 + 
                                 (roles.filter(r => r.status === "assigned").length / roles.length) * 0.3 + 
                                 0.3) * 100)
  };

  // NIST GV Categories data
  const nistCategories = {
    "GV.OC": {
      title: "Organizational Context",
      icon: Building,
      items: [
        { name: "Mission & Business Context", status: "complete", progress: 90 },
        { name: "Stakeholder Expectations", status: "in-progress", progress: 75 },
        { name: "Legal & Regulatory Requirements", status: "complete", progress: 95 },
        { name: "Critical Technology Dependencies", status: "in-progress", progress: 60 }
      ]
    },
    "GV.RM": {
      title: "Risk Management Strategy", 
      icon: TrendingUp,
      items: [
        { name: "Risk Management Objectives", status: "complete", progress: 85 },
        { name: "Risk Appetite & Tolerance", status: "complete", progress: 80 },
        { name: "Enterprise Risk Management Integration", status: "in-progress", progress: 70 },
        { name: "Risk Communication Strategy", status: "draft", progress: 45 }
      ]
    },
    "GV.RR": {
      title: "Roles, Responsibilities & Authorities",
      icon: UserCheck,
      items: [
        { name: "Leadership Accountability", status: "complete", progress: 90 },
        { name: "Cybersecurity Roles Definition", status: "complete", progress: 85 },
        { name: "Resource Allocation", status: "in-progress", progress: 65 },
        { name: "HR Integration", status: "draft", progress: 40 }
      ]
    },
    "GV.PO": {
      title: "Policy",
      icon: BookOpen,
      items: [
        { name: "Cybersecurity Risk Management Policies", status: "complete", progress: 85 },
        { name: "Policy Updates & Maintenance", status: "in-progress", progress: 70 },
        { name: "Policy Communication", status: "complete", progress: 80 },
        { name: "Policy Enforcement", status: "in-progress", progress: 75 }
      ]
    },
    "GV.OV": {
      title: "Oversight",
      icon: Eye,
      items: [
        { name: "Risk Management Outcome Monitoring", status: "in-progress", progress: 70 },
        { name: "Strategy & Program Reviews", status: "complete", progress: 85 },
        { name: "Continuous Improvement", status: "in-progress", progress: 60 },
        { name: "Performance Metrics", status: "draft", progress: 50 }
      ]
    },
    "GV.SC": {
      title: "Supply Chain Risk Management",
      icon: ShoppingCart,
      items: [
        { name: "Supplier Risk Assessment", status: "in-progress", progress: 65 },
        { name: "Contract Requirements", status: "complete", progress: 80 },
        { name: "Due Diligence Processes", status: "in-progress", progress: 55 },
        { name: "Supply Chain Monitoring", status: "draft", progress: 35 }
      ]
    }
  };

  const handleNewPolicy = () => {
    toast({
      title: "Policy Creation",
      description: "New policy dialog would open here",
    });
    setShowNewPolicyDialog(false);
  };

  const handleAssignRole = () => {
    if (selectedRole) {
      setRoles(roles.map(role => 
        role.id === selectedRole.id 
          ? { ...role, assignee: "New Assignee", status: "assigned" }
          : role
      ));
      toast({
        title: "Role Assigned",
        description: `${selectedRole.name} has been assigned successfully`,
      });
      setShowAssignRoleDialog(false);
      setSelectedRole(null);
    }
  };

  const generateGovernanceReport = () => {
    toast({
      title: "Governance Report",
      description: "Generating comprehensive governance report...",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">NIST CSF 2.0 Governance</h1>
            <p className="text-muted-foreground">Comprehensive governance framework and oversight</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-nist-govern text-white">NIST GV</Badge>
            <Button onClick={generateGovernanceReport} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
            <Dialog open={showNewPolicyDialog} onOpenChange={setShowNewPolicyDialog}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Policy
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Policy</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="policy-name">Policy Name</Label>
                    <Input id="policy-name" placeholder="Enter policy name" />
                  </div>
                  <div>
                    <Label htmlFor="policy-description">Description</Label>
                    <Textarea id="policy-description" placeholder="Policy description" />
                  </div>
                  <div>
                    <Label htmlFor="policy-status">Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="review">Under Review</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleNewPolicy} className="w-full">Create Policy</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Top Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Policy Coverage</p>
                  <p className="text-3xl font-bold text-foreground">{policyMetrics.coverage}%</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {policies.filter(p => p.status === "approved").length} of {policies.length} policies active
                  </p>
                </div>
                <div className="relative">
                  <FileText className="w-12 h-12 text-nist-govern" />
                  {policyMetrics.coverage >= 80 && (
                    <CheckCircle className="w-4 h-4 text-success absolute -top-1 -right-1" />
                  )}
                </div>
              </div>
              <Progress value={policyMetrics.coverage} className="mt-4" />
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Role Assignment</p>
                  <p className="text-3xl font-bold text-foreground">{policyMetrics.roleAssignment}%</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {roles.filter(r => r.status === "assigned").length} of {roles.length} roles filled
                  </p>
                </div>
                <div className="relative">
                  <Users className="w-12 h-12 text-nist-govern" />
                  {roles.filter(r => r.status === "vacant").length > 0 && (
                    <AlertTriangle className="w-4 h-4 text-warning absolute -top-1 -right-1" />
                  )}
                </div>
              </div>
              <Progress value={policyMetrics.roleAssignment} className="mt-4" />
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Governance Score</p>
                  <p className="text-3xl font-bold text-foreground">{policyMetrics.governanceScore}%</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Overall governance maturity
                  </p>
                </div>
                <div className="relative">
                  <Shield className="w-12 h-12 text-nist-govern" />
                  <BarChart3 className="w-4 h-4 text-primary absolute -bottom-1 -right-1" />
                </div>
              </div>
              <Progress value={policyMetrics.governanceScore} className="mt-4" />
            </CardContent>
          </Card>
        </div>

        {/* NIST Governance Framework Alignment */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              NIST CSF 2.0 Governance Framework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="GV.OC" className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                {Object.entries(nistCategories).map(([key, category]) => (
                  <TabsTrigger key={key} value={key} className="text-xs">
                    {key}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(nistCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-6 h-6 text-nist-govern" />
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    
                    <div className="grid gap-4">
                      {category.items.map((item, index) => (
                        <Card key={index} className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3">
                                <div className={`w-3 h-3 rounded-full ${
                                  item.status === "complete" ? "bg-success" :
                                  item.status === "in-progress" ? "bg-warning" : "bg-destructive"
                                }`} />
                                <p className="font-medium">{item.name}</p>
                                <Badge variant={
                                  item.status === "complete" ? "default" :
                                  item.status === "in-progress" ? "secondary" : "outline"
                                }>
                                  {item.status}
                                </Badge>
                              </div>
                              <div className="mt-2 ml-6">
                                <Progress value={item.progress} className="h-2" />
                                <p className="text-xs text-muted-foreground mt-1">{item.progress}% complete</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Settings className="w-4 h-4" />
                            </Button>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Policies and Roles Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Security Policies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Security Policies
                </div>
                <Badge variant="outline">{policies.length} total</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {policies.map((policy) => (
                <Card key={policy.id} className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        policy.status === "approved" ? "bg-success" :
                        policy.status === "draft" ? "bg-warning" : "bg-destructive"
                      }`} />
                      <div>
                        <p className="font-medium text-foreground">{policy.name}</p>
                        <p className="text-sm text-muted-foreground">{policy.description}</p>
                        <p className="text-xs text-muted-foreground">
                          Next review: {policy.nextReview}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={
                        policy.status === "approved" ? "default" :
                        policy.status === "draft" ? "secondary" : "destructive"
                      }>
                        {policy.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </CardContent>
          </Card>

          {/* Roles & Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Roles & Responsibilities
                </div>
                <Badge variant="outline">{roles.filter(r => r.status === "vacant").length} vacant</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {roles.map((role) => (
                <Card key={role.id} className="p-4 hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        role.status === "assigned" ? "bg-success" : "bg-destructive"
                      }`} />
                      <div>
                        <p className="font-medium text-foreground">{role.name}</p>
                        <p className="text-sm text-muted-foreground">{role.responsibilities}</p>
                        <p className="text-xs text-muted-foreground">
                          {role.status === "assigned" ? `Assigned to: ${role.assignee}` : "Vacant - needs assignment"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={role.status === "assigned" ? "default" : "destructive"}>
                        {role.status}
                      </Badge>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          setSelectedRole(role);
                          setShowAssignRoleDialog(true);
                        }}
                      >
                        <UserCheck className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Role Assignment Dialog */}
        <Dialog open={showAssignRoleDialog} onOpenChange={setShowAssignRoleDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Assign Role: {selectedRole?.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="assignee-name">Assignee Name</Label>
                <Input id="assignee-name" placeholder="Enter assignee name" />
              </div>
              <div>
                <Label htmlFor="assignee-email">Email</Label>
                <Input id="assignee-email" type="email" placeholder="Enter email address" />
              </div>
              <div>
                <Label htmlFor="start-date">Start Date</Label>
                <Input id="start-date" type="date" />
              </div>
              <Button onClick={handleAssignRole} className="w-full">Assign Role</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Govern;
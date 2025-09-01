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
  Link, ShoppingCart, BarChart3, Settings, AlertTriangle, Upload
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
  const [showPolicyDetailsDialog, setShowPolicyDetailsDialog] = useState(false);
  const [showNistConfigDialog, setShowNistConfigDialog] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [selectedNistCategory, setSelectedNistCategory] = useState(null);
  const [selectedNistItem, setSelectedNistItem] = useState(null);
  const [showEvidenceDialog, setShowEvidenceDialog] = useState(false);
  const [showAssignItemDialog, setShowAssignItemDialog] = useState(false);
  const [newPolicyForm, setNewPolicyForm] = useState({
    name: "",
    description: "",
    status: "draft"
  });
  const [roleAssignmentForm, setRoleAssignmentForm] = useState({
    assigneeName: "",
    assigneeEmail: "",
    startDate: ""
  });
  const [itemAssignmentForm, setItemAssignmentForm] = useState({
    assigneeName: "",
    assigneeEmail: "",
    notes: ""
  });
  const [evidenceForm, setEvidenceForm] = useState({
    fileName: "",
    description: "",
    uploadDate: "",
    uploadedFile: null
  });

  // Calculate metrics
  const policyMetrics = {
    coverage: Math.round((policies.filter(p => p.status === "approved").length / policies.length) * 100),
    roleAssignment: Math.round((roles.filter(r => r.status === "assigned").length / roles.length) * 100),
    governanceScore: Math.round(((policies.filter(p => p.status === "approved").length / policies.length) * 0.4 + 
                                 (roles.filter(r => r.status === "assigned").length / roles.length) * 0.3 + 
                                 0.3) * 100)
  };

  // NIST GV Categories data
  const [nistCategories, setNistCategories] = useState({
    "GV.OC": {
      title: "Organizational Context",
      icon: Building,
      items: [
        { id: 1, name: "Mission & Business Context", status: "complete", progress: 90, assignee: "John Smith", evidence: [] },
        { id: 2, name: "Stakeholder Expectations", status: "in-progress", progress: 75, assignee: "", evidence: [] },
        { id: 3, name: "Legal & Regulatory Requirements", status: "complete", progress: 95, assignee: "Sarah Johnson", evidence: ["Legal_Framework_2024.pdf"] },
        { id: 4, name: "Critical Technology Dependencies", status: "in-progress", progress: 60, assignee: "", evidence: [] }
      ]
    },
    "GV.RM": {
      title: "Risk Management Strategy", 
      icon: TrendingUp,
      items: [
        { id: 5, name: "Risk Management Objectives", status: "complete", progress: 85, assignee: "Emily Chen", evidence: [] },
        { id: 6, name: "Risk Appetite & Tolerance", status: "complete", progress: 80, assignee: "Emily Chen", evidence: [] },
        { id: 7, name: "Enterprise Risk Management Integration", status: "in-progress", progress: 70, assignee: "", evidence: [] },
        { id: 8, name: "Risk Communication Strategy", status: "draft", progress: 45, assignee: "", evidence: [] }
      ]
    },
    "GV.RR": {
      title: "Roles, Responsibilities & Authorities",
      icon: UserCheck,
      items: [
        { id: 9, name: "Leadership Accountability", status: "complete", progress: 90, assignee: "John Smith", evidence: [] },
        { id: 10, name: "Cybersecurity Roles Definition", status: "complete", progress: 85, assignee: "John Smith", evidence: [] },
        { id: 11, name: "Resource Allocation", status: "in-progress", progress: 65, assignee: "", evidence: [] },
        { id: 12, name: "HR Integration", status: "draft", progress: 40, assignee: "", evidence: [] }
      ]
    },
    "GV.PO": {
      title: "Policy",
      icon: BookOpen,
      items: [
        { id: 13, name: "Cybersecurity Risk Management Policies", status: "complete", progress: 85, assignee: "Sarah Johnson", evidence: [] },
        { id: 14, name: "Policy Updates & Maintenance", status: "in-progress", progress: 70, assignee: "", evidence: [] },
        { id: 15, name: "Policy Communication", status: "complete", progress: 80, assignee: "Mike Davis", evidence: [] },
        { id: 16, name: "Policy Enforcement", status: "in-progress", progress: 75, assignee: "", evidence: [] }
      ]
    },
    "GV.OV": {
      title: "Oversight",
      icon: Eye,
      items: [
        { id: 17, name: "Risk Management Outcome Monitoring", status: "in-progress", progress: 70, assignee: "", evidence: [] },
        { id: 18, name: "Strategy & Program Reviews", status: "complete", progress: 85, assignee: "John Smith", evidence: [] },
        { id: 19, name: "Continuous Improvement", status: "in-progress", progress: 60, assignee: "", evidence: [] },
        { id: 20, name: "Performance Metrics", status: "draft", progress: 50, assignee: "", evidence: [] }
      ]
    },
    "GV.SC": {
      title: "Supply Chain Risk Management",
      icon: ShoppingCart,
      items: [
        { id: 21, name: "Supplier Risk Assessment", status: "in-progress", progress: 65, assignee: "", evidence: [] },
        { id: 22, name: "Contract Requirements", status: "complete", progress: 80, assignee: "Sarah Johnson", evidence: [] },
        { id: 23, name: "Due Diligence Processes", status: "in-progress", progress: 55, assignee: "", evidence: [] },
        { id: 24, name: "Supply Chain Monitoring", status: "draft", progress: 35, assignee: "", evidence: [] }
      ]
    }
  });

  const handleNewPolicy = () => {
    if (newPolicyForm.name && newPolicyForm.description) {
      const newPolicy = {
        id: policies.length + 1,
        name: newPolicyForm.name,
        description: newPolicyForm.description,
        status: newPolicyForm.status,
        lastReview: new Date().toISOString().split('T')[0],
        nextReview: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 6 months from now
      };
      
      setPolicies([...policies, newPolicy]);
      setNewPolicyForm({ name: "", description: "", status: "draft" });
      setShowNewPolicyDialog(false);
      
      toast({
        title: "Policy Created",
        description: `${newPolicy.name} has been created successfully`,
      });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
    }
  };

  const handleAssignRole = () => {
    if (selectedRole && roleAssignmentForm.assigneeName && roleAssignmentForm.assigneeEmail) {
      setRoles(roles.map(role => 
        role.id === selectedRole.id 
          ? { 
              ...role, 
              assignee: roleAssignmentForm.assigneeName, 
              status: "assigned" 
            }
          : role
      ));
      
      setRoleAssignmentForm({ assigneeName: "", assigneeEmail: "", startDate: "" });
      setShowAssignRoleDialog(false);
      setSelectedRole(null);
      
      toast({
        title: "Role Assigned",
        description: `${selectedRole.name} has been assigned to ${roleAssignmentForm.assigneeName}`,
      });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
    }
  };

  const generateGovernanceReport = () => {
    // Simulate report generation
    const reportData = {
      timestamp: new Date().toLocaleString(),
      policyMetrics,
      policies: policies.length,
      roles: roles.length,
      assignedRoles: roles.filter(r => r.status === "assigned").length,
      nistCompliance: Object.keys(nistCategories).length
    };
    
    // Create downloadable content
    const reportContent = `
NIST CSF 2.0 Governance Report
Generated: ${reportData.timestamp}

=== EXECUTIVE SUMMARY ===
Policy Coverage: ${reportData.policyMetrics.coverage}%
Role Assignment: ${reportData.policyMetrics.roleAssignment}%
Governance Score: ${reportData.policyMetrics.governanceScore}%

=== POLICY STATUS ===
Total Policies: ${reportData.policies}
Approved: ${policies.filter(p => p.status === "approved").length}
Draft: ${policies.filter(p => p.status === "draft").length}
Under Review: ${policies.filter(p => p.status === "review").length}

=== ROLE ASSIGNMENTS ===
Total Roles: ${reportData.roles}
Assigned: ${reportData.assignedRoles}
Vacant: ${reportData.roles - reportData.assignedRoles}

=== NIST CSF 2.0 GOVERNANCE CATEGORIES ===
${Object.entries(nistCategories).map(([key, cat]) => 
  `${key}: ${cat.title}\n${cat.items.map(item => `  - ${item.name}: ${item.progress}%`).join('\n')}`
).join('\n\n')}
    `;
    
    // Create and download file
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NIST-CSF-Governance-Report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Report Generated",
      description: "Governance report has been downloaded successfully",
    });
  };

  const handleViewPolicy = (policy) => {
    setSelectedPolicy(policy);
    setShowPolicyDetailsDialog(true);
  };

  const handleNistConfig = (categoryKey, category) => {
    setSelectedNistCategory({ key: categoryKey, ...category });
    setShowNistConfigDialog(true);
  };

  const handleUpdatePolicyStatus = (policyId, newStatus) => {
    setPolicies(policies.map(p => 
      p.id === policyId ? { ...p, status: newStatus } : p
    ));
    toast({
      title: "Policy Updated",
      description: `Policy status updated to ${newStatus}`,
    });
  };

  const handleUpdateNistItemStatus = (categoryKey, itemId, newStatus) => {
    const progressMap = {
      "draft": 25,
      "in-progress": 65,
      "complete": 100
    };

    setNistCategories(prev => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        items: prev[categoryKey].items.map(item =>
          item.id === itemId 
            ? { ...item, status: newStatus, progress: progressMap[newStatus] }
            : item
        )
      }
    }));

    toast({
      title: "Status Updated",
      description: `Item status updated to ${newStatus}`,
    });
  };

  const handleAssignNistItem = () => {
    if (selectedNistItem && itemAssignmentForm.assigneeName) {
      const categoryKey = selectedNistCategory.key;
      setNistCategories(prev => ({
        ...prev,
        [categoryKey]: {
          ...prev[categoryKey],
          items: prev[categoryKey].items.map(item =>
            item.id === selectedNistItem.id 
              ? { ...item, assignee: itemAssignmentForm.assigneeName }
              : item
          )
        }
      }));

      setItemAssignmentForm({ assigneeName: "", assigneeEmail: "", notes: "" });
      setShowAssignItemDialog(false);
      setSelectedNistItem(null);
      
      toast({
        title: "Assignment Complete",
        description: `${selectedNistItem.name} assigned to ${itemAssignmentForm.assigneeName}`,
      });
    }
  };

  const handleAddEvidence = () => {
    if (selectedNistItem && evidenceForm.fileName) {
      const categoryKey = selectedNistCategory.key;
      const newEvidence = {
        id: Date.now(),
        fileName: evidenceForm.fileName,
        description: evidenceForm.description,
        uploadDate: evidenceForm.uploadDate || new Date().toISOString().split('T')[0]
      };

      setNistCategories(prev => ({
        ...prev,
        [categoryKey]: {
          ...prev[categoryKey],
          items: prev[categoryKey].items.map(item =>
            item.id === selectedNistItem.id 
              ? { ...item, evidence: [...(item.evidence || []), newEvidence] }
              : item
          )
        }
      }));

      setEvidenceForm({ fileName: "", description: "", uploadDate: "", uploadedFile: null });
      setShowEvidenceDialog(false);
      
      toast({
        title: "Evidence Added",
        description: `Evidence "${evidenceForm.fileName}" added successfully`,
      });
    }
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
                    <Input 
                      id="policy-name" 
                      placeholder="Enter policy name"
                      value={newPolicyForm.name}
                      onChange={(e) => setNewPolicyForm({...newPolicyForm, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="policy-description">Description</Label>
                    <Textarea 
                      id="policy-description" 
                      placeholder="Policy description"
                      value={newPolicyForm.description}
                      onChange={(e) => setNewPolicyForm({...newPolicyForm, description: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="policy-status">Status</Label>
                    <Select value={newPolicyForm.status} onValueChange={(value) => setNewPolicyForm({...newPolicyForm, status: value})}>
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
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleNistConfig(key, category)}
                            >
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
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewPolicy(policy)}
                      >
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
                <Input 
                  id="assignee-name" 
                  placeholder="Enter assignee name"
                  value={roleAssignmentForm.assigneeName}
                  onChange={(e) => setRoleAssignmentForm({...roleAssignmentForm, assigneeName: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="assignee-email">Email</Label>
                <Input 
                  id="assignee-email" 
                  type="email" 
                  placeholder="Enter email address"
                  value={roleAssignmentForm.assigneeEmail}
                  onChange={(e) => setRoleAssignmentForm({...roleAssignmentForm, assigneeEmail: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="start-date">Start Date</Label>
                <Input 
                  id="start-date" 
                  type="date"
                  value={roleAssignmentForm.startDate}
                  onChange={(e) => setRoleAssignmentForm({...roleAssignmentForm, startDate: e.target.value})}
                />
              </div>
              <Button onClick={handleAssignRole} className="w-full">Assign Role</Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Policy Details Dialog */}
        <Dialog open={showPolicyDetailsDialog} onOpenChange={setShowPolicyDetailsDialog}>
          <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>Policy Details: {selectedPolicy?.name}</DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Status</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant={
                      selectedPolicy?.status === "approved" ? "default" :
                      selectedPolicy?.status === "draft" ? "secondary" : "destructive"
                    }>
                      {selectedPolicy?.status}
                    </Badge>
                    <Select 
                      value={selectedPolicy?.status} 
                      onValueChange={(value) => handleUpdatePolicyStatus(selectedPolicy?.id, value)}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="review">Under Review</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label>Last Review</Label>
                  <p className="mt-1 text-sm text-muted-foreground">{selectedPolicy?.lastReview}</p>
                </div>
              </div>
              
              <div>
                <Label>Description</Label>
                <p className="mt-1 text-sm text-muted-foreground">{selectedPolicy?.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Next Review Date</Label>
                  <p className="mt-1 text-sm text-muted-foreground">{selectedPolicy?.nextReview}</p>
                </div>
                <div>
                  <Label>Policy Version</Label>
                  <p className="mt-1 text-sm text-muted-foreground">v2.1</p>
                </div>
              </div>
              
            </div>
            
            <div className="flex space-x-2 pt-4 border-t bg-background">
              <Button variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Policy
              </Button>
              <Button variant="outline" className="flex-1">
                <FileText className="w-4 h-4 mr-2" />
                Edit Policy
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* NIST Configuration Dialog */}
        <Dialog open={showNistConfigDialog} onOpenChange={setShowNistConfigDialog}>
          <DialogContent className="max-w-3xl max-h-[90vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>
                Configure {selectedNistCategory?.key}: {selectedNistCategory?.title}
              </DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              <div className="flex items-center space-x-3">
                {selectedNistCategory?.icon && (
                  <selectedNistCategory.icon className="w-8 h-8 text-nist-govern" />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{selectedNistCategory?.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage implementation status and progress for this NIST category
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                {selectedNistCategory?.items?.map((item, index) => (
                  <Card key={index} className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            item.status === "complete" ? "bg-success" :
                            item.status === "in-progress" ? "bg-warning" : "bg-destructive"
                          }`} />
                          <h4 className="font-medium">{item.name}</h4>
                        </div>
                        <Select 
                          value={item.status} 
                          onValueChange={(value) => handleUpdateNistItemStatus(selectedNistCategory.key, item.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="complete">Complete</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2 mt-1" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setSelectedNistItem(item);
                              setShowEvidenceDialog(true);
                            }}
                          >
                            <FileText className="w-3 h-3 mr-1" />
                            Evidence ({item.evidence?.length || 0})
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => {
                              setSelectedNistItem(item);
                              setShowAssignItemDialog(true);
                            }}
                          >
                            <Users className="w-3 h-3 mr-1" />
                            {item.assignee ? `Assigned: ${item.assignee}` : "Assign"}
                          </Button>
                        </div>
                        {item.assignee && (
                          <Badge variant="outline" className="text-xs">
                            {item.assignee}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 pt-4 border-t bg-background">
              <Button variant="outline" onClick={() => setShowNistConfigDialog(false)}>
                Cancel
              </Button>
              <Button onClick={() => {
                toast({
                  title: "Configuration Saved",
                  description: `${selectedNistCategory?.title} configuration has been updated`,
                });
                setShowNistConfigDialog(false);
              }}>
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Evidence Management Dialog */}
        <Dialog open={showEvidenceDialog} onOpenChange={setShowEvidenceDialog}>
          <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>Manage Evidence: {selectedNistItem?.name}</DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto space-y-6 pr-2">
              {/* Existing Evidence */}
              {selectedNistItem?.evidence?.length > 0 && (
                <div>
                  <Label className="text-base font-medium">Existing Evidence</Label>
                  <div className="space-y-2 mt-2">
                    {selectedNistItem.evidence.map((evidence, index) => (
                      <Card key={index} className="p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">{evidence.fileName || evidence}</p>
                            {evidence.description && (
                              <p className="text-xs text-muted-foreground">{evidence.description}</p>
                            )}
                            {evidence.uploadDate && (
                              <p className="text-xs text-muted-foreground">Uploaded: {evidence.uploadDate}</p>
                            )}
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Add New Evidence */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Add New Evidence</Label>
                
                {/* File Upload Section */}
                <div className="space-y-4 p-4 border-2 border-dashed border-muted-foreground/25 rounded-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <Upload className="w-5 h-5 text-muted-foreground" />
                    <Label className="text-sm font-medium">Upload Document</Label>
                  </div>
                  
                  <div>
                    <Input 
                      type="file" 
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.xlsx,.xls"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setEvidenceForm({
                            ...evidenceForm, 
                            uploadedFile: file,
                            fileName: file.name
                          });
                        }
                      }}
                      className="cursor-pointer"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG, XLSX, XLS (max 10MB)
                    </p>
                  </div>
                  
                  {evidenceForm.uploadedFile && (
                    <div className="flex items-center space-x-2 p-2 bg-muted rounded">
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{evidenceForm.uploadedFile.name}</span>
                      <span className="text-xs text-muted-foreground">
                        ({(evidenceForm.uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          setEvidenceForm({...evidenceForm, uploadedFile: null, fileName: ""});
                        }}
                      >
                        ×
                      </Button>
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="evidence-name">File Name (Optional Override)</Label>
                  <Input 
                    id="evidence-name" 
                    placeholder="Enter custom file name"
                    value={evidenceForm.fileName}
                    onChange={(e) => setEvidenceForm({...evidenceForm, fileName: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="evidence-description">Description</Label>
                  <Textarea 
                    id="evidence-description" 
                    placeholder="Describe this evidence"
                    value={evidenceForm.description}
                    onChange={(e) => setEvidenceForm({...evidenceForm, description: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="evidence-date">Upload Date</Label>
                  <Input 
                    id="evidence-date" 
                    type="date"
                    value={evidenceForm.uploadDate}
                    onChange={(e) => setEvidenceForm({...evidenceForm, uploadDate: e.target.value})}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4 border-t bg-background">
              <Button variant="outline" onClick={() => setShowEvidenceDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddEvidence}>
                Add Evidence
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Assignment Dialog */}
        <Dialog open={showAssignItemDialog} onOpenChange={setShowAssignItemDialog}>
          <DialogContent className="max-h-[90vh] flex flex-col">
            <DialogHeader>
              <DialogTitle>Assign Responsibility: {selectedNistItem?.name}</DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {selectedNistItem?.assignee && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm">
                    <strong>Currently assigned to:</strong> {selectedNistItem.assignee}
                  </p>
                </div>
              )}
              
              <div>
                <Label htmlFor="item-assignee-name">Assignee Name</Label>
                <Input 
                  id="item-assignee-name" 
                  placeholder="Enter assignee name"
                  value={itemAssignmentForm.assigneeName}
                  onChange={(e) => setItemAssignmentForm({...itemAssignmentForm, assigneeName: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="item-assignee-email">Email</Label>
                <Input 
                  id="item-assignee-email" 
                  type="email"
                  placeholder="Enter email address"
                  value={itemAssignmentForm.assigneeEmail}
                  onChange={(e) => setItemAssignmentForm({...itemAssignmentForm, assigneeEmail: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="assignment-notes">Notes</Label>
                <Textarea 
                  id="assignment-notes" 
                  placeholder="Additional notes or instructions"
                  value={itemAssignmentForm.notes}
                  onChange={(e) => setItemAssignmentForm({...itemAssignmentForm, notes: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 pt-4 border-t bg-background">
              <Button variant="outline" onClick={() => setShowAssignItemDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleAssignNistItem}>
                Assign Responsibility
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default Govern;
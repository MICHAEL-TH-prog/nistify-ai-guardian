import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { 
  Search, Server, Users, AlertTriangle, CheckCircle, Plus, Database, 
  Shield, TrendingUp, Building, Settings, ChevronDown, Activity,
  HardDrive, Wifi, FileText, Truck, Target, LifeBuoy, Eye, 
  Zap, MessageSquare, UserCheck, Archive, TestTube
} from "lucide-react";

const Identify = () => {
  const { toast } = useToast();
  const [addAssetOpen, setAddAssetOpen] = useState(false);
  const [logVulnOpen, setLogVulnOpen] = useState(false);
  const [assessSupplierOpen, setAssessSupplierOpen] = useState(false);
  const [recordImprovementOpen, setRecordImprovementOpen] = useState(false);
  const [viewActivityOpen, setViewActivityOpen] = useState(false);

  // Form states
  const [assetForm, setAssetForm] = useState({
    name: "",
    type: "",
    criticality: "",
    location: "",
    owner: "",
    description: ""
  });

  const [vulnForm, setVulnForm] = useState({
    title: "",
    severity: "",
    asset: "",
    description: "",
    cve: "",
    discoveryMethod: ""
  });

  const [supplierForm, setSupplierForm] = useState({
    name: "",
    service: "",
    criticality: "",
    contact: "",
    contractEnd: "",
    riskLevel: ""
  });

  const [improvementForm, setImprovementForm] = useState({
    title: "",
    source: "",
    priority: "",
    description: "",
    category: "",
    estimatedEffort: ""
  });

  // Handle form submissions
  const handleAddAsset = () => {
    if (!assetForm.name || !assetForm.type || !assetForm.criticality) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Asset Added",
      description: `${assetForm.name} has been successfully added to the asset inventory.`,
    });

    // Reset form and close dialog
    setAssetForm({ name: "", type: "", criticality: "", location: "", owner: "", description: "" });
    setAddAssetOpen(false);
  };

  const handleLogVuln = () => {
    if (!vulnForm.title || !vulnForm.severity || !vulnForm.asset) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Vulnerability Logged",
      description: `${vulnForm.title} has been logged and assigned for assessment.`,
    });

    setVulnForm({ title: "", severity: "", asset: "", description: "", cve: "", discoveryMethod: "" });
    setLogVulnOpen(false);
  };

  const handleAssessSupplier = () => {
    if (!supplierForm.name || !supplierForm.service || !supplierForm.criticality) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Supplier Assessment Initiated",
      description: `Assessment for ${supplierForm.name} has been scheduled and assigned.`,
    });

    setSupplierForm({ name: "", service: "", criticality: "", contact: "", contractEnd: "", riskLevel: "" });
    setAssessSupplierOpen(false);
  };

  const handleRecordImprovement = () => {
    if (!improvementForm.title || !improvementForm.source || !improvementForm.priority) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Improvement Opportunity Recorded",
      description: `${improvementForm.title} has been added to the improvement backlog.`,
    });

    setImprovementForm({ title: "", source: "", priority: "", description: "", category: "", estimatedEffort: "" });
    setRecordImprovementOpen(false);
  };

  const handleViewAllActivity = () => {
    toast({
      title: "Activity Dashboard",
      description: "Opening comprehensive activity and audit log viewer.",
    });
    setViewActivityOpen(false);
  };
  // NIST CSF 2.0 Identify Function Data
  const recentActivity = [
    { id: 1, action: "New hardware inventory added", time: "2 hours ago", icon: HardDrive, type: "asset" },
    { id: 2, action: "Vulnerability identified in Web Server", time: "4 hours ago", icon: AlertTriangle, type: "vulnerability" },
    { id: 3, action: "Supplier risk reassessment completed", time: "1 day ago", icon: Truck, type: "supplier" },
    { id: 4, action: "Data inventory updated", time: "2 days ago", icon: Database, type: "data" },
    { id: 5, action: "Network documentation reviewed", time: "3 days ago", icon: Wifi, type: "network" },
  ];

  const assetManagementItems = [
    {
      id: "ID.AM-01",
      title: "Hardware inventories maintained",
      description: "Hardware assets on the network are inventoried and maintained",
      guidance: [
        "Maintain detailed inventory of all physical hardware assets",
        "Include asset tags, locations, and ownership information",
        "Regular audits and updates to inventory records",
        "Integration with asset management systems"
      ],
      references: ["NIST SP 800-53 CM-8", "ISO 27001 A.8.1.1"],
      status: "complete",
      progress: 95
    },
    {
      id: "ID.AM-02",
      title: "Software, services, and systems inventories maintained",
      description: "Software, services, and systems on the network are inventoried and maintained",
      guidance: [
        "Catalog all software applications and versions",
        "Document cloud services and third-party systems",
        "Track software licenses and compliance",
        "Monitor unauthorized software installations"
      ],
      references: ["NIST SP 800-53 CM-8", "ISO 27001 A.8.1.1"],
      status: "in-progress",
      progress: 78
    },
    {
      id: "ID.AM-03",
      title: "Network communications and data flows documented",
      description: "Network communications and data flows are documented and maintained",
      guidance: [
        "Map all network segments and communication paths",
        "Document data flow diagrams and network topology",
        "Identify critical data pathways and dependencies",
        "Regular updates for network changes"
      ],
      references: ["NIST SP 800-53 AC-4", "ISO 27001 A.13.1.1"],
      status: "in-progress",
      progress: 62
    },
    {
      id: "ID.AM-04",
      title: "Supplier services inventories maintained",
      description: "Inventories of services provided by suppliers are maintained",
      guidance: [
        "Catalog all third-party service providers",
        "Document service dependencies and criticality",
        "Maintain supplier contact and contract information",
        "Regular review of supplier relationships"
      ],
      references: ["NIST SP 800-53 SA-9", "ISO 27001 A.15.1.1"],
      status: "needs-attention",
      progress: 45
    },
    {
      id: "ID.AM-05",
      title: "Assets prioritized by criticality and impact",
      description: "Assets are prioritized based on classification, criticality, and business impact",
      guidance: [
        "Establish asset classification framework",
        "Assess business impact of asset compromise",
        "Prioritize protection efforts based on criticality",
        "Regular review of asset priorities"
      ],
      references: ["NIST SP 800-53 RA-2", "ISO 27001 A.8.2.1"],
      status: "complete",
      progress: 88
    },
    {
      id: "ID.AM-07",
      title: "Data inventories maintained",
      description: "Data inventories are maintained to include data categories, locations, and sensitivity",
      guidance: [
        "Catalog all data types and categories",
        "Document data locations and storage systems",
        "Classify data by sensitivity and regulatory requirements",
        "Track data lifecycle and retention policies"
      ],
      references: ["NIST Privacy Framework", "GDPR Article 30"],
      status: "in-progress",
      progress: 72
    },
    {
      id: "ID.AM-08",
      title: "Assets managed through their life cycles",
      description: "Assets are managed throughout their life cycles from acquisition to disposal",
      guidance: [
        "Establish asset lifecycle management processes",
        "Plan for asset acquisition, deployment, and retirement",
        "Ensure secure disposal of assets",
        "Track asset lifecycle status and milestones"
      ],
      references: ["NIST SP 800-53 CM-8", "ISO 27001 A.8.1.4"],
      status: "in-progress",
      progress: 67
    }
  ];

  const riskAssessmentItems = [
    {
      id: "ID.RA-01",
      title: "Vulnerabilities identified and recorded",
      description: "Vulnerabilities in assets are identified, validated, and recorded",
      guidance: [
        "Regular vulnerability scanning and assessment",
        "Validate and prioritize identified vulnerabilities",
        "Maintain comprehensive vulnerability database",
        "Track remediation efforts and timelines"
      ],
      references: ["NIST SP 800-53 RA-5", "ISO 27001 A.12.6.1"],
      status: "complete",
      progress: 92
    },
    {
      id: "ID.RA-02",
      title: "Cyber threat intelligence received",
      description: "Cyber threat intelligence is received from various sources and analyzed",
      guidance: [
        "Subscribe to relevant threat intelligence feeds",
        "Analyze threats specific to organization and industry",
        "Share threat intelligence with stakeholders",
        "Integrate threat data into risk assessments"
      ],
      references: ["NIST SP 800-53 SI-5", "ISO 27001 A.16.1.3"],
      status: "in-progress",
      progress: 68
    },
    {
      id: "ID.RA-03",
      title: "Internal and external threats recorded",
      description: "Threats to the organization from internal and external sources are recorded",
      guidance: [
        "Identify and catalog internal threat sources",
        "Monitor external threat landscape",
        "Document threat actors and attack vectors",
        "Regular threat assessment updates"
      ],
      references: ["NIST SP 800-53 RA-3", "ISO 27001 A.12.2.1"],
      status: "in-progress",
      progress: 74
    },
    {
      id: "ID.RA-04",
      title: "Impact and likelihood assessed",
      description: "Potential impacts and likelihoods of threats are assessed",
      guidance: [
        "Establish impact assessment criteria",
        "Determine likelihood of threat scenarios",
        "Use quantitative and qualitative methods",
        "Document assessment methodologies"
      ],
      references: ["NIST SP 800-53 RA-2", "ISO 27001 A.12.3.1"],
      status: "complete",
      progress: 85
    },
    {
      id: "ID.RA-05",
      title: "Risks analyzed to inform prioritization",
      description: "Risks are analyzed to inform prioritization of response actions",
      guidance: [
        "Conduct comprehensive risk analysis",
        "Prioritize risks based on impact and likelihood",
        "Consider risk interdependencies",
        "Align risk priorities with business objectives"
      ],
      references: ["NIST SP 800-53 PM-16", "ISO 27001 A.12.3.1"],
      status: "complete",
      progress: 90
    },
    {
      id: "ID.RA-06",
      title: "Risk responses chosen and tracked",
      description: "Risk responses are chosen, tracked, and communicated",
      guidance: [
        "Select appropriate risk response strategies",
        "Track implementation of risk treatments",
        "Communicate risk decisions to stakeholders",
        "Monitor effectiveness of risk responses"
      ],
      references: ["NIST SP 800-53 PM-4", "ISO 27001 A.12.3.2"],
      status: "in-progress",
      progress: 76
    },
    {
      id: "ID.RA-07",
      title: "Changes and exceptions managed",
      description: "Changes and exceptions related to risk management are managed",
      guidance: [
        "Establish change management processes",
        "Document approved exceptions and variances",
        "Review and approve risk management changes",
        "Track and monitor exception statuses"
      ],
      references: ["NIST SP 800-53 CM-3", "ISO 27001 A.12.1.2"],
      status: "needs-attention",
      progress: 42
    },
    {
      id: "ID.RA-08",
      title: "Vulnerability disclosure processes established",
      description: "Processes for receiving vulnerability disclosures are established",
      guidance: [
        "Create vulnerability disclosure policy",
        "Establish reporting channels and procedures",
        "Define response timelines and responsibilities",
        "Coordinate with external researchers and vendors"
      ],
      references: ["NIST SP 800-53 SI-5", "ISO 29147"],
      status: "in-progress",
      progress: 58
    },
    {
      id: "ID.RA-09",
      title: "Hardware and software authenticity verified",
      description: "The authenticity and integrity of hardware and software are verified",
      guidance: [
        "Implement supply chain verification processes",
        "Verify digital signatures and certificates",
        "Use trusted sources for hardware and software",
        "Regular integrity checks and validation"
      ],
      references: ["NIST SP 800-53 SI-7", "ISO 27001 A.14.1.3"],
      status: "in-progress",
      progress: 64
    },
    {
      id: "ID.RA-10",
      title: "Critical suppliers assessed",
      description: "Critical suppliers are assessed and monitored for cybersecurity risks",
      guidance: [
        "Identify and categorize critical suppliers",
        "Conduct cybersecurity assessments of suppliers",
        "Monitor supplier security posture",
        "Establish supplier security requirements"
      ],
      references: ["NIST SP 800-53 SA-9", "ISO 27001 A.15.2.1"],
      status: "needs-attention",
      progress: 38
    }
  ];

  const improvementItems = [
    {
      id: "ID.IM-01",
      title: "Improvements identified from evaluations",
      description: "Improvements to cybersecurity risk management are identified from evaluations",
      guidance: [
        "Conduct regular cybersecurity evaluations",
        "Identify gaps and improvement opportunities",
        "Document lessons learned and best practices",
        "Prioritize improvements based on risk impact"
      ],
      references: ["NIST SP 800-53 CA-2", "ISO 27001 A.18.2.1"],
      status: "in-progress",
      progress: 71
    },
    {
      id: "ID.IM-02",
      title: "Improvements identified from security tests",
      description: "Improvements are identified from security tests and exercises",
      guidance: [
        "Conduct regular security testing and exercises",
        "Analyze test results for improvement opportunities",
        "Document findings and recommendations",
        "Track implementation of identified improvements"
      ],
      references: ["NIST SP 800-53 CA-8", "ISO 27001 A.17.1.3"],
      status: "complete",
      progress: 88
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "complete": return "default";
      case "in-progress": return "secondary";
      case "needs-attention": return "destructive";
      default: return "outline";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete": return CheckCircle;
      case "in-progress": return Settings;
      case "needs-attention": return AlertTriangle;
      default: return Eye;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "asset": return HardDrive;
      case "vulnerability": return AlertTriangle;
      case "supplier": return Truck;
      case "data": return Database;
      case "network": return Wifi;
      default: return Activity;
    }
  };

  const overallProgress = {
    assetManagement: Math.round(assetManagementItems.reduce((acc, item) => acc + item.progress, 0) / assetManagementItems.length),
    riskAssessment: Math.round(riskAssessmentItems.reduce((acc, item) => acc + item.progress, 0) / riskAssessmentItems.length),
    improvement: Math.round(improvementItems.reduce((acc, item) => acc + item.progress, 0) / improvementItems.length)
  };

  const totalProgress = Math.round((overallProgress.assetManagement + overallProgress.riskAssessment + overallProgress.improvement) / 3);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-nist-identify" />
              <h1 className="text-3xl font-bold text-foreground">Identify (ID) – Understanding Organizational Cybersecurity Risks</h1>
            </div>
            <p className="text-muted-foreground max-w-4xl">
              The Identify Function ensures that an organization's assets, risks, and suppliers are understood. 
              This forms the foundation for effective cybersecurity risk management and informs decision-making across all other CSF Functions.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-nist-identify text-white px-3 py-1">NIST CSF 2.0</Badge>
            <Badge variant="outline" className="px-3 py-1">{totalProgress}% Complete</Badge>
          </div>
        </div>

        {/* Progress & Metrics Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Assets Inventoried</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                </div>
                <Database className="w-10 h-10 text-nist-identify" />
              </div>
              <Progress value={overallProgress.assetManagement} className="mt-4" />
              <p className="text-xs text-muted-foreground mt-2">{overallProgress.assetManagement}% Asset Management Complete</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Vulnerabilities Identified</p>
                  <p className="text-2xl font-bold text-foreground">23</p>
                </div>
                <AlertTriangle className="w-10 h-10 text-destructive" />
              </div>
              <Progress value={overallProgress.riskAssessment} className="mt-4" />
              <p className="text-xs text-muted-foreground mt-2">{overallProgress.riskAssessment}% Risk Assessment Complete</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Supplier Risks Assessed</p>
                  <p className="text-2xl font-bold text-foreground">84</p>
                </div>
                <Truck className="w-10 h-10 text-warning" />
              </div>
              <Progress value={68} className="mt-4" />
              <p className="text-xs text-muted-foreground mt-2">68% Suppliers Assessed</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Improvement Opportunities</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <TrendingUp className="w-10 h-10 text-success" />
              </div>
              <Progress value={overallProgress.improvement} className="mt-4" />
              <p className="text-xs text-muted-foreground mt-2">{overallProgress.improvement}% Improvements Tracked</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Tabbed Sections */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="asset-management" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="asset-management" className="text-xs">Asset Management</TabsTrigger>
                <TabsTrigger value="risk-assessment" className="text-xs">Risk Assessment</TabsTrigger>
                <TabsTrigger value="improvement" className="text-xs">Improvement</TabsTrigger>
              </TabsList>

              {/* Asset Management Tab */}
              <TabsContent value="asset-management">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <HardDrive className="w-5 h-5 mr-2 text-nist-identify" />
                      Asset Management (ID.AM)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {assetManagementItems.map((item) => {
                      const StatusIcon = getStatusIcon(item.status);
                      return (
                        <Collapsible key={item.id}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                            <div className="flex items-center space-x-3">
                              <StatusIcon className="w-5 h-5 text-muted-foreground" />
                              <div className="text-left">
                                <p className="font-medium text-foreground">{item.id}</p>
                                <p className="text-sm text-muted-foreground">{item.title}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant={getStatusColor(item.status)} className="text-xs">{item.status}</Badge>
                              <div className="text-xs text-muted-foreground">{item.progress}%</div>
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-4 border-l-2 border-secondary ml-4 mt-2">
                            <div className="space-y-4">
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                              <div>
                                <h4 className="text-sm font-medium text-foreground mb-2">Guidance & Considerations:</h4>
                                <ul className="space-y-1">
                                  {item.guidance.map((guide, idx) => (
                                    <li key={idx} className="text-xs text-muted-foreground flex items-start">
                                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                      {guide}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-foreground mb-2">References:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {item.references.map((ref, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">{ref}</Badge>
                                  ))}
                                </div>
                              </div>
                              <Progress value={item.progress} className="mt-4" />
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    })}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Risk Assessment Tab */}
              <TabsContent value="risk-assessment">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-nist-identify" />
                      Risk Assessment (ID.RA)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {riskAssessmentItems.map((item) => {
                      const StatusIcon = getStatusIcon(item.status);
                      return (
                        <Collapsible key={item.id}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                            <div className="flex items-center space-x-3">
                              <StatusIcon className="w-5 h-5 text-muted-foreground" />
                              <div className="text-left">
                                <p className="font-medium text-foreground">{item.id}</p>
                                <p className="text-sm text-muted-foreground">{item.title}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant={getStatusColor(item.status)} className="text-xs">{item.status}</Badge>
                              <div className="text-xs text-muted-foreground">{item.progress}%</div>
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-4 border-l-2 border-secondary ml-4 mt-2">
                            <div className="space-y-4">
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                              <div>
                                <h4 className="text-sm font-medium text-foreground mb-2">Guidance & Considerations:</h4>
                                <ul className="space-y-1">
                                  {item.guidance.map((guide, idx) => (
                                    <li key={idx} className="text-xs text-muted-foreground flex items-start">
                                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                      {guide}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-foreground mb-2">References:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {item.references.map((ref, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">{ref}</Badge>
                                  ))}
                                </div>
                              </div>
                              <Progress value={item.progress} className="mt-4" />
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    })}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Improvement Management Tab */}
              <TabsContent value="improvement">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2 text-nist-identify" />
                      Improvement Management (ID.IM)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {improvementItems.map((item) => {
                      const StatusIcon = getStatusIcon(item.status);
                      return (
                        <Collapsible key={item.id}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors">
                            <div className="flex items-center space-x-3">
                              <StatusIcon className="w-5 h-5 text-muted-foreground" />
                              <div className="text-left">
                                <p className="font-medium text-foreground">{item.id}</p>
                                <p className="text-sm text-muted-foreground">{item.title}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant={getStatusColor(item.status)} className="text-xs">{item.status}</Badge>
                              <div className="text-xs text-muted-foreground">{item.progress}%</div>
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="p-4 border-l-2 border-secondary ml-4 mt-2">
                            <div className="space-y-4">
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                              <div>
                                <h4 className="text-sm font-medium text-foreground mb-2">Guidance & Considerations:</h4>
                                <ul className="space-y-1">
                                  {item.guidance.map((guide, idx) => (
                                    <li key={idx} className="text-xs text-muted-foreground flex items-start">
                                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                      {guide}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-foreground mb-2">References:</h4>
                                <div className="flex flex-wrap gap-1">
                                  {item.references.map((ref, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">{ref}</Badge>
                                  ))}
                                </div>
                              </div>
                              <Progress value={item.progress} className="mt-4" />
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      );
                    })}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar - Recent Activity & Actions */}
          <div className="space-y-6">
            {/* Call-to-Action Buttons */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Add Asset Dialog */}
                <Dialog open={addAssetOpen} onOpenChange={setAddAssetOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full justify-start" variant="outline">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Asset
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle>Add New Asset</DialogTitle>
                      <DialogDescription>
                        Add a new asset to your organization's inventory for tracking and risk assessment.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex-1 overflow-y-auto space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="asset-name">Asset Name *</Label>
                          <Input
                            id="asset-name"
                            value={assetForm.name}
                            onChange={(e) => setAssetForm({...assetForm, name: e.target.value})}
                            placeholder="Enter asset name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="asset-type">Asset Type *</Label>
                          <Select value={assetForm.type} onValueChange={(value) => setAssetForm({...assetForm, type: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hardware">Hardware</SelectItem>
                              <SelectItem value="software">Software</SelectItem>
                              <SelectItem value="system">System</SelectItem>
                              <SelectItem value="service">Service</SelectItem>
                              <SelectItem value="data">Data</SelectItem>
                              <SelectItem value="network">Network</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="asset-criticality">Criticality *</Label>
                          <Select value={assetForm.criticality} onValueChange={(value) => setAssetForm({...assetForm, criticality: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select criticality" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="critical">Critical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="asset-location">Location</Label>
                          <Input
                            id="asset-location"
                            value={assetForm.location}
                            onChange={(e) => setAssetForm({...assetForm, location: e.target.value})}
                            placeholder="Physical/logical location"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="asset-owner">Asset Owner</Label>
                        <Input
                          id="asset-owner"
                          value={assetForm.owner}
                          onChange={(e) => setAssetForm({...assetForm, owner: e.target.value})}
                          placeholder="Responsible person/team"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="asset-description">Description</Label>
                        <Textarea
                          id="asset-description"
                          value={assetForm.description}
                          onChange={(e) => setAssetForm({...assetForm, description: e.target.value})}
                          placeholder="Detailed description of the asset..."
                          className="min-h-[80px]"
                        />
                      </div>
                    </div>
                    <DialogFooter className="bg-background border-t pt-4">
                      <Button variant="outline" onClick={() => setAddAssetOpen(false)}>Cancel</Button>
                      <Button onClick={handleAddAsset}>Add Asset</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Log Vulnerability Dialog */}
                <Dialog open={logVulnOpen} onOpenChange={setLogVulnOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full justify-start" variant="outline">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Log Vulnerability
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle>Log New Vulnerability</DialogTitle>
                      <DialogDescription>
                        Record a newly identified vulnerability for assessment and remediation tracking.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex-1 overflow-y-auto space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vuln-title">Vulnerability Title *</Label>
                          <Input
                            id="vuln-title"
                            value={vulnForm.title}
                            onChange={(e) => setVulnForm({...vulnForm, title: e.target.value})}
                            placeholder="Brief vulnerability title"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vuln-severity">Severity *</Label>
                          <Select value={vulnForm.severity} onValueChange={(value) => setVulnForm({...vulnForm, severity: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select severity" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="critical">Critical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vuln-asset">Affected Asset *</Label>
                          <Input
                            id="vuln-asset"
                            value={vulnForm.asset}
                            onChange={(e) => setVulnForm({...vulnForm, asset: e.target.value})}
                            placeholder="Asset name or identifier"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vuln-cve">CVE ID</Label>
                          <Input
                            id="vuln-cve"
                            value={vulnForm.cve}
                            onChange={(e) => setVulnForm({...vulnForm, cve: e.target.value})}
                            placeholder="CVE-YYYY-NNNN"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vuln-discovery">Discovery Method</Label>
                        <Select value={vulnForm.discoveryMethod} onValueChange={(value) => setVulnForm({...vulnForm, discoveryMethod: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="How was this discovered?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="scan">Vulnerability Scan</SelectItem>
                            <SelectItem value="pentest">Penetration Test</SelectItem>
                            <SelectItem value="disclosure">Responsible Disclosure</SelectItem>
                            <SelectItem value="internal">Internal Discovery</SelectItem>
                            <SelectItem value="vendor">Vendor Advisory</SelectItem>
                            <SelectItem value="threat-intel">Threat Intelligence</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vuln-description">Description</Label>
                        <Textarea
                          id="vuln-description"
                          value={vulnForm.description}
                          onChange={(e) => setVulnForm({...vulnForm, description: e.target.value})}
                          placeholder="Detailed vulnerability description, impact, and potential exploits..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                    <DialogFooter className="bg-background border-t pt-4">
                      <Button variant="outline" onClick={() => setLogVulnOpen(false)}>Cancel</Button>
                      <Button onClick={handleLogVuln}>Log Vulnerability</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Assess Supplier Dialog */}
                <Dialog open={assessSupplierOpen} onOpenChange={setAssessSupplierOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full justify-start" variant="outline">
                      <Truck className="w-4 h-4 mr-2" />
                      Assess Supplier
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle>Initiate Supplier Assessment</DialogTitle>
                      <DialogDescription>
                        Schedule a cybersecurity risk assessment for a critical supplier or vendor.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex-1 overflow-y-auto space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="supplier-name">Supplier Name *</Label>
                          <Input
                            id="supplier-name"
                            value={supplierForm.name}
                            onChange={(e) => setSupplierForm({...supplierForm, name: e.target.value})}
                            placeholder="Supplier/vendor name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="supplier-service">Primary Service *</Label>
                          <Input
                            id="supplier-service"
                            value={supplierForm.service}
                            onChange={(e) => setSupplierForm({...supplierForm, service: e.target.value})}
                            placeholder="Main service provided"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="supplier-criticality">Business Criticality *</Label>
                          <Select value={supplierForm.criticality} onValueChange={(value) => setSupplierForm({...supplierForm, criticality: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select criticality" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="critical">Critical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="supplier-risk">Current Risk Level</Label>
                          <Select value={supplierForm.riskLevel} onValueChange={(value) => setSupplierForm({...supplierForm, riskLevel: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select risk level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low Risk</SelectItem>
                              <SelectItem value="medium">Medium Risk</SelectItem>
                              <SelectItem value="high">High Risk</SelectItem>
                              <SelectItem value="unknown">Unknown</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="supplier-contact">Primary Contact</Label>
                          <Input
                            id="supplier-contact"
                            value={supplierForm.contact}
                            onChange={(e) => setSupplierForm({...supplierForm, contact: e.target.value})}
                            placeholder="Contact email or name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="supplier-contract">Contract End Date</Label>
                          <Input
                            id="supplier-contract"
                            type="date"
                            value={supplierForm.contractEnd}
                            onChange={(e) => setSupplierForm({...supplierForm, contractEnd: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter className="bg-background border-t pt-4">
                      <Button variant="outline" onClick={() => setAssessSupplierOpen(false)}>Cancel</Button>
                      <Button onClick={handleAssessSupplier}>Schedule Assessment</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Record Improvement Dialog */}
                <Dialog open={recordImprovementOpen} onOpenChange={setRecordImprovementOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full justify-start" variant="outline">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Record Improvement
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle>Record Improvement Opportunity</DialogTitle>
                      <DialogDescription>
                        Document a new improvement opportunity identified from evaluations, tests, or assessments.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex-1 overflow-y-auto space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="improvement-title">Improvement Title *</Label>
                          <Input
                            id="improvement-title"
                            value={improvementForm.title}
                            onChange={(e) => setImprovementForm({...improvementForm, title: e.target.value})}
                            placeholder="Brief improvement title"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="improvement-source">Source *</Label>
                          <Select value={improvementForm.source} onValueChange={(value) => setImprovementForm({...improvementForm, source: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select source" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="audit">Security Audit</SelectItem>
                              <SelectItem value="assessment">Risk Assessment</SelectItem>
                              <SelectItem value="exercise">Security Exercise</SelectItem>
                              <SelectItem value="incident">Incident Response</SelectItem>
                              <SelectItem value="compliance">Compliance Review</SelectItem>
                              <SelectItem value="evaluation">Internal Evaluation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="improvement-priority">Priority *</Label>
                          <Select value={improvementForm.priority} onValueChange={(value) => setImprovementForm({...improvementForm, priority: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="critical">Critical</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="improvement-category">Category</Label>
                          <Select value={improvementForm.category} onValueChange={(value) => setImprovementForm({...improvementForm, category: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="process">Process Improvement</SelectItem>
                              <SelectItem value="technology">Technology Enhancement</SelectItem>
                              <SelectItem value="training">Training & Awareness</SelectItem>
                              <SelectItem value="governance">Governance & Policy</SelectItem>
                              <SelectItem value="compliance">Compliance</SelectItem>
                              <SelectItem value="incident-response">Incident Response</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="improvement-effort">Estimated Effort</Label>
                        <Select value={improvementForm.estimatedEffort} onValueChange={(value) => setImprovementForm({...improvementForm, estimatedEffort: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select effort estimate" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low (1-2 weeks)</SelectItem>
                            <SelectItem value="medium">Medium (1-2 months)</SelectItem>
                            <SelectItem value="high">High (3-6 months)</SelectItem>
                            <SelectItem value="major">Major (6+ months)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="improvement-description">Description</Label>
                        <Textarea
                          id="improvement-description"
                          value={improvementForm.description}
                          onChange={(e) => setImprovementForm({...improvementForm, description: e.target.value})}
                          placeholder="Detailed description of the improvement opportunity, expected benefits, and implementation approach..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>
                    <DialogFooter className="bg-background border-t pt-4">
                      <Button variant="outline" onClick={() => setRecordImprovementOpen(false)}>Cancel</Button>
                      <Button onClick={handleRecordImprovement}>Record Improvement</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Recent Activity Feed */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => {
                  const ActivityIcon = getActivityIcon(activity.type);
                  return (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className="bg-secondary/50 p-2 rounded-full">
                        <ActivityIcon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
                <Dialog open={viewActivityOpen} onOpenChange={setViewActivityOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full text-xs">
                      View All Activity
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
                    <DialogHeader>
                      <DialogTitle>Activity Dashboard</DialogTitle>
                      <DialogDescription>
                        Comprehensive view of all system activities, changes, and audit logs.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex-1 overflow-y-auto">
                      <Tabs defaultValue="recent" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="recent">Recent</TabsTrigger>
                          <TabsTrigger value="assets">Assets</TabsTrigger>
                          <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
                          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
                        </TabsList>
                        <TabsContent value="recent" className="space-y-4 mt-4">
                          {recentActivity.map((activity) => {
                            const ActivityIcon = getActivityIcon(activity.type);
                            return (
                              <div key={activity.id} className="flex items-start space-x-3 p-3 bg-secondary/30 rounded-lg">
                                <div className="bg-secondary p-2 rounded-full">
                                  <ActivityIcon className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm text-foreground">{activity.action}</p>
                                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                                </div>
                                <Badge variant="outline" className="text-xs capitalize">{activity.type}</Badge>
                              </div>
                            );
                          })}
                        </TabsContent>
                        <TabsContent value="assets" className="mt-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <HardDrive className="w-4 h-4 text-primary" />
                                <span className="text-sm">Database Server #1 added</span>
                              </div>
                              <span className="text-xs text-muted-foreground">1 hour ago</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Database className="w-4 h-4 text-primary" />
                                <span className="text-sm">Customer Database updated</span>
                              </div>
                              <span className="text-xs text-muted-foreground">3 hours ago</span>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="vulnerabilities" className="mt-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <AlertTriangle className="w-4 h-4 text-destructive" />
                                <span className="text-sm">CVE-2024-0001 identified</span>
                              </div>
                              <Badge variant="destructive" className="text-xs">High</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <CheckCircle className="w-4 h-4 text-success" />
                                <span className="text-sm">CVE-2023-9999 remediated</span>
                              </div>
                              <Badge variant="default" className="text-xs">Closed</Badge>
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="suppliers" className="mt-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <Truck className="w-4 h-4 text-warning" />
                                <span className="text-sm">CloudProvider Inc assessment completed</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">Passed</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <AlertTriangle className="w-4 h-4 text-destructive" />
                                <span className="text-sm">DataVendor LLC requires review</span>
                              </div>
                              <Badge variant="destructive" className="text-xs">Action Required</Badge>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                    <DialogFooter className="bg-background border-t pt-4">
                      <Button onClick={handleViewAllActivity}>Open Full Dashboard</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Identify;
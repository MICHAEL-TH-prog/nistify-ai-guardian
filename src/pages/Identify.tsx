import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Search, Server, Users, AlertTriangle, CheckCircle, Plus, Database, 
  Shield, TrendingUp, Building, Settings, ChevronDown, Activity,
  HardDrive, Wifi, FileText, Truck, Target, LifeBuoy, Eye, 
  Zap, MessageSquare, UserCheck, Archive, TestTube
} from "lucide-react";

const Identify = () => {
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
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Asset
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Log Vulnerability
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Truck className="w-4 h-4 mr-2" />
                  Assess Supplier
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Record Improvement
                </Button>
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
                <Button variant="ghost" className="w-full text-xs">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Identify;
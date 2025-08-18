import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  Users,
  FileText,
  Target,
  Activity
} from "lucide-react";

const frameworkModules = [
  { name: "Govern", score: 85, target: 90, color: "bg-nist-govern", status: "good" },
  { name: "Identify", score: 72, target: 85, color: "bg-nist-identify", status: "warning" },
  { name: "Protect", score: 68, target: 80, color: "bg-nist-protect", status: "warning" },
  { name: "Detect", score: 45, target: 75, color: "bg-nist-detect", status: "critical" },
  { name: "Respond", score: 60, target: 80, color: "bg-nist-respond", status: "warning" },
  { name: "Recover", score: 40, target: 70, color: "bg-nist-recover", status: "critical" },
];

const recentActivities = [
  {
    action: "Policy Updated",
    item: "Access Control Policy v2.1",
    timestamp: "2 hours ago",
    type: "success"
  },
  {
    action: "Risk Identified",
    item: "Unpatched server vulnerability",
    timestamp: "4 hours ago",
    type: "warning"
  },
  {
    action: "Training Completed",
    item: "15 users completed security awareness",
    timestamp: "1 day ago",
    type: "success"
  },
  {
    action: "Incident Resolved",
    item: "Suspicious login attempt blocked",
    timestamp: "2 days ago",
    type: "info"
  },
];

export const Dashboard = () => {
  const overallScore = Math.round(
    frameworkModules.reduce((sum, module) => sum + module.score, 0) / frameworkModules.length
  );

  // Get organization data from localStorage
  const getOrganizationData = () => {
    try {
      const stored = localStorage.getItem('organizationData');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  };

  const orgData = getOrganizationData();
  
  // Profile mappings
  const getProfileName = (profileId: string) => {
    const profiles = {
      tier1: "Tier 1: Partial",
      tier2: "Tier 2: Risk Informed", 
      tier3: "Tier 3: Repeatable",
      tier4: "Tier 4: Adaptive"
    };
    return profiles[profileId as keyof typeof profiles] || "Not Set";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">NIST CSF Dashboard</h1>
          <p className="text-muted-foreground">
            Cybersecurity Framework Management & Compliance Overview
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-sm px-3 py-1">
              <Activity className="w-4 h-4 mr-1" />
              Current: {orgData?.currentProfile ? getProfileName(orgData.currentProfile) : "Not Set"}
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Target className="w-4 h-4 mr-1" />
              Target: {orgData?.targetProfile ? getProfileName(orgData.targetProfile) : "Not Set"}
            </Badge>
          </div>
          <Button>
            <FileText className="w-4 h-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Overall Score</p>
                <p className="text-3xl font-bold">{overallScore}%</p>
                <p className="text-xs opacity-75 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12% from last month
                </p>
              </div>
              <Shield className="w-12 h-12 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Risks</p>
                <p className="text-2xl font-bold text-foreground">23</p>
                <p className="text-xs text-warning flex items-center mt-1">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  5 high priority
                </p>
              </div>
              <AlertTriangle className="w-10 h-10 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Policies</p>
                <p className="text-2xl font-bold text-foreground">47</p>
                <p className="text-xs text-success flex items-center mt-1">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  89% compliant
                </p>
              </div>
              <FileText className="w-10 h-10 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Team Members</p>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-xs text-success flex items-center mt-1">
                  <Users className="w-3 h-3 mr-1" />
                  92% trained
                </p>
              </div>
              <Users className="w-10 h-10 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Framework Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              NIST CSF Framework Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {frameworkModules.map((module) => (
              <div key={module.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${module.color}`} />
                    <span className="font-medium">{module.name}</span>
                    <Badge 
                      variant={
                        module.status === "good" ? "default" : 
                        module.status === "warning" ? "secondary" : "destructive"
                      }
                      className="text-xs"
                    >
                      {module.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {module.score}% / {module.target}%
                  </div>
                </div>
                <Progress value={module.score} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-secondary/50 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === "success" ? "bg-success" :
                  activity.type === "warning" ? "bg-warning" :
                  activity.type === "info" ? "bg-primary" : "bg-muted"
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.item}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
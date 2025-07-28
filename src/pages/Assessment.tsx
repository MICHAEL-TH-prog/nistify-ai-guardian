import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, TrendingUp, Award, BarChart3, CheckCircle, AlertTriangle } from "lucide-react";

const Assessment = () => {
  const maturityLevels = [
    { function: "Govern", current: 3, target: 4, score: 85 },
    { function: "Identify", current: 2, target: 3, score: 72 },
    { function: "Protect", current: 3, target: 4, score: 68 },
    { function: "Detect", current: 2, target: 3, score: 45 },
    { function: "Respond", current: 2, target: 3, score: 60 },
    { function: "Recover", current: 1, target: 3, score: 40 },
  ];

  const tierDescriptions = [
    { tier: 1, name: "Partial", description: "Ad hoc cybersecurity practices" },
    { tier: 2, name: "Risk Informed", description: "Regular risk assessments inform decisions" },
    { tier: 3, name: "Repeatable", description: "Formal policies and procedures" },
    { tier: 4, name: "Adaptive", description: "Advanced and adaptive cybersecurity" },
  ];

  const gapAnalysis = [
    {
      area: "Asset Management",
      currentState: "Basic inventory maintained",
      targetState: "Comprehensive automated inventory",
      gap: "Automation and real-time tracking",
      priority: "high"
    },
    {
      area: "Access Control",
      currentState: "Role-based access in place",
      targetState: "Zero-trust architecture",
      gap: "Multi-factor authentication deployment",
      priority: "medium"
    },
    {
      area: "Incident Response",
      currentState: "Basic response procedures",
      targetState: "Automated response workflows",
      gap: "Automation and integration",
      priority: "high"
    },
    {
      area: "Training Program",
      currentState: "Annual security awareness",
      targetState: "Continuous security education",
      gap: "Regular training and simulations",
      priority: "medium"
    }
  ];

  const improvements = [
    {
      period: "Q4 2023",
      govern: 78, identify: 65, protect: 62, detect: 38, respond: 52, recover: 35
    },
    {
      period: "Q1 2024",
      govern: 85, identify: 72, protect: 68, detect: 45, respond: 60, recover: 40
    }
  ];

  const overallScore = Math.round(
    maturityLevels.reduce((sum, level) => sum + level.score, 0) / maturityLevels.length
  );

  const currentTier = Math.min(...maturityLevels.map(l => l.current));
  const targetTier = Math.max(...maturityLevels.map(l => l.target));

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Assessment & Maturity</h1>
            <p className="text-muted-foreground">Cybersecurity maturity evaluation and gap analysis</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge className="bg-primary text-primary-foreground">
              <Award className="w-4 h-4 mr-1" />
              Tier {currentTier}: {tierDescriptions[currentTier - 1]?.name}
            </Badge>
            <Button>
              <Target className="w-4 h-4 mr-2" />
              Start Assessment
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90">Overall Maturity</p>
                  <p className="text-3xl font-bold">{overallScore}%</p>
                  <p className="text-xs opacity-75 flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +8% improvement
                  </p>
                </div>
                <Target className="w-12 h-12 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Tier</p>
                  <p className="text-2xl font-bold text-foreground">{currentTier}</p>
                  <p className="text-xs text-muted-foreground">
                    {tierDescriptions[currentTier - 1]?.name}
                  </p>
                </div>
                <Award className="w-10 h-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Target Tier</p>
                  <p className="text-2xl font-bold text-foreground">{targetTier}</p>
                  <p className="text-xs text-muted-foreground">
                    {tierDescriptions[targetTier - 1]?.name}
                  </p>
                </div>
                <Target className="w-10 h-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Critical Gaps</p>
                  <p className="text-2xl font-bold text-foreground">4</p>
                  <p className="text-xs text-destructive">Need attention</p>
                </div>
                <AlertTriangle className="w-10 h-10 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              NIST CSF Maturity Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {maturityLevels.map((level, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <h4 className="font-medium text-foreground min-w-[80px]">{level.function}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">Current:</span>
                        <Badge variant="secondary">Tier {level.current}</Badge>
                        <span className="text-sm text-muted-foreground">Target:</span>
                        <Badge variant="outline">Tier {level.target}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-semibold">{level.score}%</span>
                      {level.current >= level.target ? (
                        <CheckCircle className="w-4 h-4 text-success ml-2 inline" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-warning ml-2 inline" />
                      )}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Progress value={level.score} className="h-3" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Tier {level.current} ({level.score}%)</span>
                      <span>Target: Tier {level.target}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Gap Analysis & Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gapAnalysis.map((gap, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-foreground">{gap.area}</h4>
                    <Badge variant={gap.priority === "high" ? "destructive" : "secondary"}>
                      {gap.priority} priority
                    </Badge>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-muted-foreground font-medium">Current State:</p>
                      <p className="text-foreground">{gap.currentState}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">Target State:</p>
                      <p className="text-foreground">{gap.targetState}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">Key Gap:</p>
                      <p className="text-foreground">{gap.gap}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Maturity Trend Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-6 gap-4 text-sm font-medium text-muted-foreground">
                <div>Function</div>
                <div>Govern</div>
                <div>Identify</div>
                <div>Protect</div>
                <div>Detect</div>
                <div>Respond</div>
              </div>
              {improvements.map((period, index) => (
                <div key={index} className="grid grid-cols-6 gap-4 text-sm">
                  <div className="font-medium text-foreground">{period.period}</div>
                  <div className="flex items-center space-x-2">
                    <span>{period.govern}%</span>
                    {index > 0 && (
                      <TrendingUp className="w-3 h-3 text-success" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{period.identify}%</span>
                    {index > 0 && (
                      <TrendingUp className="w-3 h-3 text-success" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{period.protect}%</span>
                    {index > 0 && (
                      <TrendingUp className="w-3 h-3 text-success" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{period.detect}%</span>
                    {index > 0 && (
                      <TrendingUp className="w-3 h-3 text-success" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{period.respond}%</span>
                    {index > 0 && (
                      <TrendingUp className="w-3 h-3 text-success" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Assessment;
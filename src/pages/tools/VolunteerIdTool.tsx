import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Download, ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { VolunteerOutput } from "@/components/tools/DocumentOutput";

interface FormData {
  volunteerName: string;
  designation: string;
  ngoName: string;
  validFrom: string;
  validTo: string;
  bloodGroup: string;
  emergencyContact: string;
  emergencyContactName: string;
}

const VolunteerIdTool = () => {
  const [formData, setFormData] = useState<FormData>({
    volunteerName: "",
    designation: "Volunteer",
    ngoName: "",
    validFrom: new Date().toISOString().split("T")[0],
    validTo: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    bloodGroup: "",
    emergencyContact: "",
    emergencyContactName: "",
  });

  const [volunteerId] = useState(() => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return `VOL-${year}-${random}`;
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validFrom = new Date(formData.validFrom).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
  const validTo = new Date(formData.validTo).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });

  const copyToClipboard = () => {
    toast.info("Upgrade to Premium to copy ID card details!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <Link to="/tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to All Tools
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Volunteer ID Card Generator
              </h1>
              <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded">
                Premium
              </span>
            </div>
            <p className="text-muted-foreground">
              Generate structured ID card details ready for printing or card design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="form-section">
              <h2 className="font-semibold text-lg mb-6">Enter Volunteer Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="volunteerName">Volunteer Name *</Label>
                  <Input
                    id="volunteerName"
                    placeholder="Full name of volunteer"
                    value={formData.volunteerName}
                    onChange={(e) => handleChange("volunteerName", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="ngoName">NGO / Organization Name *</Label>
                  <Input
                    id="ngoName"
                    placeholder="Your organization name"
                    value={formData.ngoName}
                    onChange={(e) => handleChange("ngoName", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Role / Designation</Label>
                    <Select value={formData.designation} onValueChange={(value) => handleChange("designation", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Volunteer">Volunteer</SelectItem>
                        <SelectItem value="Senior Volunteer">Senior Volunteer</SelectItem>
                        <SelectItem value="Field Coordinator">Field Coordinator</SelectItem>
                        <SelectItem value="Program Assistant">Program Assistant</SelectItem>
                        <SelectItem value="Community Worker">Community Worker</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Blood Group</Label>
                    <Select value={formData.bloodGroup} onValueChange={(value) => handleChange("bloodGroup", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="validFrom">Valid From</Label>
                    <Input
                      id="validFrom"
                      type="date"
                      value={formData.validFrom}
                      onChange={(e) => handleChange("validFrom", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="validTo">Valid To</Label>
                    <Input
                      id="validTo"
                      type="date"
                      value={formData.validTo}
                      onChange={(e) => handleChange("validTo", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emergencyContactName">Emergency Contact Name</Label>
                    <Input
                      id="emergencyContactName"
                      placeholder="e.g., Spouse, Parent"
                      value={formData.emergencyContactName}
                      onChange={(e) => handleChange("emergencyContactName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact Number</Label>
                    <Input
                      id="emergencyContact"
                      placeholder="10-digit mobile"
                      value={formData.emergencyContact}
                      onChange={(e) => handleChange("emergencyContact", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">Preview</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="w-4 h-4" />
                    Copy
                  </Button>
                  <Button size="sm" className="gap-2">
                    <Lock className="w-4 h-4" />
                    Unlock - ₹29
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="blur-sm select-none pointer-events-none">
                  <VolunteerOutput
                    volunteerName={formData.volunteerName}
                    designation={formData.designation}
                    ngoName={formData.ngoName}
                    validFrom={validFrom}
                    validTo={validTo}
                    bloodGroup={formData.bloodGroup}
                    emergencyContact={formData.emergencyContact}
                    emergencyContactName={formData.emergencyContactName}
                    volunteerId={volunteerId}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card p-6 rounded-xl border border-border shadow-lg text-center max-w-xs">
                    <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Premium Tool</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Unlock this tool to copy, print, or download ID card details.
                    </p>
                    <Button size="sm" className="w-full">
                      Unlock for ₹29
                    </Button>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-3 text-center">
                ID: {volunteerId} • Premium feature
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerIdTool;

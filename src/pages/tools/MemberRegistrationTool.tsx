import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { MemberOutput } from "@/components/tools/DocumentOutput";

interface FormData {
  fullName: string;
  fatherHusbandName: string;
  dateOfBirth: string;
  mobileNumber: string;
  address: string;
  aadhaarNumber: string;
  membershipType: string;
}

const MemberRegistrationTool = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    fatherHusbandName: "",
    dateOfBirth: "",
    mobileNumber: "",
    address: "",
    aadhaarNumber: "",
    membershipType: "General Member",
  });

  const [memberId] = useState(() => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return `MEM-${year}-${random}`;
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const registrationDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const dobFormatted = formData.dateOfBirth 
    ? new Date(formData.dateOfBirth).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : undefined;

  const generatePlainText = () => {
    if (!formData.fullName || !formData.mobileNumber) {
      return "";
    }

    return `
MEMBERSHIP REGISTRATION ENTRY
=============================
Member ID: ${memberId}
Registration Date: ${registrationDate}

PERSONAL DETAILS:
Full Name: ${formData.fullName}
Father/Husband Name: ${formData.fatherHusbandName || "Not Provided"}
Date of Birth: ${dobFormatted || "Not Provided"}
Mobile Number: ${formData.mobileNumber}

ADDRESS:
${formData.address || "Not Provided"}

IDENTIFICATION & TYPE:
Aadhaar/ID Number: ${formData.aadhaarNumber || "Not Provided"}
Membership Type: ${formData.membershipType}
`.trim();
  };

  const copyToClipboard = () => {
    const text = generatePlainText();
    if (text) {
      navigator.clipboard.writeText(text);
      toast.success("Member entry copied to clipboard!");
    }
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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Member Registration Formatter
            </h1>
            <p className="text-muted-foreground">
              Generate clean, formal membership entry text for your NGO records.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="form-section">
              <h2 className="font-semibold text-lg mb-6">Enter Member Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="Member's complete name"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="fatherHusbandName">Father / Husband Name</Label>
                  <Input
                    id="fatherHusbandName"
                    placeholder="Father's or Husband's name"
                    value={formData.fatherHusbandName}
                    onChange={(e) => handleChange("fatherHusbandName", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobileNumber">Mobile Number *</Label>
                    <Input
                      id="mobileNumber"
                      placeholder="10-digit mobile number"
                      value={formData.mobileNumber}
                      onChange={(e) => handleChange("mobileNumber", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    placeholder="Complete residential address"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="aadhaarNumber">Aadhaar / ID Number</Label>
                    <Input
                      id="aadhaarNumber"
                      placeholder="12-digit Aadhaar number"
                      value={formData.aadhaarNumber}
                      onChange={(e) => handleChange("aadhaarNumber", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Membership Type</Label>
                    <Select value={formData.membershipType} onValueChange={(value) => handleChange("membershipType", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General Member">General Member</SelectItem>
                        <SelectItem value="Life Member">Life Member</SelectItem>
                        <SelectItem value="Patron Member">Patron Member</SelectItem>
                        <SelectItem value="Honorary Member">Honorary Member</SelectItem>
                        <SelectItem value="Executive Member">Executive Member</SelectItem>
                      </SelectContent>
                    </Select>
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
                  <Button size="sm" disabled>
                    <Download className="w-4 h-4" />
                    PDF (Premium)
                  </Button>
                </div>
              </div>
              
              <MemberOutput
                fullName={formData.fullName}
                fatherHusbandName={formData.fatherHusbandName}
                dateOfBirth={dobFormatted}
                mobileNumber={formData.mobileNumber}
                address={formData.address}
                aadhaarNumber={formData.aadhaarNumber}
                membershipType={formData.membershipType}
                memberId={memberId}
                registrationDate={registrationDate}
              />
              
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Member ID: {memberId} • Free preview available
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MemberRegistrationTool;

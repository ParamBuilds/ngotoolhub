import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface FormData {
  ngoName: string;
  registrationNumber: string;
  resolutionSubject: string;
  resolutionDate: string;
  resolutionDetails: string;
  proposedBy: string;
  secondedBy: string;
  authorityName: string;
  authorityDesignation: string;
}

const ResolutionTool = () => {
  const [formData, setFormData] = useState<FormData>({
    ngoName: "",
    registrationNumber: "",
    resolutionSubject: "",
    resolutionDate: new Date().toISOString().split("T")[0],
    resolutionDetails: "",
    proposedBy: "",
    secondedBy: "",
    authorityName: "",
    authorityDesignation: "President",
  });

  const [resolutionNumber] = useState(() => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 100).toString().padStart(2, "0");
    return `RES/${year}/${random}`;
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateOutput = () => {
    if (!formData.ngoName || !formData.resolutionSubject) {
      return "Please fill in the required fields to generate the resolution.";
    }

    const formattedDate = new Date(formData.resolutionDate).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    CERTIFIED RESOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Resolution Number: ${resolutionNumber}
Date: ${formattedDate}

${formData.ngoName.toUpperCase()}
${formData.registrationNumber ? `(Registration No: ${formData.registrationNumber})` : ""}

──────────────────────────────────────────────────────────
                    SUBJECT
──────────────────────────────────────────────────────────

${formData.resolutionSubject}

──────────────────────────────────────────────────────────
                    RESOLUTION
──────────────────────────────────────────────────────────

RESOLVED THAT:

${formData.resolutionDetails || "The resolution details to be recorded here as per the decisions taken in the meeting of the Governing Body / Executive Committee."}

──────────────────────────────────────────────────────────
                    VOTING RECORD
──────────────────────────────────────────────────────────

The above resolution was:

Proposed by : ${formData.proposedBy || "___________________"}
Seconded by : ${formData.secondedBy || "___________________"}

The resolution was passed UNANIMOUSLY by all members present
at the meeting held on ${formattedDate}.

──────────────────────────────────────────────────────────
                    CERTIFICATION
──────────────────────────────────────────────────────────

I hereby certify that the above is a true and correct copy
of the resolution passed at the duly convened meeting of
${formData.ngoName}.


_____________________________
${formData.authorityName || "(Name of Authorized Signatory)"}
${formData.authorityDesignation}

Date: ${formattedDate}
Place: ___________________

[SEAL OF THE ORGANIZATION]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
               EXTRACT FROM RESOLUTION REGISTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateOutput());
    toast.success("Resolution copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link to="/tools" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to All Tools
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Resolution Text Generator
              </h1>
              <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded">
                Premium
              </span>
            </div>
            <p className="text-muted-foreground">
              Generate official resolution formats suitable for registers and government submissions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="form-section">
              <h2 className="font-semibold text-lg mb-6">Enter Resolution Details</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ngoName">Organization Name *</Label>
                    <Input
                      id="ngoName"
                      placeholder="Your NGO Name"
                      value={formData.ngoName}
                      onChange={(e) => handleChange("ngoName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="registrationNumber">Registration Number</Label>
                    <Input
                      id="registrationNumber"
                      placeholder="NGO-XX-XXXX"
                      value={formData.registrationNumber}
                      onChange={(e) => handleChange("registrationNumber", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="resolutionSubject">Resolution Subject *</Label>
                    <Input
                      id="resolutionSubject"
                      placeholder="e.g., Opening of Bank Account"
                      value={formData.resolutionSubject}
                      onChange={(e) => handleChange("resolutionSubject", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="resolutionDate">Resolution Date</Label>
                    <Input
                      id="resolutionDate"
                      type="date"
                      value={formData.resolutionDate}
                      onChange={(e) => handleChange("resolutionDate", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="resolutionDetails">Resolution Details</Label>
                  <Textarea
                    id="resolutionDetails"
                    placeholder="Detailed text of the resolution..."
                    value={formData.resolutionDetails}
                    onChange={(e) => handleChange("resolutionDetails", e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="proposedBy">Proposed By</Label>
                    <Input
                      id="proposedBy"
                      placeholder="Name of proposer"
                      value={formData.proposedBy}
                      onChange={(e) => handleChange("proposedBy", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="secondedBy">Seconded By</Label>
                    <Input
                      id="secondedBy"
                      placeholder="Name of seconder"
                      value={formData.secondedBy}
                      onChange={(e) => handleChange("secondedBy", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="authorityName">Authorized Signatory Name</Label>
                    <Input
                      id="authorityName"
                      placeholder="Full name"
                      value={formData.authorityName}
                      onChange={(e) => handleChange("authorityName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="authorityDesignation">Designation</Label>
                    <Input
                      id="authorityDesignation"
                      placeholder="e.g., President, Secretary"
                      value={formData.authorityDesignation}
                      onChange={(e) => handleChange("authorityDesignation", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Output */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">Preview</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="w-4 h-4" />
                    Copy (Free)
                  </Button>
                  <Button size="sm" className="gap-2">
                    <Lock className="w-4 h-4" />
                    PDF - ₹29
                  </Button>
                </div>
              </div>
              <div className="output-preview min-h-[500px] whitespace-pre-wrap text-xs">
                {generateOutput()}
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Resolution: {resolutionNumber} • Copy free, PDF download premium
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResolutionTool;

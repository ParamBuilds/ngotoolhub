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

interface FormData {
  ngoName: string;
  registrationNumber: string;
  donorName: string;
  donorAddress: string;
  donationAmount: string;
  donationDate: string;
  paymentMode: string;
  purpose: string;
}

const DonationReceiptTool = () => {
  const [formData, setFormData] = useState<FormData>({
    ngoName: "",
    registrationNumber: "",
    donorName: "",
    donorAddress: "",
    donationAmount: "",
    donationDate: new Date().toISOString().split("T")[0],
    paymentMode: "Cash",
    purpose: "",
  });

  const [receiptNumber] = useState(() => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, "0");
    return `DR-${year}-${random}`;
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const generateOutput = () => {
    if (!formData.ngoName || !formData.donorName || !formData.donationAmount) {
      return "Please fill in the required fields to generate the receipt.";
    }

    const amountInWords = numberToWords(parseInt(formData.donationAmount) || 0);
    const formattedDate = new Date(formData.donationDate).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    DONATION RECEIPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Receipt No: ${receiptNumber}
Date: ${formattedDate}

${formData.ngoName.toUpperCase()}
${formData.registrationNumber ? `Registration No: ${formData.registrationNumber}` : ""}

──────────────────────────────────────────────

RECEIVED WITH THANKS FROM:

Donor Name: ${formData.donorName}
${formData.donorAddress ? `Address: ${formData.donorAddress}` : ""}

──────────────────────────────────────────────

DONATION DETAILS:

Amount: ₹${parseInt(formData.donationAmount).toLocaleString("en-IN")}
(Rupees ${amountInWords} Only)

Payment Mode: ${formData.paymentMode}
${formData.purpose ? `Purpose: ${formData.purpose}` : "Purpose: General Donation"}

──────────────────────────────────────────────

This donation is received as per the objects of the
organization and shall be utilized for the same.

Thank you for your generous contribution!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
For ${formData.ngoName}

Authorized Signatory
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateOutput());
    toast.success("Receipt copied to clipboard!");
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
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Donation Receipt Generator
            </h1>
            <p className="text-muted-foreground">
              Create professional donation receipts for your NGO. Auto-generated receipt numbers included.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="form-section">
              <h2 className="font-semibold text-lg mb-6">Enter Details</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ngoName">NGO Name *</Label>
                    <Input
                      id="ngoName"
                      placeholder="Your Organization Name"
                      value={formData.ngoName}
                      onChange={(e) => handleChange("ngoName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="registrationNumber">Registration Number</Label>
                    <Input
                      id="registrationNumber"
                      placeholder="e.g., NGO-MH-2024-1234"
                      value={formData.registrationNumber}
                      onChange={(e) => handleChange("registrationNumber", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="donorName">Donor Name *</Label>
                  <Input
                    id="donorName"
                    placeholder="Full name of the donor"
                    value={formData.donorName}
                    onChange={(e) => handleChange("donorName", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="donorAddress">Donor Address</Label>
                  <Textarea
                    id="donorAddress"
                    placeholder="Donor's complete address"
                    value={formData.donorAddress}
                    onChange={(e) => handleChange("donorAddress", e.target.value)}
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="donationAmount">Amount (₹) *</Label>
                    <Input
                      id="donationAmount"
                      type="number"
                      placeholder="10000"
                      value={formData.donationAmount}
                      onChange={(e) => handleChange("donationAmount", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="donationDate">Date</Label>
                    <Input
                      id="donationDate"
                      type="date"
                      value={formData.donationDate}
                      onChange={(e) => handleChange("donationDate", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Payment Mode</Label>
                    <Select value={formData.paymentMode} onValueChange={(value) => handleChange("paymentMode", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cash">Cash</SelectItem>
                        <SelectItem value="Cheque">Cheque</SelectItem>
                        <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                        <SelectItem value="UPI">UPI</SelectItem>
                        <SelectItem value="Online">Online Payment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="purpose">Purpose</Label>
                    <Input
                      id="purpose"
                      placeholder="e.g., Education Fund"
                      value={formData.purpose}
                      onChange={(e) => handleChange("purpose", e.target.value)}
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
                    Copy
                  </Button>
                  <Button size="sm" disabled>
                    <Download className="w-4 h-4" />
                    PDF (Premium)
                  </Button>
                </div>
              </div>
              <div className="output-preview min-h-[400px] whitespace-pre-wrap">
                {generateOutput()}
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Receipt No: {receiptNumber} • Free preview available
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Helper function to convert numbers to words
function numberToWords(num: number): string {
  if (num === 0) return "Zero";
  
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
  const convertLessThanThousand = (n: number): string => {
    if (n === 0) return "";
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
    return ones[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " " + convertLessThanThousand(n % 100) : "");
  };

  if (num < 1000) return convertLessThanThousand(num);
  if (num < 100000) return convertLessThanThousand(Math.floor(num / 1000)) + " Thousand" + (num % 1000 ? " " + convertLessThanThousand(num % 1000) : "");
  if (num < 10000000) return convertLessThanThousand(Math.floor(num / 100000)) + " Lakh" + (num % 100000 ? " " + convertLessThanThousand(num % 100000) : "");
  return convertLessThanThousand(Math.floor(num / 10000000)) + " Crore" + (num % 10000000 ? " " + numberToWords(num % 10000000) : "");
}

export default DonationReceiptTool;

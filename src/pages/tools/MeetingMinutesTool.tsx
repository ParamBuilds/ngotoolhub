import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { MeetingOutput } from "@/components/tools/DocumentOutput";

interface FormData {
  ngoName: string;
  meetingDate: string;
  meetingTime: string;
  venue: string;
  attendees: string;
  agenda: string;
  decisionsTaken: string;
  nextMeetingDate: string;
  closingRemarks: string;
}

const MeetingMinutesTool = () => {
  const [formData, setFormData] = useState<FormData>({
    ngoName: "",
    meetingDate: new Date().toISOString().split("T")[0],
    meetingTime: "10:00",
    venue: "",
    attendees: "",
    agenda: "",
    decisionsTaken: "",
    nextMeetingDate: "",
    closingRemarks: "",
  });

  const [minutesNumber] = useState(() => {
    const year = new Date().getFullYear();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
    return `MM-${year}-${random}`;
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formattedDate = new Date(formData.meetingDate).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const nextMeetingFormatted = formData.nextMeetingDate 
    ? new Date(formData.nextMeetingDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : undefined;

  const attendeesList = formData.attendees
    .split("\n")
    .filter(a => a.trim())
    .map(a => a.trim());

  const agendaItems = formData.agenda
    .split("\n")
    .filter(a => a.trim())
    .map(a => a.trim());

  const decisions = formData.decisionsTaken
    .split("\n")
    .filter(d => d.trim())
    .map(d => d.trim());

  const generatePlainText = () => {
    if (!formData.ngoName || !formData.meetingDate) {
      return "";
    }

    return `
MINUTES OF MEETING
==================
Reference No: ${minutesNumber}

${formData.ngoName.toUpperCase()}

Date: ${formattedDate}
Time: ${formData.meetingTime}
Venue: ${formData.venue || "Organization Premises"}

MEMBERS PRESENT:
${attendeesList.length > 0 ? attendeesList.map((a, i) => `${i + 1}. ${a}`).join("\n") : "(List not provided)"}

AGENDA:
${agendaItems.length > 0 ? agendaItems.map((a, i) => `${i + 1}. ${a}`).join("\n") : "(Agenda not specified)"}

DECISIONS TAKEN:
${decisions.length > 0 ? decisions.map((d, i) => `${i + 1}. ${d}`).join("\n") : "(Decisions to be recorded)"}

${formData.closingRemarks ? `CLOSING REMARKS:\n${formData.closingRemarks}` : ""}

Next Meeting: ${nextMeetingFormatted || "To be announced"}
`.trim();
  };

  const copyToClipboard = () => {
    const text = generatePlainText();
    if (text) {
      navigator.clipboard.writeText(text);
      toast.success("Meeting minutes copied to clipboard!");
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
              Meeting Minutes Generator
            </h1>
            <p className="text-muted-foreground">
              Create formal meeting minutes in professional, legal-style language.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="form-section">
              <h2 className="font-semibold text-lg mb-6">Enter Meeting Details</h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="ngoName">Organization Name *</Label>
                  <Input
                    id="ngoName"
                    placeholder="Your NGO / Organization Name"
                    value={formData.ngoName}
                    onChange={(e) => handleChange("ngoName", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="meetingDate">Meeting Date *</Label>
                    <Input
                      id="meetingDate"
                      type="date"
                      value={formData.meetingDate}
                      onChange={(e) => handleChange("meetingDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="meetingTime">Time</Label>
                    <Input
                      id="meetingTime"
                      type="time"
                      value={formData.meetingTime}
                      onChange={(e) => handleChange("meetingTime", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="venue">Venue</Label>
                    <Input
                      id="venue"
                      placeholder="Meeting location"
                      value={formData.venue}
                      onChange={(e) => handleChange("venue", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="attendees">Members Present (one per line)</Label>
                  <Textarea
                    id="attendees"
                    placeholder="Mr. Rajesh Kumar - President&#10;Mrs. Sunita Sharma - Secretary&#10;Mr. Anil Verma - Treasurer"
                    value={formData.attendees}
                    onChange={(e) => handleChange("attendees", e.target.value)}
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="agenda">Agenda Items (one per line)</Label>
                  <Textarea
                    id="agenda"
                    placeholder="Review of previous meeting minutes&#10;Financial report for Q3&#10;Upcoming charity event planning"
                    value={formData.agenda}
                    onChange={(e) => handleChange("agenda", e.target.value)}
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="decisionsTaken">Decisions Taken (one per line)</Label>
                  <Textarea
                    id="decisionsTaken"
                    placeholder="Approved budget allocation of ₹50,000&#10;Scheduled charity event for Dec 15&#10;Appointed new volunteer coordinator"
                    value={formData.decisionsTaken}
                    onChange={(e) => handleChange("decisionsTaken", e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nextMeetingDate">Next Meeting Date</Label>
                    <Input
                      id="nextMeetingDate"
                      type="date"
                      value={formData.nextMeetingDate}
                      onChange={(e) => handleChange("nextMeetingDate", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="closingRemarks">Closing Remarks</Label>
                  <Textarea
                    id="closingRemarks"
                    placeholder="Any additional closing notes..."
                    value={formData.closingRemarks}
                    onChange={(e) => handleChange("closingRemarks", e.target.value)}
                    rows={2}
                  />
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
              
              <MeetingOutput
                ngoName={formData.ngoName}
                meetingDate={formattedDate}
                meetingTime={formData.meetingTime}
                venue={formData.venue || "Organization Premises"}
                attendees={attendeesList}
                agendaItems={agendaItems}
                decisions={decisions}
                closingRemarks={formData.closingRemarks}
                nextMeetingDate={nextMeetingFormatted}
                minutesNumber={minutesNumber}
              />
              
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Reference: {minutesNumber} • Free preview available
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MeetingMinutesTool;

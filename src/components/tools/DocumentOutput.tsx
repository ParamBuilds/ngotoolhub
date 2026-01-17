import { ReactNode } from "react";
import { FileText, Building2, Calendar, Hash, User, Receipt, Users, Clock, MapPin, Phone, Heart, Shield, Award } from "lucide-react";

interface DocumentOutputProps {
  type: "receipt" | "member" | "meeting" | "volunteer" | "resolution";
  children: ReactNode;
}

// Donation Receipt Output
interface ReceiptOutputProps {
  ngoName: string;
  registrationNumber?: string;
  donorName: string;
  donorAddress?: string;
  amount: string;
  amountInWords: string;
  date: string;
  paymentMode: string;
  purpose?: string;
  receiptNumber: string;
}

export const ReceiptOutput = ({
  ngoName,
  registrationNumber,
  donorName,
  donorAddress,
  amount,
  amountInWords,
  date,
  paymentMode,
  purpose,
  receiptNumber,
}: ReceiptOutputProps) => {
  if (!ngoName || !donorName || !amount) {
    return (
      <div className="document-output p-8 text-center">
        <Receipt className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <p className="text-muted-foreground">Fill in the required fields to generate your donation receipt.</p>
      </div>
    );
  }

  return (
    <div className="document-output">
      <div className="document-header">
        <h3>Donation Receipt</h3>
        <p className="org-name">{ngoName}</p>
        <div className="doc-meta">
          {registrationNumber && <span>Reg. No: {registrationNumber}</span>}
          <span className="ml-4">Receipt #{receiptNumber}</span>
        </div>
      </div>

      <div className="document-body">
        <div className="document-section">
          <div className="document-section-title">
            <User className="w-3 h-3" /> Donor Information
          </div>
          <div className="document-field">
            <span className="document-field-label">Name</span>
            <span className="document-field-value highlight">{donorName}</span>
          </div>
          {donorAddress && (
            <div className="document-field">
              <span className="document-field-label">Address</span>
              <span className="document-field-value">{donorAddress}</span>
            </div>
          )}
        </div>

        <div className="document-amount">
          <div className="document-amount-value">₹{parseInt(amount).toLocaleString("en-IN")}</div>
          <div className="document-amount-words">(Rupees {amountInWords} Only)</div>
        </div>

        <div className="document-section">
          <div className="document-section-title">
            <Receipt className="w-3 h-3" /> Payment Details
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="document-field flex-col items-start gap-1">
              <span className="document-field-label">Date</span>
              <span className="document-field-value">{date}</span>
            </div>
            <div className="document-field flex-col items-start gap-1">
              <span className="document-field-label">Payment Mode</span>
              <span className="document-field-value">{paymentMode}</span>
            </div>
          </div>
          <div className="document-field mt-2">
            <span className="document-field-label">Purpose</span>
            <span className="document-field-value">{purpose || "General Donation"}</span>
          </div>
        </div>

        <div className="document-footer">
          <div className="document-seal">
            <Shield className="w-4 h-4" />
            Official Receipt
          </div>
          <div className="document-signature">
            <div className="document-signature-block">
              <div className="document-signature-line" />
              <span className="document-signature-label">Authorized Signatory</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Member Registration Output
interface MemberOutputProps {
  fullName: string;
  fatherHusbandName?: string;
  dateOfBirth?: string;
  mobileNumber: string;
  address?: string;
  aadhaarNumber?: string;
  membershipType: string;
  memberId: string;
  registrationDate: string;
}

export const MemberOutput = ({
  fullName,
  fatherHusbandName,
  dateOfBirth,
  mobileNumber,
  address,
  aadhaarNumber,
  membershipType,
  memberId,
  registrationDate,
}: MemberOutputProps) => {
  if (!fullName || !mobileNumber) {
    return (
      <div className="document-output p-8 text-center">
        <Users className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <p className="text-muted-foreground">Fill in the required fields to generate the membership entry.</p>
      </div>
    );
  }

  return (
    <div className="document-output">
      <div className="document-header">
        <h3>Membership Registration</h3>
        <div className="doc-meta">
          <span>Member ID: {memberId}</span>
          <span className="ml-4">Date: {registrationDate}</span>
        </div>
      </div>

      <div className="document-body">
        <div className="document-section">
          <div className="document-section-title">
            <User className="w-3 h-3" /> Personal Details
          </div>
          <div className="document-field">
            <span className="document-field-label">Full Name</span>
            <span className="document-field-value highlight">{fullName}</span>
          </div>
          {fatherHusbandName && (
            <div className="document-field">
              <span className="document-field-label">Father/Husband</span>
              <span className="document-field-value">{fatherHusbandName}</span>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {dateOfBirth && (
              <div className="document-field flex-col items-start gap-1">
                <span className="document-field-label">Date of Birth</span>
                <span className="document-field-value">{dateOfBirth}</span>
              </div>
            )}
            <div className="document-field flex-col items-start gap-1">
              <span className="document-field-label">Mobile</span>
              <span className="document-field-value">{mobileNumber}</span>
            </div>
          </div>
        </div>

        {address && (
          <div className="document-section">
            <div className="document-section-title">
              <MapPin className="w-3 h-3" /> Address
            </div>
            <p className="text-sm text-foreground">{address}</p>
          </div>
        )}

        <div className="document-section">
          <div className="document-section-title">
            <Award className="w-3 h-3" /> Membership Information
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="document-field flex-col items-start gap-1">
              <span className="document-field-label">Type</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                {membershipType}
              </span>
            </div>
            {aadhaarNumber && (
              <div className="document-field flex-col items-start gap-1">
                <span className="document-field-label">Aadhaar/ID</span>
                <span className="document-field-value font-mono">{aadhaarNumber.replace(/(\d{4})(\d{4})(\d{4})/, "$1-$2-$3")}</span>
              </div>
            )}
          </div>
        </div>

        <div className="document-footer">
          <p className="text-xs text-muted-foreground mb-4">
            I hereby declare that the above information is true and correct to the best of my knowledge.
          </p>
          <div className="document-signature">
            <div className="document-signature-block">
              <div className="document-signature-line" />
              <span className="document-signature-label">Member's Signature</span>
            </div>
            <div className="document-signature-block">
              <div className="document-signature-line" />
              <span className="document-signature-label">Verified By</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Volunteer ID Card Output
interface VolunteerOutputProps {
  volunteerName: string;
  designation: string;
  ngoName: string;
  validFrom: string;
  validTo: string;
  bloodGroup?: string;
  emergencyContact?: string;
  emergencyContactName?: string;
  volunteerId: string;
}

export const VolunteerOutput = ({
  volunteerName,
  designation,
  ngoName,
  validFrom,
  validTo,
  bloodGroup,
  emergencyContact,
  emergencyContactName,
  volunteerId,
}: VolunteerOutputProps) => {
  if (!volunteerName || !ngoName) {
    return (
      <div className="id-card-output p-8 text-center">
        <User className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <p className="text-muted-foreground">Fill in the required fields to generate the ID card.</p>
      </div>
    );
  }

  return (
    <div className="id-card-output">
      <div className="id-card-header">
        <p className="id-card-org">{ngoName}</p>
      </div>

      <div className="id-card-photo">
        <User className="w-10 h-10 text-muted-foreground" />
      </div>

      <div className="id-card-body">
        <h3 className="id-card-name">{volunteerName}</h3>
        <span className="id-card-role">{designation}</span>
      </div>

      <div className="id-card-details">
        <div className="id-card-field">
          <div className="id-card-field-icon">
            <Hash className="w-4 h-4" />
          </div>
          <div className="id-card-field-content">
            <p className="id-card-field-label">ID Number</p>
            <p className="id-card-field-value font-mono">{volunteerId}</p>
          </div>
        </div>

        {bloodGroup && (
          <div className="id-card-field">
            <div className="id-card-field-icon">
              <Heart className="w-4 h-4" />
            </div>
            <div className="id-card-field-content">
              <p className="id-card-field-label">Blood Group</p>
              <p className="id-card-field-value">{bloodGroup}</p>
            </div>
          </div>
        )}

        {emergencyContact && (
          <div className="id-card-field">
            <div className="id-card-field-icon">
              <Phone className="w-4 h-4" />
            </div>
            <div className="id-card-field-content">
              <p className="id-card-field-label">{emergencyContactName || "Emergency"}</p>
              <p className="id-card-field-value">{emergencyContact}</p>
            </div>
          </div>
        )}
      </div>

      <div className="id-card-footer">
        <div className="id-card-validity">
          <span>Valid From: <strong>{validFrom}</strong></span>
          <span>Valid To: <strong>{validTo}</strong></span>
        </div>
      </div>
    </div>
  );
};

// Meeting Minutes Output
interface MeetingOutputProps {
  ngoName: string;
  meetingDate: string;
  meetingTime: string;
  venue?: string;
  attendees: string[];
  agendaItems: string[];
  decisions: string[];
  closingRemarks?: string;
  nextMeetingDate?: string;
  minutesNumber: string;
}

export const MeetingOutput = ({
  ngoName,
  meetingDate,
  meetingTime,
  venue,
  attendees,
  agendaItems,
  decisions,
  closingRemarks,
  nextMeetingDate,
  minutesNumber,
}: MeetingOutputProps) => {
  if (!ngoName || !meetingDate) {
    return (
      <div className="minutes-output p-8 text-center">
        <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <p className="text-muted-foreground">Fill in the required fields to generate the meeting minutes.</p>
      </div>
    );
  }

  return (
    <div className="minutes-output">
      <div className="minutes-header">
        <span className="minutes-badge">
          <FileText className="w-3 h-3" />
          {minutesNumber}
        </span>
        <h3 className="minutes-title">{ngoName}</h3>
        <div className="minutes-meta">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {meetingDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {meetingTime}
          </span>
          {venue && (
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {venue}
            </span>
          )}
        </div>
      </div>

      <div className="minutes-content">
        {attendees.length > 0 && (
          <div className="minutes-section">
            <div className="minutes-section-title">
              <span className="icon"><Users className="w-3 h-3" /></span>
              Members Present
            </div>
            <div className="minutes-list">
              {attendees.map((attendee, i) => (
                <div key={i} className="minutes-list-item">{attendee}</div>
              ))}
            </div>
          </div>
        )}

        {agendaItems.length > 0 && (
          <div className="minutes-section">
            <div className="minutes-section-title">
              <span className="icon"><FileText className="w-3 h-3" /></span>
              Agenda
            </div>
            <div className="minutes-list">
              {agendaItems.map((item, i) => (
                <div key={i} className="minutes-list-item">{item}</div>
              ))}
            </div>
          </div>
        )}

        {decisions.length > 0 && (
          <div className="minutes-section">
            <div className="minutes-section-title">
              <span className="icon"><Shield className="w-3 h-3" /></span>
              Decisions Taken
            </div>
            <div className="minutes-list">
              {decisions.map((decision, i) => (
                <div key={i} className="minutes-list-item font-medium">{decision}</div>
              ))}
            </div>
          </div>
        )}

        {closingRemarks && (
          <div className="p-4 rounded-lg bg-muted/50 text-sm text-muted-foreground">
            <p>{closingRemarks}</p>
          </div>
        )}

        {nextMeetingDate && (
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Next Meeting:</span>{" "}
            <strong className="text-primary">{nextMeetingDate}</strong>
          </div>
        )}

        <div className="document-signature">
          <div className="document-signature-block">
            <div className="document-signature-line" />
            <span className="document-signature-label">Secretary</span>
          </div>
          <div className="document-signature-block">
            <div className="document-signature-line" />
            <span className="document-signature-label">President/Chairperson</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Resolution Output
interface ResolutionOutputProps {
  ngoName: string;
  registrationNumber?: string;
  resolutionSubject: string;
  resolutionDate: string;
  resolutionDetails?: string;
  proposedBy?: string;
  secondedBy?: string;
  authorityName?: string;
  authorityDesignation: string;
  resolutionNumber: string;
}

export const ResolutionOutput = ({
  ngoName,
  registrationNumber,
  resolutionSubject,
  resolutionDate,
  resolutionDetails,
  proposedBy,
  secondedBy,
  authorityName,
  authorityDesignation,
  resolutionNumber,
}: ResolutionOutputProps) => {
  if (!ngoName || !resolutionSubject) {
    return (
      <div className="resolution-output p-8 text-center">
        <FileText className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <p className="text-muted-foreground">Fill in the required fields to generate the resolution.</p>
      </div>
    );
  }

  return (
    <div className="resolution-output">
      <div className="resolution-header">
        <div className="resolution-stamp">
          <Award className="w-8 h-8 text-primary" />
        </div>
        <p className="resolution-type">Certified Resolution</p>
        <h3 className="resolution-org">{ngoName}</h3>
        <p className="resolution-ref">
          {registrationNumber && <span>Reg. No: {registrationNumber} • </span>}
          Ref: {resolutionNumber} • Date: {resolutionDate}
        </p>
      </div>

      <div className="resolution-body">
        <div className="resolution-subject">
          <p className="resolution-subject-label">Subject</p>
          <p className="resolution-subject-text">{resolutionSubject}</p>
        </div>

        <div className="resolution-text">
          <p className="resolution-resolved">Resolved That:</p>
          <p className="mt-2 text-sm leading-relaxed">
            {resolutionDetails || "The resolution details to be recorded here as per the decisions taken in the meeting of the Governing Body / Executive Committee."}
          </p>
        </div>

        <div className="document-section mt-6">
          <div className="document-section-title">
            <Users className="w-3 h-3" /> Voting Record
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="document-field flex-col items-start gap-1">
              <span className="document-field-label">Proposed By</span>
              <span className="document-field-value">{proposedBy || "_______________"}</span>
            </div>
            <div className="document-field flex-col items-start gap-1">
              <span className="document-field-label">Seconded By</span>
              <span className="document-field-value">{secondedBy || "_______________"}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            The resolution was passed UNANIMOUSLY by all members present.
          </p>
        </div>

        <div className="document-footer">
          <div className="document-seal mb-4">
            <Shield className="w-4 h-4" />
            Certified True Copy
          </div>
          <div className="document-signature-block">
            <div className="document-signature-line" />
            <p className="text-sm font-semibold">{authorityName || "(Name of Authorized Signatory)"}</p>
            <span className="document-signature-label">{authorityDesignation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

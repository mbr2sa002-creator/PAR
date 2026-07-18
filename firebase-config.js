/* ============================================================
   FIREBASE CONFIG — EDIT THIS FILE ONLY
   Paste your Firebase project's config below (see README.md
   "Setup" section for how to get these values). Both
   admin.html and checkin.html load this same file, so you
   only need to set it up once.
   ============================================================ */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDBgw7w2N1cXo61kcttb6IdpPr0_qcSSa0",
  authDomain: "par-attendance.firebaseapp.com",
  projectId: "par-attendance",
  storageBucket: "par-attendance.firebasestorage.app",
  messagingSenderId: "380205444705",
  appId: "1:380205444705:web:b812ea83342d7f21890420"
};

/* ============================================================
   PAR TEMPLATE SCHEMA
   This mirrors the exact column layout of Talam.xlsx ("List for
   PAR" sheet). key = Firestore field name, label = Excel header
   text written on export. Order here = column order on export.
   Do not reorder without also checking the PAR system still
   accepts the file.
   ============================================================ */
const PAR_COLUMNS = [
  { key: "no",       label: "No" },
  { key: "name",      label: "Name" },
  { key: "sex",       label: "Sex" },
  { key: "age",       label: "age" },
  { key: "role",      label: "role" },
  { key: "title",     label: "Title" },       // Participant / Facilitator — chosen at check-in
  { key: "village",   label: "village" },
  { key: "commune",   label: "commune" },
  { key: "wing",      label: "Wing" },
  { key: "tele",      label: "Tele" },
  { key: "rc",        label: "RC" },
  { key: "disabled",  label: "Disabled" },
  { key: "mvc",       label: "MVC" },
  { key: "other",     label: "other" },
  { key: "remark",    label: "remark" },
  { key: "blank",     label: "" },             // template has an unlabeled spacer column
  { key: "wingId",    label: "Wing ID" },
  { key: "wingName",  label: "Name" }
];

// Partner master-list fields (everything except no/title/blank, which are event-specific)
const PARTNER_FIELDS = PAR_COLUMNS
  .map(c => c.key)
  .filter(k => !["no", "title", "blank"].includes(k));

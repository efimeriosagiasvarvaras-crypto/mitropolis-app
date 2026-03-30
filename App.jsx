import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  FileImage,
  FileText,
  Home,
  User,
  Users,
  Shield,
  Search,
  Stamp,
  Bell,
} from "lucide-react";

export default function MitropolisBaptismLicenseAppPrototype() {
  const [view, setView] = useState("priest");
  const [step, setStep] = useState(1);
  const [isMarried, setIsMarried] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [officeStatus, setOfficeStatus] = useState("Σε έλεγχο");

  const steps = useMemo(
    () => [
      { id: 1, title: "Γονείς", icon: Users },
      { id: 2, title: "Παιδί", icon: User },
      { id: 3, title: "Βάπτιση", icon: Home },
      { id: 4, title: "Ανάδοχος", icon: User },
      { id: 5, title: "Δήλωση", icon: FileText },
      { id: 6, title: "Έγγραφα", icon: FileImage },
    ],
    []
  );

  const checklist = [
    { title: "Ληξιαρχική Πράξη Γεννήσεως Παιδιού", required: true },
    { title: "Αστυνομικές Ταυτότητες Γονέων", required: true },
    { title: "Αποδεικτικό Κατοικίας Γονέων", required: true },
    { title: "Πιστοποιητικό Βαπτίσεως Αναδόχου", required: true },
    { title: "Αστυνομική Ταυτότητα Αναδόχου", required: true },
    { title: "Πιστοποιητικό Οικογενειακής Καταστάσεως Αναδόχου", required: true },
    {
      title: "Ληξιαρχική Πράξη Θρησκευτικού Γάμου Αναδόχου",
      required: false,
      conditional: true,
    },
  ];

  const visibleDocs = checklist.filter((item) => (item.conditional ? isMarried : true));

  const goNext = () => setStep((s) => Math.min(s + 1, 6));
  const goPrev = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-stone-100 text-slate-900">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="bg-slate-900 text-white p-5 md:p-8">
            <div className="flex items-center gap-4 mb-5">
              <div className="h-14 w-14 rounded-full border border-white/30 flex items-center justify-center text-xs text-center leading-tight bg-white/10 font-semibold">
                Ι.Μ.Δ.
              </div>
              <div className="text-sm text-slate-300 leading-5">
                Ιερά Μητρόπολις Δημητριάδος και Αλμυρού
                <br />
                Γραφείο Γάμων και Βαπτίσεων
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-slate-300">
                  Επίσημη Έκδοση Παρουσιάσεως
                </p>
                <h1 className="text-2xl md:text-4xl font-bold mt-1">
                  Ψηφιακή Πλατφόρμα Αδειών Βαπτίσεως και Γάμου
                </h1>
                <p className="text-slate-300 mt-2 max-w-3xl text-sm md:text-base">
                  Έκδοση παρουσιάσεως για ενορίες και Γραφείο Γάμων και Βαπτίσεων, με επίσημο ύφος και πλήρη λειτουργία από υπολογιστή και κινητό.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setView("priest")}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    view === "priest" ? "bg-white text-slate-900" : "bg-white/10 text-white"
                  }`}
                >
                  Όψη Ενορίας
                </button>
                <button
                  onClick={() => setView("office")}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    view === "office" ? "bg-white text-slate-900" : "bg-white/10 text-white"
                  }`}
                >
                  Όψη Μητροπόλεως
                </button>
              </div>
            </div>
          </div>

          {view === "priest" ? (
            <div className="p-4 md:p-8 grid lg:grid-cols-[300px_1fr] gap-6">
              <aside className="space-y-4">
                <div className="bg-stone-50 rounded-2xl border p-4">
                  <h2 className="font-semibold mb-3">Ροή Αιτήσεως</h2>
                  <div className="space-y-2">
                    {steps.map((item) => {
                      const Icon = item.icon;
                      const active = step === item.id;
                      const done = step > item.id || submitted;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setStep(item.id)}
                          className={`w-full flex items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${
                            active
                              ? "bg-slate-900 text-white"
                              : done
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-white border text-slate-700"
                          }`}
                        >
                          {done && !active ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                          <span className="font-medium">{item.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-stone-50 rounded-2xl border p-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900 mb-2">Θεσμική σημείωση</p>
                  <p>
                    Η εγγραφή ιερέως ενεργοποιείται μόνο μετά από έγκριση της Ιεράς Μητροπόλεως και τα στοιχεία της αιτήσεως διακινούνται εντός ελεγχόμενου περιβάλλοντος.
                  </p>
                </div>
              </aside>

              <main className="space-y-6">
                {!submitted ? (
                  <div className="bg-white rounded-3xl border p-5 md:p-7 shadow-sm">
                    {step === 1 && (
                      <Section
                        title="1. Στοιχεία Γονέων"
                        subtitle="Καταχώριση των στοιχείων των δύο γονέων, όπως εμφανίζονται στα επίσημα έγγραφα."
                      >
                        <TwoCol>
                          <Field label="Ονοματεπώνυμο Πατέρα" placeholder="π.χ. Ιωάννης Παπαδόπουλος" />
                          <Field label="Αριθμός Ταυτότητας Πατέρα" placeholder="π.χ. ΑΒ123456" />
                          <Field label="Ονοματεπώνυμο Μητέρας" placeholder="π.χ. Μαρία Παπαδοπούλου" />
                          <Field label="Αριθμός Ταυτότητας Μητέρας" placeholder="π.χ. ΑΚ654321" />
                        </TwoCol>
                      </Section>
                    )}

                    {step === 2 && (
                      <Section
                        title="2. Στοιχεία Παιδιού"
                        subtitle="Στοιχεία όπως προκύπτουν από τη ληξιαρχική πράξη γεννήσεως."
                      >
                        <TwoCol>
                          <Field label="Ονοματεπώνυμο Παιδιού" placeholder="Όπως αναγράφεται στο ληξιαρχείο" />
                          <Field label="Ημερομηνία Γεννήσεως" type="date" />
                          <Field label="Τόπος Γεννήσεως" placeholder="π.χ. Βόλος" />
                          <Field label="Ληξιαρχείο" placeholder="π.χ. Ληξιαρχείο Βόλου" />
                          <Field label="Αριθμός Ληξιαρχικής Πράξεως" placeholder="Αριθμός πράξεως" />
                          <Field label="Τόμος" placeholder="Τόμος" />
                          <Field label="Έτος" placeholder="Έτος" />
                        </TwoCol>
                      </Section>
                    )}

                    {step === 3 && (
                      <Section
                        title="3. Στοιχεία Βαπτίσεως"
                        subtitle="Καταχώριση της ημερομηνίας, του ναού τελέσεως και του ονόματος που θα λάβει το παιδί."
                      >
                        <TwoCol>
                          <Field label="Ημερομηνία Βαπτίσεως" type="date" />
                          <Field label="Ιερός Ναός Τελέσεως" placeholder="π.χ. Ι.Ν. Αγίων ..." />
                        </TwoCol>
                        <Field
                          label="Όνομα που θα λάβει το παιδί κατά το Μυστήριο"
                          placeholder="Συμπλήρωση ονόματος"
                        />
                      </Section>
                    )}

                    {step === 4 && (
                      <Section
                        title="4. Στοιχεία Αναδόχου"
                        subtitle="Το σύστημα εμφανίζει πρόσθετα πεδία μόνο όταν απαιτούνται κατά περίπτωση."
                      >
                        <TwoCol>
                          <Field label="Ονοματεπώνυμο Αναδόχου" placeholder="Συμπλήρωση στοιχείων" />
                          <Field label="Κατοικία Αναδόχου" placeholder="Διεύθυνση ή περιοχή κατοικίας" />
                        </TwoCol>
                        <div>
                          <label className="text-sm font-medium text-slate-700">Ο ανάδοχος είναι έγγαμος;</label>
                          <select
                            value={isMarried ? "Ναι" : "Όχι"}
                            onChange={(e) => setIsMarried(e.target.value === "Ναι")}
                            className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3 bg-white"
                          >
                            <option>Όχι</option>
                            <option>Ναι</option>
                          </select>
                        </div>
                        {isMarried && (
                          <div className="rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
                            Στη φάση των επισυναπτομένων θα ζητηθεί και η ληξιαρχική πράξη θρησκευτικού γάμου του αναδόχου.
                          </div>
                        )}
                        <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 text-sm">
                          <input type="checkbox" className="mt-1" />
                          <span>
                            Βεβαιώνεται ότι ο ανάδοχος είναι βαπτισμένος Ορθόδοξος Χριστιανός και δεν υφίσταται εκκλησιαστικό κώλυμα σύμφωνα με την ισχύουσα τάξη.
                          </span>
                        </label>
                      </Section>
                    )}

                    {step === 5 && (
                      <Section
                        title="5. Υπεύθυνη Δήλωση"
                        subtitle="Ψηφιακή αποδοχή του περιεχομένου της δηλώσεως από τον αιτούντα."
                      >
                        <div className="rounded-2xl bg-stone-50 border p-4 text-sm leading-6 text-slate-700">
                          Οι υπογράφοντες γονείς, έχοντας λάβει γνώση για τις συνέπειες του νόμου επί ψευδεί δηλώσει επιβαλλομένων ποινών, δηλώνουν υπευθύνως ότι τα στοιχεία που περιέχονται στην παρούσα δήλωση είναι αληθή.
                        </div>
                        <label className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 text-sm">
                          <input type="checkbox" className="mt-1" />
                          <span>Βεβαιώνω ότι η υπεύθυνη δήλωση ανεγνώσθη, ελέγχθηκε και γίνεται αποδεκτή.</span>
                        </label>
                      </Section>
                    )}

                    {step === 6 && (
                      <Section
                        title="6. Επισυναπτόμενα Έγγραφα"
                        subtitle="Τα αρχεία ανεβαίνουν από υπολογιστή ή φωτογραφίζονται απευθείας από το κινητό."
                      >
                        <div className="space-y-4">
                          {visibleDocs.map((item) => (
                            <div key={item.title} className="rounded-2xl border border-slate-200 p-4">
                              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div>
                                  <h3 className="font-semibold">{item.title}</h3>
                                  <p className="text-sm text-slate-500 mt-1">
                                    {item.required ? "Υποχρεωτικό δικαιολογητικό" : "Δικαιολογητικό κατά περίπτωση"}
                                  </p>
                                  <p className="text-xs text-slate-400 mt-2">
                                    Οδηγία: Να φαίνεται ολόκληρο το έγγραφο, καθαρά και χωρίς σκιάσεις.
                                  </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  <button className="rounded-2xl border px-4 py-2 text-sm font-medium">Ανέβασμα αρχείου</button>
                                  <button className="rounded-2xl border px-4 py-2 text-sm font-medium">Φωτογράφιση</button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Section>
                    )}

                    <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
                      <button
                        onClick={goPrev}
                        disabled={step === 1}
                        className="rounded-2xl border border-slate-300 px-5 py-3 font-medium disabled:opacity-40"
                      >
                        Προηγούμενο
                      </button>

                      {step < 6 ? (
                        <button
                          onClick={goNext}
                          className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium flex items-center justify-center gap-2"
                        >
                          Επόμενο <ChevronRight size={18} />
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setSubmitted(true);
                            setView("office");
                          }}
                          className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium"
                        >
                          Υποβολή Αιτήσεως
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl border p-6 md:p-8 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-emerald-100 p-3 text-emerald-700">
                        <CheckCircle2 size={28} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">Η αίτηση υποβλήθηκε επιτυχώς</h2>
                        <p className="text-slate-600 mt-2 max-w-2xl">
                          Η αίτηση καταχωρίσθηκε επιτυχώς και εμφανίζεται πλέον σε κατάσταση «Σε έλεγχο» στο Γραφείο Γάμων και Βαπτίσεων.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </main>
            </div>
          ) : (
            <OfficeView
              officeStatus={officeStatus}
              setOfficeStatus={setOfficeStatus}
              isMarried={isMarried}
              submitted={submitted}
              onReturnPriest={() => setView("priest")}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function OfficeView({ officeStatus, setOfficeStatus, isMarried, submitted, onReturnPriest }) {
  const docs = [
    ["Ληξιαρχική Πράξη Γεννήσεως Παιδιού", "Εγκεκριμένο"],
    ["Αστυνομικές Ταυτότητες Γονέων", "Εγκεκριμένο"],
    ["Αποδεικτικό Κατοικίας Γονέων", "Χρειάζεται επανυποβολή"],
    ["Πιστοποιητικό Βαπτίσεως Αναδόχου", "Εγκεκριμένο"],
    ["Αστυνομική Ταυτότητα Αναδόχου", "Εγκεκριμένο"],
    ["Πιστοποιητικό Οικογενειακής Καταστάσεως Αναδόχου", "Σε έλεγχο"],
  ];

  if (isMarried) {
    docs.push(["Ληξιαρχική Πράξη Θρησκευτικού Γάμου Αναδόχου", "Σε έλεγχο"]);
  }

  return (
    <div className="p-4 md:p-8 grid xl:grid-cols-[330px_1fr] gap-6">
      <aside className="space-y-4">
        <div className="bg-stone-50 rounded-2xl border p-4">
          <h2 className="font-semibold mb-3 flex items-center gap-2">
            <Shield size={18} /> Πίνακας Ελέγχου Γραφείου
          </h2>
          <div className="space-y-3 text-sm">
            <MetricCard title="Νέες Αιτήσεις" value="12" />
            <MetricCard title="Σε Έλεγχο" value="7" />
            <MetricCard title="Χρειάζονται Διόρθωση" value="3" />
            <MetricCard title="Εγκεκριμένες Σήμερα" value="5" />
          </div>
        </div>

        <div className="bg-stone-50 rounded-2xl border p-4">
          <div className="flex items-center gap-2 text-sm font-medium mb-3">
            <Search size={16} /> Αναζήτηση
          </div>
          <input className="w-full rounded-2xl border px-4 py-3" placeholder="Αριθμός αιτήσεως / όνομα" />
        </div>

        <div className="bg-stone-50 rounded-2xl border p-4 text-sm text-slate-600">
          <div className="flex items-center gap-2 text-slate-900 font-semibold mb-2">
            <Bell size={16} /> Υπηρεσιακή ειδοποίηση
          </div>
          {submitted ? (
            <p>Νέα αίτηση από ενορία καταχωρίσθηκε αυτομάτως και είναι διαθέσιμη για διοικητικό έλεγχο.</p>
          ) : (
            <p>
              Η παρούσα όψη αποτυπώνει τον τρόπο διοικητικού ελέγχου, επικοινωνίας με την ενορία και εκδόσεως της σχετικής αδείας.
            </p>
          )}
        </div>
      </aside>

      <main className="space-y-6">
        <div className="bg-white rounded-3xl border p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">Αίτηση</p>
              <h2 className="text-2xl font-bold mt-1">ΙΜΔ-ΒΑΠ-2026-00124</h2>
              <p className="text-slate-600 mt-2">Ενορία: Ι.Ν. Αγίων Ιωάννου Δαμασκηνού, Βαρβάρας και Σοφίας</p>
              <p className="text-slate-600">Αιτών ιερεύς: π. Βαρνάβας</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={officeStatus}
                onChange={(e) => setOfficeStatus(e.target.value)}
                className="rounded-2xl border px-4 py-3 bg-white"
              >
                <option>Σε έλεγχο</option>
                <option>Ελλιπή δικαιολογητικά</option>
                <option>Εγκεκριμένη</option>
                <option>Ολοκληρωμένη</option>
              </select>
              <button className="rounded-2xl border px-4 py-3 font-medium">Αποστολή Παρατηρήσεων</button>
              <button className="rounded-2xl bg-slate-900 text-white px-4 py-3 font-medium flex items-center gap-2">
                <Stamp size={16} /> Έκδοση Αδείας
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Στοιχεία Αιτήσεως</h3>
            <div className="space-y-3 text-sm">
              <DataRow label="Πατέρας" value="Ιωάννης Παπαδόπουλος" />
              <DataRow label="Μητέρα" value="Μαρία Παπαδοπούλου" />
              <DataRow label="Παιδί" value="Αρσένιος Παπαδόπουλος" />
              <DataRow label="Ημ. Γεννήσεως" value="12/02/2026" />
              <DataRow label="Ληξιαρχείο" value="Βόλου" />
              <DataRow label="Ημ. Βαπτίσεως" value="20/06/2026" />
              <DataRow label="Ναός Τελέσεως" value="Ι.Ν. Αγίων Ιωάννου Δαμασκηνού, Βαρβάρας και Σοφίας" />
              <DataRow label="Ανάδοχος" value="Νικόλαος Δημητρίου" />
              <DataRow label="Κατάσταση" value={officeStatus} />
            </div>
          </div>

          <div className="bg-white rounded-3xl border p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Κατάσταση Πληρωμής</h3>
            <div className="space-y-3 text-sm">
              <DataRow label="Ποσό" value="35,00 €" />
              <DataRow label="Πληρωμή" value="Επιβεβαιωμένη" />
              <DataRow label="Τρόπος" value="QR / Ψηφιακός κωδικός" />
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800">
                Η πληρωμή έχει ενημερώσει αυτομάτως το Γραφείο και την ενορία.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Έλεγχος Επισυναπτομένων</h3>
          <div className="space-y-4">
            {docs.map(([name, status]) => (
              <div key={name} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <p className="font-medium">{name}</p>
                    <p className="text-sm text-slate-500 mt-1">Κατάσταση ελέγχου: {status}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="rounded-2xl border px-4 py-2 text-sm">Προβολή</button>
                    <button className="rounded-2xl border px-4 py-2 text-sm">Έγκριση</button>
                    <button className="rounded-2xl border px-4 py-2 text-sm">Επανυποβολή</button>
                  </div>
                </div>
                <input
                  className="mt-3 w-full rounded-2xl border px-4 py-3 text-sm"
                  placeholder="Παρατήρηση προς την ενορία ή τον αιτούντα"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl border p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Έκδοση Αδείας</h3>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-stone-50 border p-4 text-sm text-slate-700">
              Προεπισκόπηση εγγράφου αδείας με σφραγίδα της Ιεράς Μητροπόλεως, υπογραφή του αρμοδίου υπευθύνου και μοναδικό αριθμό εκδόσεως.
            </div>
            <div className="rounded-2xl bg-stone-50 border p-4 text-sm text-slate-700">
              Με την τελική έγκριση, η άδεια αποστέλλεται αυτομάτως στην ενορία προς εκτύπωση, αρχειοθέτηση και παράδοση στον ενδιαφερόμενο.
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-medium">
              Οριστική Έγκριση και Έκδοση
            </button>
            <button className="rounded-2xl border px-5 py-3 font-medium">Αποθήκευση Προσχεδίου</button>
            <button onClick={onReturnPriest} className="rounded-2xl border px-5 py-3 font-medium">
              Επιστροφή στην Όψη Ενορίας
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({ title, subtitle, children }) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
      <p className="text-sm text-slate-500 mt-1 mb-5">{subtitle}</p>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function TwoCol({ children }) {
  return <div className="grid md:grid-cols-2 gap-4">{children}</div>;
}

function Field({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3 bg-white"
      />
    </div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div className="rounded-2xl bg-white border p-4">
      <p className="text-xs uppercase tracking-wide text-slate-400">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

function DataRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
}

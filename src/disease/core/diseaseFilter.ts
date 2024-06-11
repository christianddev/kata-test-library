type Note = {
  id: number;
  content: 'public' | 'private';
};

type Case = {
  id: number;
  patientName: string;
  diagnosisId: number;
  diagnosisName: string;
  publicNotes: Note[];
  privateNotes: Note[];
};

export type Diagnosis = {
  id: number;
  name: string;
  location: string;
  system: string;
  origin: string;
  specie: string;
};

export class DiseaseFilter {
  private filters: string[] = [];
  constructor(private readonly cases: Case[], private readonly diagnoses: Diagnosis[]) {}

  static create(cases: Case[], diagnoses: Diagnosis[]) {
    return new DiseaseFilter(cases, diagnoses);
  }

  addFilter(location: string) {
    this.filters.push(location);
  }

  get casesFiltered() {
    const fromDiagnosisToCasesFiltered = (d: Diagnosis) => this.cases.filter((c) => c.diagnosisId === d.id);
    const diagnosesFilteredBy = (location: string) => this.diagnoses.filter((d) => d.location === location);
    const fromFiltersToCases = (f: string) => diagnosesFilteredBy(f).flatMap(fromDiagnosisToCasesFiltered);
    return this.filters.flatMap(fromFiltersToCases);
  }
}
const cases: Case[] = [
  {
    id: 1,
    patientName: 'John Doe',
    diagnosisId: 1,
    diagnosisName: 'Diabetes',
    publicNotes: [{ id: 1, content: 'public' }],
    privateNotes: [{ id: 1, content: 'private' }],
  },
  {
    id: 2,
    patientName: 'Jane Doe',
    diagnosisId: 2,
    diagnosisName: 'Cancer',
    publicNotes: [{ id: 1, content: 'public' }],
    privateNotes: [{ id: 1, content: 'private' }],
  },
];
const diagnoses: Diagnosis[] = [
  { id: 1, name: 'Diabetes', location: 'Pancreas', system: 'Endocrine', origin: 'Genetic', specie: 'Human' },
  { id: 2, name: 'Cancer', location: 'Lung', system: 'Respiratory', origin: 'Environmental', specie: 'Human' },
];
const a = DiseaseFilter.create(cases, diagnoses);

a.addFilter('Pancreas');
a.caseFiltered; // [{ id: 1, patientName: 'John Doe', diagnosisId: 1, diagnosisName: 'Diabetes', publicNotes: [{ id: 1, content: 'public' }], privateNotes: [{ id: 1, content: 'private' }] }]
import { Case, Diagnosis, DiseaseFilter } from '../core/diseaseFilter';

describe('Disease filter', () => {
  it('filters cases when several diagnosis filters are applied together', () => {
    // Arrange
    const expectedPatientName1 = 'Chupito';
    const expectedPatientName2 = 'Juliana';
    const searchDiagnosis1 = 'Vías respiratorias altas';
    const searchDiagnosis2 = 'Cerebro';
    const fixtures = casesWithDiagnosis()
      .havingDiagnosisWithLocationAndCaseWithName(searchDiagnosis1, expectedPatientName1)
      .havingDiagnosisWithLocationAndCaseWithName(searchDiagnosis2, expectedPatientName2)
      .havingDiagnosisWithLocationAndCaseWithName('irrelevant location', 'irrelevant patient')
      .build();
    const diseaseFilter = DiseaseFilter.create(fixtures.cases, fixtures.diagnoses);
    diseaseFilter.addFilter(searchDiagnosis2);
    diseaseFilter.addFilter(searchDiagnosis1);

    // Act
    const result = diseaseFilter.casesFiltered;

    // Assert
    expect(result.length).toBe(2);
    expect(result[1].patientName).toBe(expectedPatientName1);
    expect(result[0].patientName).toBe(expectedPatientName2);
  });
});

function createCase(diagnosisId: number, patientName: string ): any {
  return {
    id: 1,
    patientName,
    diagnosisId,
    diagnosisName: 'irrelevant diagnosisName',
    publicNotes: [{ id: 1, content: 'irrelevant public' }],
    privateNotes: [{ id: 2, content: 'irrelevant private' }],
  };
}

function createDiagnosis(id: number, location: string): Diagnosis {
  return {
    id,
    name: 'irrelevant name',
    location,
    system: 'irrelevant system',
    origin: 'irrelevant origin',
    specie: 'irrelevant specie'
  };
}

function casesWithDiagnosis(): {
  havingDiagnosisWithLocationAndCaseWithName: (location: string, patientName: string) => any;
  build: () => { cases: Case[], diagnoses: Diagnosis[] };} {
  let diagnosisId = 0;
  let diagnoses: Diagnosis[] = [];
  let cases: Case[] = [];

  const add = (location: string, patientName: string) => {
    diagnosisId++;
    diagnoses.push(createDiagnosis(diagnosisId, location));
    cases.push(createCase(diagnosisId, patientName));
  }

  const builder = {
    havingDiagnosisWithLocationAndCaseWithName: (location: string, patientName: string) => {
      add(location, patientName);
      return builder;
    },
    build: () => ({
      cases,
      diagnoses
    })
  }

  return builder;
}

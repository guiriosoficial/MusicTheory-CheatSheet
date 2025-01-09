import Notes from './notes';

const CircleOfFifths = {
  [Notes.C]: {
    minorRelative: Notes.A,
    diminishedRelative: Notes.B,
  },
  [Notes.G]: {
    minorRelative: Notes.E,
    diminishedRelative: Notes.FSharp,
    sharps: [Notes.FSharp]
  },
  [Notes.D]: {
    minorRelative: Notes.B,
    diminishedRelative: Notes.CSharp,
    sharps: [Notes.FSharp, Notes.CSharp]
  },
  [Notes.A]: {
    minorRelative: Notes.FSharp,
    diminishedRelative: Notes.CSharp,
    sharps: [Notes.FSharp, Notes.CSharp, Notes.GSharp]
  },
  [Notes.E]: {
    minorRelative: Notes.CSharp,
    diminishedRelative: Notes.DSharp,
    sharps: [Notes.FSharp, Notes.CSharp, Notes.GSharp, Notes.DSharp]
  },
  [Notes.B]: {
    minorRelative: Notes.GSharp,
    diminishedRelative: Notes.ASharp,
    sharps: [Notes.CSharp, Notes.DSharp, Notes.FSharp, Notes.GSharp, Notes.ASharp],
    enharmonicEquivalent: {
      note: Notes.CFlat,
      flats: [Notes.CFlat, Notes.DFlat, Notes.EFlat, Notes.FFlat, Notes.GFlat, Notes.AFlat, Notes.BFlat],
      minorRelative: Notes.AFlat,
      diminishedRelative: Notes.BFlat,
    }
  },
  [Notes.GFlat]: {
    minorRelative: Notes.EFlat,
    diminishedRelative: Notes.F,
    flats: [Notes.GFlat, Notes.AFlat, Notes.BFlat, Notes.CFlat, Notes.DFlat, Notes.EFlat],
    enharmonicEquivalent: {
      note: Notes.FSharp,
      sharps: [Notes.FSharp, Notes.GSharp, Notes.ASharp,  Notes.CSharp, Notes.DSharp, Notes.ESharp],
      minorRelative: Notes.DSharp,
      diminishedRelative: Notes.F,
    }
  },
  [Notes.DFlat]: {
    minorRelative: Notes.BFlat,
    diminishedRelative: Notes.C,
    flats: [Notes.DFlat, Notes.EFlat, Notes.GFlat, Notes.AFlat, Notes.BFlat],
    enharmonicEquivalent: {
      note: Notes.CSharp,
      sharps: [Notes.CSharp, Notes.DSharp, Notes.ESharp, Notes.FSharp, Notes.GSharp, Notes.ASharp, Notes.BSharp],
      minorRelative: Notes.ASharp,
      diminishedRelative: Notes.C,
    }
  },
  [Notes.AFlat]: {
    minorRelative: Notes.F,
    diminishedRelative: Notes.G,
    flats: [Notes.AFlat, Notes.BFlat, Notes.DFlat, Notes.EFlat]
  },
  [Notes.EFlat]: {
    minorRelative: Notes.C,
    diminishedRelative: Notes.D,
    flats: [Notes.EFlat, Notes.AFlat, Notes.BFlat]
  },
  [Notes.BFlat]: {
    minorRelative: Notes.G,
    diminishedRelative: Notes.A,
    flats: [Notes.BFlat, Notes.EFlat]
  },
  [Notes.F]: {
    minorRelative: Notes.D,
    diminishedRelative: Notes.E,
    flats: [Notes.BFlat]
  }
};

export default CircleOfFifths;

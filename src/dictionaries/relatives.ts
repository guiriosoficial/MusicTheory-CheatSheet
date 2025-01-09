import Notes from "./notes";

const Relatives = {
  [Notes.C]: {
    minorRelative: Notes.A,
    diminishedRelative: Notes.B,
  },
  [Notes.G]: {
    minorRelative: Notes.E,
    diminishedRelative: Notes.FSharp,
  },
  [Notes.D]: {
    minorRelative: Notes.B,
    diminishedRelative: Notes.CSharp,
  },
  [Notes.A]: {
    minorRelative: Notes.FSharp,
    diminishedRelative: Notes.CSharp,
  },
  [Notes.E]: {
    minorRelative: Notes.CSharp,
    diminishedRelative: Notes.DSharp,
  },
  [Notes.B]: {
    minorRelative: Notes.GSharp,
    diminishedRelative: Notes.ASharp,
  },
  [Notes.GFlat]: {
    minorRelative: Notes.EFlat,
    diminishedRelative: Notes.F,
  },
  [Notes.DFlat]: {
    minorRelative: Notes.BFlat,
    diminishedRelative: Notes.C,
  },
  [Notes.AFlat]: {
    minorRelative: Notes.F,
    diminishedRelative: Notes.G,
  },
  [Notes.EFlat]: {
    minorRelative: Notes.C,
    diminishedRelative: Notes.D,
  },
  [Notes.BFlat]: {
    minorRelative: Notes.G,
    diminishedRelative: Notes.A,
  },
  [Notes.F]: {
    minorRelative: Notes.D,
    diminishedRelative: Notes.E,
  }
}

export default Relatives;

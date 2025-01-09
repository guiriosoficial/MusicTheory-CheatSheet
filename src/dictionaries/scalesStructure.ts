import Distances from "./distances";
import Intervals from "./intervals";
import Scales from "./scales";

const ScalesStructures = {
  [Scales.Jonian]: {
    partner: [Distances.T, Distances.T, Distances.ST, Distances.T, Distances.T, Distances.T, Distances.ST],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MajorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MajorSeventh],
    type: 'major',
    corresponding: Scales.NaturalMajor
  },
  [Scales.Dorian]: {
    partner: [Distances.T, Distances.ST, Distances.T, Distances.T, Distances.T, Distances.ST, Distances.T],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MinorSeventh],
    type: 'minor'
  },
  [Scales.Phrygian]: {
    partner: [Distances.ST, Distances.T, Distances.T, Distances.T, Distances.ST, Distances.T, Distances.T],
    intervals: [Intervals.Unison, Intervals.MinorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MinorSeventh],
    type: 'minor'
  },
  [Scales.Lydian]: {
    partner: [Distances.T, Distances.T, Distances.T, Distances.ST, Distances.T, Distances.T, Distances.ST],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MajorThird, Intervals.Tritone, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MajorSeventh],
    type: 'major'
  },
  [Scales.Mixolydian]: {
    partner: [Distances.T, Distances.T, Distances.ST, Distances.T, Distances.T, Distances.ST, Distances.T],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MajorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MinorSeventh],
    type: 'major'
  },
  [Scales.Aeolian]: {
    partner: [Distances.T, Distances.ST, Distances.T, Distances.T, Distances.ST, Distances.T, Distances.T],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MinorSeventh],
    type: 'minor',
    corresponding: Scales.NaturalMinor
  },
  [Scales.Locrian]: {
    partner: [Distances.ST, Distances.T, Distances.T, Distances.ST, Distances.T, Distances.T, Distances.T],
    intervals: [Intervals.Unison, Intervals.MinorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.Tritone, Intervals.MinorSixth, Intervals.MinorSeventh],
    type: 'minor'
  },
  [Scales.Chromatic]: {
    partner: [Distances.ST, Distances.ST, Distances.ST, Distances.ST, Distances.ST, Distances.ST, Distances.ST, Distances.ST, Distances.ST, Distances.ST, Distances.ST, Distances.ST],
    intervals: [Intervals.Unison, Intervals.MinorSecond, Intervals.MajorSecond, Intervals.MinorThird, Intervals.MajorThird, Intervals.PerfectFourth, Intervals.Tritone, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MajorSixth, Intervals.MinorSeventh, Intervals.MajorSeventh]
  },
  [Scales.NaturalMinor]: {
    partner: [Distances.T, Distances.ST, Distances.T, Distances.T, Distances.ST, Distances.T, Distances.T],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MinorSeventh],
    type: 'minor',
    corresponding: Scales.Aeolian
  },
  [Scales.NaturalMajor]: {
    partner: [Distances.T, Distances.T, Distances.ST, Distances.T, Distances.T, Distances.T, Distances.ST],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MajorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MajorSeventh],
    type: 'major',
    corresponding: Scales.Jonian
  },
  [Scales.MelodicMinorAsc]: {
    partner: [Distances.T, Distances.ST, Distances.T, Distances.T, Distances.T, Distances.T, Distances.ST],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MajorSixth, Intervals.MajorSeventh],
    type: 'minor',
  },
  [Scales.MelodicMinorDesc]: {
    partner: [Distances.T, Distances.T, Distances.ST, Distances.T, Distances.T, Distances.ST, Distances.T],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MajorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MinorSeventh],
    type: 'minor',
  },
  [Scales.MelodicMinorBach]: {
    partner: [Distances.ST, Distances.T, Distances.T, Distances.T, Distances.T, Distances.ST, Distances.T],
    intervals: [Intervals.Unison, Intervals.MinorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MinorSeventh],
    type: 'minor',
  },
  [Scales.HarmonicMinor]: {
    partner: [Distances.T, Distances.ST, Distances.T, Distances.T, Distances.TST, Distances.ST],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSixth, Intervals.MajorSeventh],
    type: 'minor',
  },
  [Scales.MajorPentatonic]: {
    partner: [Distances.T, Distances.T, Distances.TST, Distances.T, Distances.TST],
    intervals: [Intervals.Unison, Intervals.MajorSecond, Intervals.MajorThird, Intervals.PerfectFifth, Intervals.MajorSixth],
    type: 'major',
  },
  [Scales.MinorPentatonic]: {
    partner: [Distances.TST, Distances.T, Distances.T, Distances.TST, Distances.T],
    intervals: [Intervals.Unison, Intervals.MinorThird, Intervals.PerfectFourth, Intervals.PerfectFifth, Intervals.MinorSeventh],
    type: 'major', // Based on the major scale
  },
  // penta blues maior
  // penta blues menor
  // diminua -> T, ST, T, ST, T, ST, T, ST
  // Dom-dim I(Domintante diminuta) -> St, T, ST, T, ST, T, ST, T
  // hexafonica -> T, T, T, T, T, T
};

export default ScalesStructures;

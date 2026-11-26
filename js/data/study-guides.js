import { study2017 } from './study-2017.js';
import { study2021 } from './study-2021.js';

export const studyGuides = {
  ...study2017,
  ...study2021,
};

export function getAvailableAreas() {
  const set = new Set();
  for (const entry of Object.values(studyGuides)) {
    if (entry.area) set.add(entry.area);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, 'pt-BR'));
}

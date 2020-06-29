import {
  MODIFY_YEAR,
  MODIFY_BRANCH,
  MODIFY_SEM,
  MODIFY_AVGLABGPA,
  MODIFY_AVGSUBGPA,
} from "./types";

export const modifyYear = (id, year) => ({
  type: MODIFY_YEAR,
  year: year,
  id: id,
});

export const modifyBranch = (id, branch) => ({
  type: MODIFY_BRANCH,
  branch: branch,
  id: id,
});

export const modifySem = (id) => ({
  type: MODIFY_SEM,
  id: id,
});

export const modifyAvgSub = (avgSubjects) => ({
  type: MODIFY_AVGSUBGPA,
  avgSubjects: avgSubjects,
});

export const modifyAvgLab = (avgLabs) => ({
  type: MODIFY_AVGLABGPA,
  avgLabs: avgLabs,
});

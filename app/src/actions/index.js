import {
  //MODIFY_YEAR,
  MODIFY_BRANCH,
  MODIFY_SEM,
  MODIFY_AVGGPA,
  //MODIFY_AVGSUBGPA,
  MODIFY_BEE,
  MODIFY_CHEMISTRY1,
  MODIFY_CHEMISTRY2,
  MODIFY_CPP,
  MODIFY_EG,
  MODIFY_EME,
  MODIFY_MATHS1,
  MODIFY_MATHS2,
  MODIFY_MECHANICS,
  MODIFY_PHYSICS1,
  MODIFY_PHYSICS2,
} from "./types";

// export const modifyYear = (id, year) => ({
//   type: MODIFY_YEAR,
//   year: year,
//   id: id,
// });

export const modifyBranch = (
  id
  // branch
) => ({
  type: MODIFY_BRANCH,
  // branch: branch,
  id: id,
});

export const modifySem = (id) => ({
  type: MODIFY_SEM,
  id: id,
});

export const modifyAvgGPA = (avgGPA) => ({
  type: MODIFY_AVGGPA,
  avgGPA: avgGPA,
});

// export const modifyAvgLab = (avgLabs) => ({
//   type: MODIFY_AVGLABGPA,
//   avgLabs: avgLabs,
// });

export const modifyMaths1 = (per, upclass, attclass, totclass) => ({
  type: MODIFY_MATHS1,
  per: per,
  upclass: upclass,
  attclass: attclass,
  totclass: totclass,
});

import { MODIFY_YEAR, MODIFY_BRANCH, MODIFY_SEM } from "./types";

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

import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

type Props = {};

const anthonyPursuesRelentlessly = (responsibility: string) => {};
const creativityUnlocked = () => {};
const thoroughlyCommunicate = () => {};

type DevHumorMet = "Unmet" | "Satisfactory" | "Exemplary";

interface HiringOutcome {
  knowledgeBrought: number;
  clearAndSimplifiedCommunication: boolean;
  creativityUnleashed: boolean;
  developerRatingOfCompanysHumor: DevHumorMet;
  companysGrowthUnlocked: boolean;
}

/**
 * The function `crushed` checks if Anthony is hired and pursues responsibilities
 * relentlessly if he is.
 * @param {boolean} isAnthonyHired - A boolean value indicating whether Anthony is
 * hired or not.
 * @param {string[]} responsibilities - The `responsibilities` parameter in the
 * `crushed` function is an array of strings that represents the tasks or duties
 * that Anthony is responsible for.
 * @returns If `isAnthonyHired` is true, the function `crushed` will iterate over
 * each responsibility in the `responsibilities` array and call the
 * `anthonyPursuesRelentlessly` function for each responsibility. After processing
 * all responsibilities, the function will return `true`. If `isAnthonyHired` is
 * false, the function will return `false`.
 */
const crushed = (
  isAnthonyHired: boolean,
  responsibilities: string[],
): boolean => {
  if (isAnthonyHired) {
    for (const responsibility of responsibilities) {
      anthonyPursuesRelentlessly(responsibility);
    }
    return true;
  }
  return false;
};

const checkCreativity = (name: string) => {};

/**
 * The function `hireAnthonyDombrowski` determines the hiring outcome based on
 * responsibilities and whether the candidate was hired, with potential
 * improvements in knowledge, communication, creativity, humor rating, and growth
 * if hired.
 * @param {string[]} responsibilities - The `responsibilities` parameter in the
 * `hireAnthonyDombrowski` function is an array of strings that represents the
 * responsibilities associated with the job position. These responsibilities could
 * include tasks, duties, or roles that the hired individual would be expected to
 * fulfill as part of their job.
 * @param {boolean} hired - The `hired` parameter in the `hireAnthonyDombrowski`
 * function is a boolean value that indicates whether Anthony Dombrowski has been
 * hired for the job. If `hired` is `true`, it means he has been hired, and if
 * it's `false`, it
 * @returns The function `hireAnthonyDombrowski` returns a `HiringOutcome` object
 * with properties `knowledgeBrought`, `clearAndSimplifiedCommunication`,
 * `creativityUnleashed`, `developerRatingOfMintlifyHumor`, and
 * `mintlifyGrowthUnlocked`. The values of these properties are determined based
 * on the input parameters `responsibilities` and `hired`. If
 */
const hireAnthonyDombrowski = (
  responsibilities: string[],
  hired: boolean,
): HiringOutcome => {
  let hiringOutcome: HiringOutcome = {
    knowledgeBrought: Math.random() * 100,
    clearAndSimplifiedCommunication: false,
    creativityUnleashed: false,
    developerRatingOfCompanysHumor: "Unmet",
    companysGrowthUnlocked: false,
  };

  if (hired) {
    crushed(hired, responsibilities);
    hiringOutcome.knowledgeBrought = Number.MAX_VALUE;
    hiringOutcome.clearAndSimplifiedCommunication = true;
    hiringOutcome.creativityUnleashed = true;
    hiringOutcome.developerRatingOfCompanysHumor = "Exemplary";
    hiringOutcome.companysGrowthUnlocked = true;
  }

  return hiringOutcome;
};

/**
 * The function `checkCandidateCreativity` generates a random creativity level for
 * a candidate, with a special case for a candidate named "Anthony Dombrowski"
 * having maximum creativity level.
 * @param {string} candidateName - The `candidateName` parameter in the
 * `checkCandidateCreativity` function is a string that represents the name of a
 * candidate whose creativity level is being checked.
 * @returns The `checkCandidateCreativity` function returns the creativity level
 * of a candidate. If the candidate's name is "Anthony Dombrowski", the creativity
 * level is set to the maximum possible value (`Number.MAX_VALUE`). Otherwise, a
 * random creativity level between 0 and 100 is generated and returned.
 */
const checkCandidateCreativity = (candidateName: string) => {
  const creativity_levels = ["meh", "ok", "unbelievable"];
  const rnd = Math.random() * 100 * 2;
  let creativityLvl = creativity_levels[rnd % 2];

  if (candidateName === "Anthony Dombrowski") {
    // creativityLvl = Number.MAX_VALUE;
    creativityLvl = creativity_levels[2];
  }

  return creativityLvl;
};

/**
 * The function `getSoftwareEngineerExp` returns the string "2017 - 2019 @ Ping
 * Identity".
 * @returns The function `getSoftwareEngineerExp` returns the string "2017 - 2019
 * @ Ping Identity".
 */
const getSoftwareEngineerExp = () => {
  return "2017 - 2019 @ Ping Identity";
};

/**
 * The function `getLeadDeveloperAdvocate` returns the string "2019 - 2021 @ Ping
 * Identity".
 * @returns The function `getLeadDeveloperAdvocate` returns the string "2019 -
 * 2021 @ Ping Identity".
 */
const getLeadDeveloperAdvocateExp = () => {
  return "2019 - 2021 @ Ping Identity";
};

/**
 * The function `getProductManagerOfDevEx` returns the string "2021 - 2023 @ Ping
 * Identity".
 * @returns The function `getProductManagerOfDevEx` returns the string "2021 -
 * 2023 @ Ping Identity".
 */
const getProductManagerOfDevExExp = () => {
  return "2021 - 2023 @ Ping Identity";
};

/**
 * The function `getDevExConsultant` returns the string "2024 @ SpruceID".
 * @returns "2024 @ SpruceID"
 */
const getDevExConsultantExp = () => {
  return "2024 @ SpruceID";
};

/**
 * The function `getAnthonysDeveloperExperience` retrieves Anthony's history in
 * various roles related to software engineering and developer experience.
 * @returns An array containing the experiences in the field of software
 * development and developer experience of Anthony is being returned.
 */
const getAnthonysDeveloperExperience = () => {
  const history: string[] = [];

  const softwareEngineer = getSoftwareEngineerExp();

  const leadDeveloperAdvocate = getLeadDeveloperAdvocateExp();

  const productManagerOfDevEx = getProductManagerOfDevExExp();

  const devExConsultant = getDevExConsultantExp();

  history.push(
    softwareEngineer,
    leadDeveloperAdvocate,
    productManagerOfDevEx,
    devExConsultant,
  );

  return history;
};

function Resume({}: Props) {
  return (
    <Grid container>
      <Grid>
        <Typography>resume</Typography>
      </Grid>
    </Grid>
  );
}

export default Resume;

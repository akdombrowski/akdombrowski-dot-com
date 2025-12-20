// @ts-expect-error - allow untyped fetcher for simple SWR usage
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default fetcher;

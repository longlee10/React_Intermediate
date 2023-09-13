interface Action {
  type: "INCREMENT" | "RESET";
}

const counterReducer = (state: number, { type }: Action): number => {
  if (type === "INCREMENT") return state + 1;
  if (type === "RESET") return 0;
  return state;
};

export default counterReducer;

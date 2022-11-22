import Select from "react-select";
import Placeholder from "react-select/dist/declarations/src/components/Placeholder";
import "./styles.css";

const options = [
  { value: "dança1", label: "dança1" },
  { value: "dança2", label: "dança2" },
  { value: "dança3", label: "dança3" },
  { value: "dança4", label: "dança4" },
];
const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    overflow: "hidden",
    color: "black !important",
    backgroundColor: "var(--header-color)",
    fontSize: 23,
    paddingLeft: "center",
    height: 30,
    width: "110px",
    borderRadius: "15px",
    textAlign: "center",
  }),
  singleValue: (styles: any) => ({ ...styles, color: "white" }),
  placeholder: (defaultStyles: any) => {
    return {
      ...defaultStyles,
      color: "#ffffff",
    };
  },
};
export const Filtro = () => {
  return (
    <Select
      components={{
        IndicatorSeparator: () => null,
      }}
      placeholder="Filtro"
      options={options}
      styles={colourStyles}
    />
  );
};

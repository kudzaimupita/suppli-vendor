import React from "react";
import Select from "react-select";
import { Row, Col } from "reactstrap";

function ReactSelect() {
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [multipleSelect, setMultipleSelect] = React.useState(null);
  return (
    <>
      <Row>
        {" "}
        <Select
          size="sm"
          className="react-select react-select-primary"
          classNamePrefix="react-select"
          name="singleSelect"
          value={singleSelect}
          onChange={(value) => setSingleSelect(value)}
          options={[
            {
              value: "",
              label: "Single Option",
              isDisabled: true,
            },
            { value: "2", label: "Foobar" },
            { value: "3", label: "Is great" },
          ]}
          placeholder="Single Select"
        />
        <Select
          className="react-select react-select-info"
          classNamePrefix="react-select"
          placeholder="Choose City"
          name="multipleSelect"
          closeMenuOnSelect={false}
          isMulti
          value={multipleSelect}
          onChange={(value) => setMultipleSelect(value)}
          options={[
            {
              value: "",
              label: " Multiple Options",
              isDisabled: true,
            },
            { value: "2", label: "Paris " },
            { value: "3", label: "Bucharest" },
            { value: "4", label: "Rome" },
            { value: "5", label: "New York" },
            { value: "6", label: "Miami " },
            { value: "7", label: "Piatra Neamt" },
          ]}
        />
      </Row>
    </>
  );
}

export default ReactSelect;

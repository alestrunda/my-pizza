import { useState } from "react";

export interface IOption {
  id: string;
  name: string;
}

interface Props {
  onChange: (ids: string[]) => void;
  options: IOption[];
  selectedOptions: string[];
}

interface OptionProps extends IOption {
  onClick: (id: string) => void;
}

const Option = ({ id, name, onClick }: OptionProps) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <button className="btn btn-outline-dark me-2" onClick={handleClick}>
      {name}
    </button>
  );
};

const MultiSelect = ({ onChange, options, selectedOptions }: Props) => {
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const handleSelectedExtraChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedId(e.target.value);
  };

  const handleExtrasAdd = () => {
    if (!selectedId) return;
    setSelectedId(undefined);
    onChange([...selectedOptions, selectedId]);
  };

  const handleExtrasRemove = (id: string) => {
    onChange(selectedOptions.filter((optionId: string) => optionId !== id));
  };

  return (
    <div className="mb-3">
      <div className="row">
        <div className="col">Please select multiple extras:</div>
        <div className="col">
          <select
            className="form-control"
            onChange={handleSelectedExtraChange}
            value={selectedId || ""}
          >
            <option value="">Select</option>
            {options.map((option: IOption) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <button
            className="btn btn-dark"
            disabled={!selectedId}
            onClick={handleExtrasAdd}
          >
            Add
          </button>
        </div>
      </div>
      {selectedOptions.length > 0 && (
        <div className="mt-2">
          {selectedOptions.map((id: string) => {
            const option = options.find((option: IOption) => option.id === id);
            if (!option) return null;
            return <Option key={id} onClick={handleExtrasRemove} {...option} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;

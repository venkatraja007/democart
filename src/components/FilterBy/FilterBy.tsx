import * as React from 'react';
import Slider from '@material-ui/core/Slider';
import "./FilterBy.scss"

const marks = [
  {
    value: 100,
    label: '$100',
  },
  {
    value: 50000,
    label: '$50000',
  },
];


function valuetext(value: number) {
  return `$${value}`;
}

function FilterBy(props) {
  let { handleFilterPrice } = props;
  const [value, setValue] = React.useState<number[]>([1000, 10000]);

  const handleChange = (event: any, newValue: number | number[]) => {
    handleFilterPrice(newValue)
    setValue(newValue as number[]);
  };

  return (
    <div className="">
      <Slider
        min={100}
        max={50000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks={marks}
      />
      <p id="range-slider">
          Price
      </p>
    </div>
  );
}

export default FilterBy;
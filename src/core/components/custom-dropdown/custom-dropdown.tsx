import { ReactElement, useState } from 'react';
import './custom-dropdown.scss';
import { ReactComponent as DownArrow } from '../../../assets/icons/left-arrow.svg';
import useComponentVisible from '../../../core/hook/useComponentVisible';
import SVG from '../../types/svg.type';

interface ICustomDropdownProps {
  item: string[];
  setSelected?: (newSelectedValue: string) => void;
  label: string;
  Icon: SVG;
}

const CustomDropdown = ({
  item,
  setSelected,
  label,
  Icon,
}: ICustomDropdownProps): ReactElement => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [selected, setSelectedLocal] = useState<string>('');
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div className="custom-dropdown" ref={ref}>
      <div className="custom-dropdown__label-and-icon">
        <label className="custom-dropdown__label-and-icon__label">
          <Icon className="custom-dropdown__label-and-icon__icon" />
          {label}
        </label>
      </div>
      <div
        className="custom-ropdown-btn"
        style={{ color: selected ? '#3d3d3d' : '#989898' }}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span>{selected === '' ? `اختر ${label}` : selected}</span>
        <DownArrow
          className="down-arrow"
          style={{ transform: isActive ? 'rotate(90deg)' : 'rotate(270deg)' }}
        />
      </div>
      {isActive && isComponentVisible && (
        <div className="custom-ropdown-content">
          {item.map((opinion, i) => (
            <div
              key={i}
              onClick={() => {
                // setSelected(opinion);
                setSelectedLocal(opinion);
                setIsComponentVisible(false);
              }}
              className="custom-ropdown-item"
            >
              {opinion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
